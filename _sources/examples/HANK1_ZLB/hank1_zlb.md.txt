(hank_zlb)=
# Solving for Non-linear Transitions: Forward Guidance under ZLB (McKay, Nakamura, Steinsson, 2016)

In this example, we solve the one-asset HANK model used by McKay, Nakamura, and Steinsson (2016) to study the forward guidance of monetary policy at the liquidity trap (nominal interest rate zero lower bound). The liquidity trap is driven by a positive shock to the common discount factor of households. The forward guidance is modeled as the central bank's commitment to setting the nominal interest rate at zero for additional periods, after the economy would have exited the zero lower bound.

The example is used to demonstrate the capability of the toolbox in solving highly non-linear models. In particular, the equilibrium system at the liquidity trap is very different from that out of the liquidity trap, posing challenges to traditional solution methods.

We follow the parameterization and notation of their original paper.

## The Model

### Households decision problems

Households are heterogeneous in their labor  efficiency $e$, which follows a stationary Markov chain, and real bonds holding $b$. They solve the Bellman equation:

$$
V_t(e,b) = \max_{c,n,b'} \frac{c^{1-\gamma}}{1-\gamma} - \chi \frac{n^{1+1/\nu}}{1+1/\nu}+ \beta_t \mathbb{E}[V_{t+1}(e',b')|e]
\\
s.t. \quad c+\frac{b'}{1+r_t}=b + w_ten - \tau_t \bar{\tau}(e) +D_t
\\
b' \geq 0,n\geq 0,
$$

where $r_t$ is the real interest rate, $w_t$ the wage rate, $\tau_t$ the tax level, and $D_t$ the profits of firms. $\bar{\tau}(e)$ takes value 0 or 1, which specifies whether a household with labor efficiency type $e$ is taxed. Households  choose consumption $c$, labor supply $n$ and future bond holding $b'$, subject to a no borrowing constraint $b' \geq 0$.

Denote the measure that represents the distribution over households states by $\Gamma_t$, and policy functions by $g_{c,t},g_{n,t},g_{b',t}$.

### The New-Keynesian block

Intermediate goods firms use labor to produce differentiated goods, which are aggregated by final goods firms using a CES aggregator.  Intermediate goods firms engage in monopolistic competition and face price adjustment frictions a la Calvo. The New Keynesian Phillips curve is characterized by the following system (see their paper or any monetary textbook for derivations):

$$
Y_tS_t = z_t  N_t
\\
S_{t} =\theta (\frac{p_{t}^*}{P_{t}})^{\mu / (1-\mu)}+(\frac{1}{1+\pi_{t}})^{\mu / (1-\mu)} (1-\theta)S_{t-1}
\\
1+\pi_{t} =( \frac{1-\theta}{1- \theta( \frac{p_{t}^*}{P_{t}})^{\frac{1}{1-\mu}}})^{1-\mu}
\\
\frac{p_t^*}{P_t} = \frac{P_t^A}{P_t^B}
\\
P_t^A =\mu\frac{w_{t}}{z_{t}}Y_{t} + (1-\theta)\beta (1+\pi_{t+1})^{-\mu/(1-\mu)}P_{t+1}^A
\\
P_t^B =Y_{t} + (1-\theta)\beta (1+\pi_{t+1})^{-1/(1-\mu)}P_{t+1},
$$

where $\mu$ is the elasticity of  substitution, $\theta$ is the probability of the opportunity for price adjustment. $Y_t$ is aggregate output, $S_t$ is the dispersion of prices, $N_t$ is aggregate labor demand, $z_t$ is the exogenous labor productivity, $\pi_t$ is the inflation rate, $p_t^*$ is firms' ideal price when adjusting, and $P_t^A,P_t^B$ are auxiliary variables that facilitate the definition of the system.

The monetary authority implements a Taylor rule subject to a zero lower bound on the nominal interest rate:

$$
i_t = \max\{i_{0} + \phi \pi_t,0\}
$$

Since there is no aggregate uncertainty, the Fisher equation holds:

$$
1+r_t=\frac{1+i_t}{1+\pi_{t+1}}.
$$

Government set taxes $\tau_t$ to finance exogenous spending and interest payment on bonds:

$$
\tau_t =\frac{B_t + G_t - \frac{B_{t+1}}{1+r_{t}}}{\int \bar{\tau}(e) \ \mathrm{d}\Gamma_t},
$$

where $B_t$ is the government bond outstanding at the beginning of period $t$ and $G_t$ is the government spending.

In their benchmark specification, the fiscal rule supplies a fixed amount of government bond $B_{t+1}=\overline{B}$.

### Market clearing conditions

Bonds market clearing:

$$
B_{t+1}=\int g_{b',t}(e,b) \ \mathrm{d}\Gamma_t
$$

Labor market clearing:

$$
N_t = \int eg_{n,t}(e,b) \ \mathrm{d}\Gamma_t
$$

and goods market clearing:

$$
\int g_{c,t}(e,b) \ \mathrm{d} \Gamma_t + G_t = Y_t.
$$


### Definition of equilibrium

Given an initial distribution over households states, $\Gamma_0$, a sequential competitive equilibrium is a sequence of (1) distributions over households states $\{\Gamma_t\}_{t=0}^{\infty}$, (2) households' value and policy functions $\{V_t,g_{c,t},g_{n,t},g_{b',t}\}_{t=0}^{\infty}$, and (3) aggregate quantities and prices $\{w_t,Y_t,S_t,N_t,D_t,\pi_t,\frac{p_t^*}{P_t},P_t^A,P_t^B,r_t,i_t,\tau_t\}_{t=0}^{\infty}$ such that

$$
Y_t S_t= z_t N_t
\\
D_t=Y_t-w_tN_t
\\
S_{t} =\theta (\frac{p_{t}^*}{P_{t}})^{\mu / (1-\mu)}+(\frac{1}{1+\pi_{t}})^{\mu / (1-\mu)} (1-\theta)S_{t-1}
\\
1+\pi_{t} =( \frac{1-\theta}{1- \theta( \frac{p_{t}^*}{P_{t}})^{\frac{1}{1-\mu}}})^{1-\mu}
\\
\frac{p_t^*}{P_t} = \frac{P_t^A}{P_t^B}
\\
P_t^A =\mu\frac{w_{t}}{z_{t}}Y_{t} + (1-\theta)\beta (1+\pi_{t+1})^{-\mu/(1-\mu)}P_{t+1}^A
\\
P_t^B =Y_{t} + (1-\theta)\beta (1+\pi_{t+1})^{-1/(1-\mu)}P_{t+1}^B
\\
1+r_t=\frac{1+i_t}{1+\pi_{t+1}}
\\
i_t = \max\{i_{0} + \phi \pi_t,0\}
\\

\tau_t =\frac{B_t + G_t - \frac{B_{t+1}}{1+r_{t}}}{\int 1(e=e_{High}) \Gamma_t}
\\
N_t = \int eg_{n,t}(e,b) d\Gamma_t
\\
\overline{B}=\int g_{b',t}(e,b) d\Gamma_t
$$

and goods market clearing  implied by Walras's law. The system can be further simplified. See the hmod file below that defines the simplified system of equations.

## The hmod File

The model can be represented using a hmod file, {download}`hank1.hmod`, listed below

```{literalinclude} hank1.hmod
:language: HANS
:linenos:
```

The equilibrium system now involves non-trivial market clearing conditions but nevertheless can be represented by a system of equations. Define the time sequence of all unknowns in **var_agg** and the same number of equations in the **model** block with "==" (see codes highlighted below):

```{literalinclude} hank1.hmod
:language: HANS
:linenos:
:lineno-match:
:start-at: var_agg Y
:end-at: end;
:emphasize-lines: 1, 28-33
```

One can define an alternative model block that is different from the main **model** block. For example, the following block in the script file defines a block for calibration, which takes different unknowns and a different system of equations. Here, the calibration is at the steady state, so we can reduce the calibration system into an equation for aggregate labor and bond holding, with all other variables being simple functions with the two unknowns, or implied by the steady state condition. 


```{literalinclude} hank1.hmod
:language: HANS
:linenos:
:lineno-match:
:start-at: model_cali(
:end-at: end;
:emphasize-lines: 1, 8-9
```

All **var_agg** need to be initialized right after declaration, unless their values are returned from an alternative model block (e.g., here, by the **model_cali** block). See below for how to pass the calibration solution to solving the main model block.

## Use the Toolbox

After parsing the script file, the toolbox generates MATLAB files: *solve_vfi.m*, *solve_ss.m*, *solve_trans_linear.m*, *solve_trans_nonlinear.m*, *solve_cali.m* and other functions that can be called to solve the steady state, stationary distribution, transition paths, and alternative system (here, calibration) of the model. The usages of the generated files are illustrated below.

```{raw} html
:file: hank1_zlb_notebook.html
```

