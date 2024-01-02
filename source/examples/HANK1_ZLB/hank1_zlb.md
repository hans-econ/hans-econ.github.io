# Solving for Non-linear Transitions: Forward Guidance under ZLB (McKay, Nakamura, Steinsson, 2016)

In this example, we solve the one-asset HANK model used by McKay, Nakamura and Steinsson (2016) to study the forward guidance of monetary policy at the liquidity trap (nominal interest rate zero lower bound). The liquidity trap is driven by a shock to households' discount factor. The forward guidance is modeled as the central bank's commitment to set the nominal interest rate zero for additional periods, after the liquidity shock dies out.

The example is used to demonstrate the capability of the toolbox to solve highly non-linear models. In particular, the equilibrium system at the liquidity trap is very different from the one out of the liquidity trap, posing challenges to traditional solution methods.

We follow the parameterization and the notation of their paper.

## The Model

### Households decision problems

Households are heterogeneous in their labor  efficiency $e$, which follows a stationary Markov chain and real bonds holding, $b$. They solve the Bellman equation:

$$
V_t(e,b) = \max_{c,n,b'} \frac{c^{1-\gamma}}{1-\gamma} - \chi \frac{n^{1+1/\nu}}{1+1/\nu}+ \beta_t \mathbb{E}[V_{t+1}(e',b')|e]
\\
s.t. \quad c+\frac{b'}{1+r_t}=b + w_ten - \tau_t \bar{\tau}(e) +D_t
\\
b' \geq 0,n\geq 0,
$$

where $e$ is the labor  efficiency, $b$ is the holding of real bonds. $r_t$ is the real interest rate, $w_t$ the wage rate, $\tau_t$ the tax, and $D_t$ the profits of firms. $\bar{\tau}(e)$ takes value 0 or 1, which specifies whether a household with labor efficiency type $e$ is taxed. Households  choose consumption $c$, labor supply $n$ and future bond holding $b'$, subject to a no borrowing constraint $b' \geq 0$.

Denote the distribution over households states by $\Gamma_t$, and policy functions by $g_{c,t},g_{n,t},g_{b',t}$.

### The New-Keynesian block

Intermediate goods firms use labor to produce differentiated goods, which are aggregated by final goods firms using a CES aggregator.  Intermediate goods firms engage in monopolistic competition and face price adjustment frictions a la Calvo. The New Keynesian Phillips curve is characterized by the following system (see their paper or any monetary policy textbook for derivations):

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
\tau_t =\frac{B_t + G_t - \frac{B_{t+1}}{1+r_{t}}}{\int \bar{\tau}(e) d\Gamma_t},
$$

where $B_t$ is the government bond outstanding at the beginning of period $t$ and $G_t$ is the government spending.

In their benchmark specification, the fiscal rule supplies a fixed a mount of government bond $B_{t+1}=\overline{B}$.

### Market clearing conditions

Bonds market clearing:

$$
B_{t+1}=\int g_{b',t}(e,b) d\Gamma_t
$$

Labor market clearing:

$$
N_t = \int eg_{n,t}(e,b) d\Gamma_t
$$

and goods market clearing:

$$
\int g_{c,t}(e,b) d \Gamma_t + G_t = Y_t.
$$


### Definition of equilibrium

Given an initial distribution over households states, $\Gamma_0$, a sequential competitive equilibrium is a sequence of (1) distributions over households states $\{\Gamma_t\}_{t=0}^{\infty}$, (2) households' value and policy functions $\{V_t,g_{c,t},g_{n,t},g_{b',t}\}_{t=0}^{\infty}$, and (3) aggregate quantities and prices $\{w_t,Y_t,S_t,N_t,D_t,\pi_t,\frac{p_t^*}{P_t},P_t^A,P_t^B,r_t,i_t,\tau_t\}$ such that

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

The model can be represented using a hmod file listed below

```{literalinclude} hank1.hmod
:language: HANS
```

## Use the Toolbox

```{raw} html
:file: hank1_zlb_notebook.html
```

