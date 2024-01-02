# Toolbox API Reference

## Toolbox Script (hmod) File


:::{important}
All statements need to be closed by a semicolon.
:::


```{py:function} parameters var1 var2 ...;

Declare parameters that are used in the **vfi** block.

"parameters" should include those which (1) enter the **vfi** block explicitly; or (2) enter the definition of *var_pre_vfi* and will change with *var_agg*.

```


````{py:function} var_shock var1 var2 ...;

Declare individual exogenous state variables. They need to be Markov chains with discretized values specified.

Their joint transition matrix needs to be specified in varaible *shock_trans*.

Example:

```HANS

var_shock e z;
e_grid = [1.0, 2.0];
e_trans = [0.4 0.6;0.6 0.4];
z_grid = [2.0,3.0,4.0];
z_trans = [0.6 0.2 0.2;0.2 0.6 0.2; 0.2 0.2 0.6];
% form tensor product
[e,z] = ndgrid(e,z);
e = e(:)';
z = z(:)';
shock_trans = kron(z_trans, e_trans);

```
````


```{py:function} var_state var1 var2 ...;

Declare individual endogenous state variables. They need to be continuous varialbes.

The grid for each endogenous state variable needs to be specified. Value and policy functions will be approximated over these grids with linear interpolation or cubic splines.
```


````{py:function} var_pre_vfi var1 var2 ...;

Declare variables that are simple functions of  *var_shock* and/or *var_state*, which can be evaluated before the vfi block.

A *var_pre_vfi* can be used in defining the initial values of *var_policy* or direclty used in the vfi block. This avoids unnecessary repetitive evaluations of these varaibles in solving individuals' decision problems.

Example:

```{code} HANS

parameters beta r w;
...

var_shock e;
...

var_state a;
...

var_pre_vfi budget;
budget = (1+r)*a + w*e;

var_policy ap;
...

vfi;
	c = budget - ap;
	Tv = u(c) + beta*EXPECT(v(ap));
	ap >= 0.0;
end;

```
````


````{py:function} var_policy var1 var2 ...;

Declare individual policy variables, i.e., variables to be optimized with. 
Their initial values need to be specified, which can be dependent on state values or *var_pre_vfi*.

Example:

```{code} HANS

parameters beta r w;
...

var_shock e;
...

var_state a;
...

var_pre_vfi budget;
budget = (1+r)*a + w*e;

var_policy c ap;
initial ap 0.0;
initial c budget;

vfi;
	Tv = u(c) + beta*EXPECT(v(ap));
	ap >= 0.0;
	c + ap == budget;
end;

```

````


````{py:function} var_aux var1 var2 ...;

Declare auxilliary variables which can be evaluated as simple functions of *var_shock*, *var_state*, and/or *var_policy*.

They need to be defined in the **vfi** block and will be returned.

Example:

```HANS

parameters beta r w;
...

var_shock e;
...

var_state a;
...

var_pre_vfi budget;
budget = (1+r)*a + w*e;

var_policy c ap;
initial ap 0.0;
initial c budget;

var_aux inc;

vfi;
	Tv = u(c) + beta*EXPECT(v(ap));
	ap >= 0.0;
	c + ap == budget;
	inc = a*r + w*e;
end;

```
````


````{py:function} vfi; ... end;

Define the **vfi** block. The block is executed line by line from top to bottom. In the block,

- The updated value after each iteration needs to be assigned to "Tv"
- The objective of the optimization needs to be assigned to "objective". If variable "objective" is not found, "Tv" will be used as the objective.
- Future value function (i.e., value function from the last iteration) can be evaluated by calling v(var_state_1_future, var_state_2_future,...). If calling is warpped by EXPECT(), then the expected value will be calculated using the transition matrix conditional on current value of exogenous states.
- Equality or inequality constraints can be specified with "==", and "<=" or ">=".
- All *var_aux*s need to be defined.
- The state transition is inferred from the arguments when evaluating future value functions. One can also specify the state transition explicity by the line: *var_state*(+1) = {state_value_1, state_value_2, ...} {prob_1, prob_2, }, where state_value_1, state_value_2, ... are values of states, and prob_1, prob_2 are the associated probabilities (for stochastic transitions).

Example:

