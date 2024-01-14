(ks_1998)=
# Getting Started: Krusell and Smith (1998)

The model describes a production economy with idiosyncratic uninsurable labor income risks faced by households. The aggregate shock is a shock to total factor productivity. The toolbox solves the steady state, and the deterministic linear/non-linear transition path after an unexpected aggregate shock. Following [Boppart, Krusell and Mitman (2018)](https://www.sciencedirect.com/science/article/abs/pii/S0165188918300022) and [Auclert et al. (2021)](https://onlinelibrary.wiley.com/doi/full/10.3982/ECTA17434), the deterministic transition path characterizes the first order effect of the aggregate shock.

We use the parameterization from [Den Haan, Judd and Juillard (2010): Computational suite of models with heterogeneous agents: Incomplete markets and aggregate uncertainty](https://www.sciencedirect.com/science/article/pii/S0165188909001286). We also follow the notation in the paper.

## The Model

Households are heterogeneous in their employment status $e\in\{0,1\}$ and capital holding $a \in R^+$. They solve the following Bellman equation:


$$
v_t(e,a) = \max_{c,a'} \log(c)+ \beta\mathbb{E}[v_{t+1}(e',a')|e]
\\s.t. \quad c+a' \leq  (1+r_t)a +  [(1-\tau)\overline{l}e + \mu(1-e)]w_t
\\a'\geq 0, c \geq 0,
$$
```{math}
:label: bellman
```

where $\bar{l}$ is the labor supply if being employed, $\tau$ is the labor income tax rate, and $\mu$ is the unemployment insurance payment rate. $r_t$ and $w_t$ are interest rate and wage rate, respectively.  Households face a no-borrowing constraint $a'\geq 0$.

Representative firms hire capital and labor and produce according to $Y_t = Z_t K_t^{\alpha} L_t^{1-\alpha}$. Capital depreciates at rate $\delta$. Interest and wage rates are competitively determined


$$
r_t = \alpha Z_t K_t^{\alpha-1}L_t^{1-\alpha} - \delta
\\
w_t = (1-\alpha)Z_tK_t^{\alpha}L_t^{-\alpha}
$$
```{math}
:label: competitive_prices
```

Given an initial distribution over households' states, $\Phi_0$, a sequential competitive equilibrium is a sequence of (1) distribution over households' states $\{\Phi_t\}_{t=0}^{\infty}$, (2) households' value and policy functions $\{v_t,g_{c,t},g_{a',t}\}_{t=0}^{\infty}$, and (3) aggregate quantities and prices $\{K_t, L_t, r_t, w_t\}_{t=0}^{\infty}$ such that

- $\{v_t,g_{c,t},g_{a',t}\}$ solve households' decision problems defined by {eq}`bellman`
- Market clearing: $K_t=\int a \ \mathrm{d}\Phi_t(e,a)$, $L_t=\int \bar{l} e \ \mathrm{d}\Phi_t(e,a)$. Goods market clearing implied by Walras's law.
- $r_t$ and $w_t$  are determined by {eq}`competitive_prices`.
- Unemployment benefit is financed by labor income tax: $w_t\int \bar{l} \tau e \ \mathrm{d}\Phi_t(e,a)=w_t\int (1-e)\mu \ \mathrm{d}\Phi_t(e,a)$.
- $\{\Phi_t\}$ are consistent with policy functions $g_{a',t}$ and exogenous transitions of $e$.

## The Toolbox Script (hmod) File

The model can be represented using {download}`KS_JEDC10.hmod`, listed below.

```{literalinclude} KS_JEDC10.hmod
:language: HANS
:linenos:
```

The goal of the script file is to  define a  **vfi** block (Value Function Iteration) that defines the individual decision problem, and a **model** block that defines the aggregate equilibrium conditions. 

Information required for solving the individual problem needs to be defined  before the **vfi** block. Blocks defining the information are explained in order.

```{literalinclude} KS_JEDC10.hmod
:language: HANS
:linenos:
:lineno-match:
:start-at: parameters
:end-before: var_shock
```

This block defines parameters that are used in the **vfi** block and their values.

```{literalinclude} KS_JEDC10.hmod
:language: HANS
:linenos:
:lineno-match:
:start-at: var_shock
:end-before: var_state
```

This block declares individual exogenous states in *var_shock* and specifies their values. They need to be defined as discrete Markov processes with joint transition matrix defined in *shock_trans*. Given the calibration of unemployment insurance payment $\mu$, balanced-budget labor income tax rate $\tau$ can be determined in advance.

```{literalinclude} KS_JEDC10.hmod
:language: HANS
:linenos:
:lineno-match:
:start-at: var_state
:end-before: var_pre_vfi
```

This block declares individual endogenous states in *var_state*, and specifies the values of discretized grids over which the value and policy functions are approximated. For multi-dimension states, functions will be approximated over the tensor products of discretized state values.

```{literalinclude} KS_JEDC10.hmod
:language: HANS
:linenos:
:lineno-match:
:start-at: var_pre_vfi
:end-before: var_policy
```

This block defines variables that are simple functions of exogenous and/or endogenous states, which can be evaluated before solving the decision problem. Here, the budget is simply the sum of capital and labor income, evaluated at certain prices which are defined as parameters. This block is optional.

```{literalinclude} KS_JEDC10.hmod
:language: HANS
:linenos:
:lineno-match:
:start-at: var_policy
:end-before: var_aux
```

Variables that are to be optimized with (here, future capital holding $a'$) are declared as *var_policy*. Auxiliary variables (here, consumption $c$) that can be directly evaluated as simple functions of *var_shock*, *var_state* and/or *var_policy* are declared as *var_aux*. 

With all information ready, the individual problem is defined in the **vfi** block enclosed by *vfi;* and *end;*.

```{literalinclude} KS_JEDC10.hmod
:language: HANS
:linenos:
:lineno-match:
:start-at: vfi;
:end-at: end;
:emphasize-lines: 4
```

The **vfi** block starts from given values of *var_state* (here, $(e,a)$) and *var_policy* (here, $a'$), to define an objective specified in *Tv*, in the line highlighted. As shown, this line has a natural syntax following the Bellman equation, where the future value function *v* is treated as known and called over future endogenous state values. The *EXPECT* operator is used to integrate over realizations of future exogenous states. 

Box constraints for *var_policy* (here $0 \leq a'\leq budget$) and arbitrary equality or inequality constraints can be defined after the line that defines the objective. 

All *var_aux*s (here, $c$) needs to be defined, and their values be accessed from the returned solution.

The script file can stop after defning the **vfi** block so the toolbox only generates code for solving the decision problem that is self-contained. 

For solving the equilibrium, a system of equations for aggregate variables needs to be defined in the **model** block, with all required information defined before the block explained in order.

```{literalinclude} KS_JEDC10.hmod
:language: HANS
:linenos:
:lineno-match:
:start-at: var_agg
:end-before: var_agg_shock
```

Unknowns of the equilibrium system needs to be declared as *var_agg* (here, $K$), with their initial values specified. Values of any parameters(here, $\alpha,\delta$) that are used in defining the aggregate system need to be specified.

```{literalinclude} KS_JEDC10.hmod
:language: HANS
:linenos:
:lineno-match:
:start-at: var_agg_shock
:end-before: model;
```

Aggregate shocks are declared as *var_agg_shock*. Aggregate shocks are essentially model parameters  that are allowing to be time variant. Here is the aggregate TFP, $Z$.

With all information ready, the aggregate equilibrium system is defined in 

```{literalinclude} KS_JEDC10.hmod
:language: HANS
:linenos:
:lineno-match:
:start-at: model;
:end-at: end;
:emphasize-lines: 5
```

The goal of the **model** block is to define the equation system that characterizes equilibrium conditions. Each equation is defined with "==", as highlighted in the code block. Here, the system consists of a simple equation, asset market clearing, $K_{t+1}=\int g_{a',t} d\Phi_t(e,a)$.  *var_policy*s can be used in the equation definition to represent the aggregates of individual policy functions integrated over the distribution at time $t$, i.e., *ap* in the line represents $\int g_{a',t} d\Phi_t(e,a)$ (recall $ap$ is declared as one *var_policy*).

Before defining the system, intermediate variables, such as $r,w$ are evaluated in order. Note that before defining the equation, parameters for solving individual decision problems need to be updated (here, $r$, $w$) to respect the change in *var_agg*. For indexing time sequence of variables, the notation follows a convention of Dynare: the aggregate predetermined variables need to be indexed as lag variables (here, $K(-1)$ that enters the evaluations of $r$ and $w$). 

Box constraints can be imposed for *var_agg*. Here $K \geq 38$ is specfied so that $r$ is bounded below to guarantee the convergence of value function iteration.

Other other aggregate equilibrium variables can be defined after the definition of equations (here, $Y,I,C$ defined in the last three lines). The values of these variables will be returned after the system is solved.

## Use the Toolbox

After parsing the script file, the toolbox generates MATLAB files: *solve_vfi.m*, *solve_ss.m*, *solve_trans_linear.m*, *solve_trans_nonlinear.m* and other functions that can be called to solve the steady state, stationary distribution, and transition paths of the model. The usages of these functions are illustrated below.

```{raw} html
:file: ks_notebook.html
```

## What's Next?

Behind the scene: understand the details of [the Algorithm](toolbox_algorithm).

Check the [Toolbox API reference](toolbox_api).

More examples:
- [McKay, Nakamura and Steinsson (2016)](hank_zlb) for a Heterogeneous-Agent New-Keynesian model for defining complex equilibrium conditions and handling nonlinearity
- A discrete-time two-asset HANK model for handling portfolio choices
- [Khan and Thomas (2008)](kt2008) for handling non-convex adjustment costs and stochastic state transitions
