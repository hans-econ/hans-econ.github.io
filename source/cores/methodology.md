# The Algorithm

## General Framework

We write out a general framework that represents the sequential equilibrium of any heterogeneous-agent model by a system of equations for aggregate endogenous variables. Denote $\mathbb{Z} \subseteq \mathbb{R}^{N_Z}$, $\mathbb{Y} \subseteq \mathbb{R}^{N_Y}$, $\mathbb{E}\subset  \mathbb{R}^{N_e}$, $\mathbb{A}\subset  \mathbb{R}^{N_a}$, $\mathbb{X} \subset \mathbb{R}^{N_x}$ the space of exogenous aggregate variables, endogenous aggregate variables, individual exogenous states, individual endogenous states, and individual policy variables, respectively. 

Fixing a large integer period $T$. Given $\Phi_0$ an initial measure that represents the initial distribution of individual states (i.e., a measure on the Boreal set of  $\mathbb{E}\times \mathbb{A}$),  and a sequence of exogenous aggregate variables $\mathcal{Z}\equiv \{Z_t\}_{t=0}^{T} \in \mathbb{Z}^{T+1}$, an equilibrium is characterized by a system of equations for endogenous aggregate variables $\mathcal{Y}\equiv\{Y_t\}_{t=0}^{T} \in \mathbb{Y}^{T+1}$:

$$
\mathcal{F}_t\left(\{Z_s\}_{s=0}^{t},\{Y_s\}_{s=0}^{t},\bar{x}_t(\mathcal{Z},\mathcal{Y})\right)=0, \forall t=0,1,...,T
$$

```{math}
:label: F_general
```

where $\mathcal{F}_t: \mathbb{Z}^{T+1} \times \mathbb{Y}^{T+1} \times \mathbb{X} \rightarrow \mathbb{R}^{N_Y}$ is a mapping from exogenous aggregate variables, endogenous aggregate variables, and individual policy aggregates to equilibrium condition residuals.

$\bar{x}_t(\mathcal{Z},\mathcal{Y})$ are the aggregates of individual policy variables integrated over the distribution of individual state at time $t$. Specifically,

$$
\bar{x}_t(\mathcal{Z},\mathcal{Y})) = \int g_{x,t}(e,a;\mathcal{Z},\mathcal{Y}) d\Phi_t(e,a;\mathcal{Z},\mathcal{Y}),
$$

where $g_{x,t}(e,a;\mathcal{Z},\mathcal{Y})$ are policy functions that solve the Bellman equation

$$
v_t(e,a;\mathcal{Z},\mathcal{Y}) = \max_{x} u(e,a,x;Z_t,Y_t) + \beta \mathbb{E}[v_{t+1}(e',a';\mathcal{Z},\mathcal{Y})|e,a,x]
\\
s.t. \quad \mathcal{C}(e,a,x; Z_t,Y_t) \leq 0
\\
a' \sim \mathcal{T}(a';e,a,x; Z_t,Y_t)
\\
v_{T+1} \text{ given by steady state value function}
$$

where $u(e,a,x;Z_t,Y_t)$ is the period utility function. $\mathcal{C}(e,a,x; Z_t,Y_t)\leq 0$ is a set of inequality constraints that the optimization problem is subject to. $\mathcal{T}$ is a distribution over $x'$ that represents the (potentially stochastic) transition of individual endogenous state variables.

$\Phi_t(e,a;\mathcal{Z},\mathcal{Y})$ are the measures that represent the distribution of individual states, which evolve according to policy functions and the exogenous transition of the Markov process $e$, denoted by $P^e$:

$$
\Phi_{t+1}(\mathcal{E}',\mathcal{A}';\mathcal{Z},\mathcal{Y})= \int \mathbb{1}((e',a')\in \mathcal{E}'\times \mathcal{A}') P^e(de'|e)\mathcal{T}\Big(da';e,a,g_{x,t}\Big(e,a;\mathcal{Z},\mathcal{Y}\Big);\mathcal{Z},\mathcal{Y}\Big) \Phi_t (d e,d a;\mathcal{Z},\mathcal{Y})
$$

### Example: Krusell and Smith (1998)

The model of Krusell and Smith (1998) mapped to the general framework, with left variable being the notation of the framework  and the right side variable being the variable in the model, reads $Z_t=Z_t$, $Y_t=K_{t+1}$, $e=e$, $a=a$, $x=a'$.