```HANS

parameters beta r w;
...

var_shock e;
...

var_state a;
...

var_pre_vfi budget;
budget = (1+r)*a + w*e;

var_policy c ap;
initial ap 0.0;
initial c budget;

var_aux inc;

vfi;
	% assign updated value to Tv
	% Tv will also be the objective
	% state transition is inferred to be "ap"
	Tv = u(c) + beta*EXPECT(v(ap));
	
	% can also specify the state transition explicitly
	a(+1) = {ap} {1};
	
	% equality and inequality constraints
	ap >= 0.0;
	c + ap == budget;
	
	% var_aux needs to be assigned
	inc = a*r + w*e;
end;

```
````

:::{note}
Defining the following equilibrium model and required information is optional. The parser can generate standalone codes for solving the value function iteration.
:::

```{py:function} var_agg var1 var2 ...;

Declare unknowns in aggregate equilibirium conditions.

Their initial values need to be specified.

```


```{py:function} var_agg_shock var1 var2 ...;

Declare exogenous time-varying aggregate variables.

Their steady state values need to be specified.

For *var_agg_shock* named "var1", its time sequence value can be overwritten by supplying a field named "var1_t" in the options passed to the model solving script.

```


````{py:function} model; ... end;

Define the system of equations that represents the aggregate equilibrium system. In the block,

- Each equation is defined with a line that contains "==".
- Statements are evaluated from top to bottom, which assign values to intermediate variables.
- All individual parameters that change with *var_agg* (i.e., wage and interest rates that depend on capital stock) need to be updated before defining the system of equations.
- *var_policy* can be used in defining the equation, which represents the aggregates of individual policy functions integrated over the distribution of states.
- Lags and leads of variables are represented by varname(-l) or varname(+l), where l is the number of lag or lead periods. Only variables declared as *var_agg* can have lags and leads (i.e., intermediate values assigned cannot be indexed with lags or leads). 
- Pre-determined variables should enter the system as lagged variables.
- All left hand side assigned variables will be returned after the equations are solved. This facilitates calculating extra equilibrium variables of interests.


Example:

```HANS

parameters beta r w;
...


var_state a;
...

var_policy ap;
...

vfi;
	...
end;

var_agg K;
K = 30.0;	% initial value for solving the stead state
var_agg_shock Z;
Z = 1.0;	% steady state value

model;
	% update parameters that enter vfi
	% capital is pre-determined, use the lagged value K(-1)
    r = alpha * Z * K(-1)^(alpha-1) * L^(1-alpha) - delta;
    w = (1-alpha) * Z * K(-1)^alpha * L^(-alpha);
    
    % use "==" to define equations
    % ap used below is the aggregate of policy ap
    K == ap; % asset demand = asset supply
    
    % post evaluation; all assignments will be returned
    Y = Z*(K(-1)^alpha)*(L^(1-alpha));
    I = K - (1 - delta)*K(-1);
    C = Y - I;
end;

```
````

````{py:function} model_modname(var_agg_1, var_agg_2); ... end;

Define an alternative equilibrium system with unknowns overwritten by (var_agg_1, var_agg_2, ...).

The parser will generate a "solve_modname.m" script file for each alterantive model_modname block.

This allows multiple different models to share the same **vfi** block (e.g., the system for calibration is different from the system of solving the equilibrium).

Example:

```HANS

...

var_agg K;

model;
	% this block is used for solving the equilibrium
    r = alpha * Z * K(-1)^(alpha-1) * L^(1-alpha) - delta;
    w = (1-alpha) * Z * K(-1)^alpha * L^(-alpha);
    K == ap; % asset demand = asset supply
end;

model_cali(K,beta);
	% this block is used for calibration 
    r = alpha * Z * K(-1)^(alpha-1) * L^(1-alpha) - delta;
    w = (1-alpha) * Z * K(-1)^alpha * L^(-alpha);
    Y = Z*(K(-1)^alpha)*(L^(1-alpha));
    K == ap; % asset demand = asset supply
    K/Y == KY_ratio_target;	% for calibration
end;
```
````


## MATLAB Interfaces


```{py:function} solve_vfi(options)

Solve the value function iteration.

:param options: a structure that can contain fields below
	- interp_order: the order of interpolation and extrapolation in value function approximations. Default: '4+3'
		- '4': cubic
		- '2': linear
		- '4+2': cubic interpolation + linear extraplation
		- '4+3': cubic interpolation + quadrait extrapolation 
		- 'pchip': MATLAB's pchip (only for single-dimensional endogenous state)
    - algorithm: the algorithm used in solving the optimization problem. Default: 'dbrent' for single-dimensional choice with box constraints; 'donlp2' otherwise. Allowed values:
    	- 'dbrent'
    	- 'golden'
    	- 'brent'
    	- 'nr3_dbrent'
    	- 'donlp2' 
	- vfi_tol_v: tolerance for convergence in value functions. Default: 1e-6
	- vfi_tol_policy: tolerance for convergence in policy functions. Default: 1e-12
	- print_freq: frequencies of printing information. Default: 100
	- solver_tol_x: tolerance for optimality for the optimization problem. Default: 1e-8
	- solver_tol_con: tolerance for feasibility for the optimization problem. Default: 1e-8
	- num_threads: number of threads used in solving the optimization problem across state values. Default: value returned by feature('numcores')

:param options: parameter values contained in the structure will be used to overwrite existing ones.

:return: a structure that contains the solved policy functions

```

%%

```{py:function} solve_ss(options)

Solve the steady state of the equilbrium system defined in the **model** block.

:param options: a structure that can contain fields below
	- ss_solver: the equation solver used for solving the steady state system. Default: 'Broyden'. Allowed values:
		- 'Broyden'
		- 'Newton'
		- 'lsqnonlin'
		- 'CoDoSol'
		- 'fsolve'
    - ss_ftol: tolerance for residuals of equations passed to the equation solver. Default: 1e-4
    - ss_xtol: tolerance for step sizes passed to the equation solver. Default: 1e-6
    - ss_findiffstep: finite difference step for calculating numerical derivatives. Default: 1e-4
    - HANS_x: initial values of unknowns

:param options: can also contain options passed to solving the value function iteration

:param options: can also contain parameter values to be overwritten

:return: a structure that contains the solved steady state

```

%%

```{py:function} solve_trans_linear(ss, options)

Solve the linearized transition path following the Sequence Space Jacobian method. The Jacobian matrix of individual aggregates with respect to parameters is calculated using the fake news algorithm.

:param ss: a structure that conatins the solved steady state (returned by solve_ss) around which the linearization is carried out

:param options: a structure that can contain fields below
	- T: number of periods of the transition path. Default: 200

:param options: for a *var_agg_shock* named "var", supply the updated time sequence in field "var_t" of the structure

:param options: can also contain options passed to solving the value function iteration

:param options: can also contain parameter values to be overwritten

:return: a structure that contains the solved transition path and the Jacobian matrix of individual aggregates with respect to parameters

```

```{py:function} solve_trans_nonlinear(init_ss, final_ss, options)

Solve the non-linear transition path.

:param init_ss: a structure that conatins the initial steady state that the transition path starts from

:param final_ss: a structure that conatins the final steady state that the transition path converges to

:param options: a structure that can contain fields below
	- T: number of periods of the transition path. Default: 200
	- trans_linear_rslt: the solved linearized transition path, which contains the Jacobian matrix of individual aggregates with respect to parameters, that is used to form the initial Jacobian of the nonlinear equation system. Default: empty; will call solve_trans_linear to calculate
	- trans_solver: the equation solver. Default: "Broyden". Allowed values:
		- "Broyden"
		- "FixedJacobian"
		- "BroydenMod"
		- "Newton"
		- "fsolve"
    - trans_ftol: tolerance for residuals of equations passed to the equation solver. Default: 1e-4
    - trans_xtol: tolerance for step sizes passed to the equation solver. Default: 1e-6
    - HANS_x: initial values of unknowns

:param options: can also contain options passed to solving the value function iteration

:param options: can also contain parameter values to be overwritten

:return: a structure that contains the solved nonlinear transition path

```

%%

```{py:function} solve_*modname*(options)

Solve the steady state of the alternative equilbrium system defined in the model_*modname* block.

Functions share the same input and output structures as solve_ss.

```

%%

```{py:function} simulate_stochastic(eq_rslt, options)

Simulate individual random samples with the solved equilibrium.

:param eq_rslt: a structure that contains a steady state equilibrium (returned by solve_ss) or a transition path (returned by solve_nonlinear_trans)

:param options: a structure that can contain fields below
	- num_samples: number of individual samples. Default: 1e4
	- num_periods: number of periods. Default: 1e3
	- simulate_initials: a structure that contains the initial state values. Default: empty; will sample state values from the stationary distribution
	- interp_order: the order of interpolation and extrapolation in policy function approximations. Default: '2'
		- '4': cubic
		- '2': linear
		- '4+2': cubic interpolation + linear extraplation
		- '4+3': cubic interpolation + quadrait extrapolation 
	- simu_print_freq: frequency of printing the summary statsitics along the simulation. Default: 1000
	- num_threads: number of threads used in interpolating policy functions. Default: value returned by feature('numcores')

```