$$
\mathcal{F}_t\left(\{Z_s\}_{s=0}^{T},\{K_s\}_{s=0}^{T},\bar{x}_t(\mathcal{Z},\mathcal{Y})\right)=K_{t+1}-\bar a'_{t}
$$

Note that $K_0=\int a d \Phi_0(de,da)$ is given and is not part of the unknowns.

Period utility:

$$
u(e,a,a';Z_t,K_t)=\ln\Big([1+r(Z_t,K_t)]a + w(Z_t,K_t)[(1.0-\tau)e\bar{l} + \mu (1- e)]-a'\Big).
$$

Two inequality constraints:

$$
\mathcal{C}^{(1)}(e,a,a'; Z_t,K_t) = -a'
\\
\mathcal{C}^{(2)}(e,a,a'; Z_t,K_t) = a' -[1+r(Z_t,K_t)]a + w(Z_t,K_t)[(1.0-\tau)e\bar{l} + \mu (1- e)].
$$

The state transition:

$$
\mathcal{T}(a';e,a,a'; Z_t,K_t)=a' \text{ with probability 1}.
$$

## Calculating the Jacobian with Partial Broyden Updates

The system of equations {eq}`F_general`, albeit large, can be solved using a gradient-based equation solver efficiently, once the Jacobian of the system with respect to endogenous aggregate variables $\{Y_t\}_{t=0}^{T}$  is efficiently calculated. Calculating the Jacobian can be challenging, as evaluating the system involves solving the Bellman equation for policy functions, and then solving the distributions over individual states. Finite difference methods are inefficient, as policy functions and induced state transitions need to be resolved when aggregate variables are perturbed along each dimension. Automatic differentiation (AD) is not possible as aggregate variables enter as parameters in individual optimization problems.

The Sequence Space Jacobian ([Auclert et al, 2021](https://onlinelibrary.wiley.com/doi/full/10.3982/ECTA17434)) approach develops an efficient method to evaluate the Jacobian at the model's steady state, and proposes to fix the Jacobian matrix when solving the system. The approach works adequately for model dynamics that are close to the steady state, but does not work for models feature high nonlinearity such as the New Keynesian model with an interest rate zero lower bound as in McKay, Nakamura and Steinsson (2016).

The key contribution of our method, which enables the robustness and efficiency of the algorithm, is to provide a sparse update of the Jacobian. Denote $\mathcal{G}_t(\mathcal{Z},\mathcal{Y})=\mathcal{F}_t\left(\{Z_s\}_{s=0}^{t},\{Y_s\}_{s=0}^{t},\bar{x}_t(\mathcal{Z},\mathcal{Y})\right)$, then the Jacobian entry with respect to  $\{Y_s\}$ is

$$
\nabla_{Y_s} \mathcal{G}_t=\nabla_{Y_s} \mathcal{F}_t + \nabla_{\bar{x}_t} \mathcal{F}_t \cdot  \nabla_{Y_s} \bar{x}_t.
$$

The key observation is that $\nabla_{Y_s} \mathcal{F}_t$ and $\nabla_{\bar{x}_t} \mathcal{F}_t$ can be calculated analytically or via automatic differentiation. Therefore, we just need to provide an update to $\nabla_{Y_s} \bar{x}_t$. We further provide a sparse Broyden update to $\nabla_{Y_s} \bar{x}_t$, borrowing the insight from Schubert (1970). A sparse update is efficient and necessary, as not all aggregate variables affect individual decisions, and a blind, traditional dense Broyden update will lead to wrong sparsity structures, and in many cases lead to divergence in the solving process or suboptimal performances.

We utilize the fake news algorithm developed in [Auclert et al. (2021)](https://onlinelibrary.wiley.com/doi/full/10.3982/ECTA17434) to construct the initial Jacobian $\nabla_{Y_s} \bar{x}_t$ at the steady state.

## Other Implementation Details

To ensure maximum performance, the procedure for solving individual optimization problems is compiled into C++ libraries (MATLAB mex binaries). Functions are approximated with linear interpolations or tensor product of cubic splines, with the option to specify different orders for extrapolation. The optimization problems are solved with a well-respected numerical routines. Analytical gradients are used whenever possible with automatic differentiation as a backup.

Distributions of individual states and their deterministic transitions are approximated over histograms following Young (2010). The stationary distribution is solved as an eigen vector of the stationary transition. Sparsity of the transition matrix is taken care of at construction to assure performance.

The aggregate equilibrium system is defined in MATLAB. Multiple algorithms are provided, for both steady states or transition paths, with the Jacobian constructed following the aforementioned procedure.

Stochastic simulations of individual samples are also provided.





