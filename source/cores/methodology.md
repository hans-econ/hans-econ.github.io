# The Algorithm

## General Framework

We write out a general framework that represents the sequential equilibrium of any heterogeneous-agent model by a system of equations for aggregate endogenous variables. Denote $\mathbb{Z} \subseteq \mathbb{R}^{N_Z}$, $\mathbb{Y} \subseteq \mathbb{R}^{N_Y}$, $\mathbb{E}\subset  \mathbb{R}^{N_e}$, $\mathbb{A}\subset  \mathbb{R}^{N_a}$, $\mathbb{X} \subset \mathbb{R}^{N_x}$ the space of exogenous aggregate variables, endogenous aggregate variables, individual exogenous states, individual endogenous states, and individual policy variables, respectively. 

Fixing a large integer period $T$. Given $\Phi_0$ a measure over $\mathbb{E}\times \mathbb{A}$ that represents the initial distribution of individual states,  and a sequence of exogenous aggregate variables $\mathcal{Z}\equiv \{Z_t\}_{t=0}^{T} \in \mathbb{Z}^{T+1}$, an equilibrium is characterized by a system of equations for endogenous aggregate variables $\mathcal{Y}\equiv\{Y_t\}_{t=0}^{T} \in \mathbb{Y}^{T+1}$:

$$
\mathcal{F}_t\left(\{Z_s\}_{s=0}^{t},\{Y_s\}_{s=0}^{t},\bar{x}_t(\mathcal{Z},\mathcal{Y})\right)=0, \forall t=0,1,...,T
$$

```{math}
:label: F_general
```

where $\mathcal{F}_t: \mathbb{Z}^{T+1} \times \mathbb{Y}^{T+1} \times \mathbb{X} \rightarrow \mathbb{R}^{N_Y}$ is a mapping from exogenous aggregate variables, endogenous aggregate variables, and individual policy aggregates, to equilibrium condition residuals.

$\bar{x}_t(\mathcal{Z},\mathcal{Y})$ are the aggregates of individual policy variables integrated over the distribution of individual state at time $t$. Specifically,

$$
\bar{x}_t(\mathcal{Z},\mathcal{Y})) = \int g_{x,t}(e,a;\mathcal{Z},\mathcal{Y}) \ \mathrm{d}\Phi_t(e,a;\mathcal{Z},\mathcal{Y}),
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

in which $u(e,a,x;Z_t,Y_t)$ is the period utility function. $\mathcal{C}(e,a,x; Z_t,Y_t)\leq 0$ is a set of inequality constraints that the optimization problem is subject to. $\mathcal{T}$ is a distribution over $x'$ that represents the (potentially stochastic) transition of individual endogenous state variables.

$\Phi_t(e,a;\mathcal{Z},\mathcal{Y})$ is the measure that represents the distributions of individual states at time $t$, which evolves according to policy functions and the exogenous transition of the Markov process $e$, denoted by $P^e$:

$$
\Phi_{t+1}(\mathcal{E}',\mathcal{A}';\mathcal{Z},\mathcal{Y})= \int \mathcal{I}((e',a')\in \mathcal{E}'\times \mathcal{A}') P^e(de'|e)\mathcal{T}\Big(da';e,a,g_{x,t}\Big(e,a;\mathcal{Z},\mathcal{Y}\Big);\mathcal{Z},\mathcal{Y}\Big) \Phi_t (d e,d a;\mathcal{Z},\mathcal{Y})
$$

### Example: Krusell and Smith (1998)

The model of Krusell and Smith (1998) mapped to the general framework, with left variable being the notation of the framework  and the right side variable being the variable in the model, reads $Z_t=Z_t$, $Y_t=K_{t+1}$, $e=e$, $a=a$, $x=a'$.

$$
\mathcal{F}_t\left(\{Z_s\}_{s=0}^{T},\{K_s\}_{s=0}^{T},\bar{x}_t(\mathcal{Z},\mathcal{Y})\right)=K_{t+1}-\bar a'_{t}
$$

Note that $K_0=\int a d \Phi_0(de,da)$ is given and hence not part of the unknowns.

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

The system of equations {eq}`F_general`, albeit large, can be solved efficiently using a gradient-based equation solver, once the Jacobian of the system with respect to endogenous aggregate variables ${Y_t}_{t=0}^{T}$ is efficiently calculated. Calculating the Jacobian can be challenging, as evaluating the system involves solving the Bellman equation for policy functions, and then solving the distributions over individual states. Finite difference methods are inefficient, as policy functions and induced state transitions need to be re-solved when aggregate variables are perturbed along each dimension. Automatic differentiation (AD) is not possible, as aggregate variables enter as parameters in individual optimization problems.

The Sequence Space Jacobian ([Auclert et al., 2021](https://onlinelibrary.wiley.com/doi/full/10.3982/ECTA17434)) approach develops an efficient method to evaluate the Jacobian at the model's steady state, and proposes to fix the Jacobian matrix when solving the transition path. The approach works adequately for model dynamics that are close to the steady state, but does not work for models featuring high nonlinearity, such as the New Keynesian model with an interest rate zero lower bound, as in McKay, Nakamura, and Steinsson (2016).

The central contribution of our method, which enhances the robustness  and efficiency of the algorithm, is to provide a sparse update of the  Jacobian. Denote $\mathcal{G}_t(\mathcal{Z},\mathcal{Y})=\mathcal{F}_t\left(\{Z_s\}_{s=0}^{t},\{Y_s\}_{s=0}^{t},\bar{x}_t(\mathcal{Z},\mathcal{Y})\right)$, then the Jacobian entry with respect to  $\{Y_s\}$ is

$$
\nabla_{Y_s} \mathcal{G}_t=\nabla_{Y_s} \mathcal{F}_t + \nabla_{\bar{x}_t} \mathcal{F}_t \cdot  \nabla_{Y_s} \bar{x}_t.
$$

The key observation is that $\nabla_{Y_s} \mathcal{F}_t$ and $\nabla_{\bar{x}_t} \mathcal{F}_t$ can be calculated analytically or via automatic differentiation. Therefore, after knowing the steady state value of $\nabla_{Y_s} \bar{x}_t$, we need only to provide an update to $\nabla_{Y_s} \bar{x}_t$ in the solving process. We draw on the insight of Schubert (1970) and employ a sparse Broyden update for $\nabla_{Y_s} \bar{x}_t$. This sparse update relies on user input to identify the zero entries of the Jacobian, and only updates remaining entries. Similar to the standard Broyden method, the update does not require additional information other than the function values at a search step. The sparsity structure is automatically constructed by the toolbox based on the model structure. The sparse update is both necessary and efficient, as not all aggregate variables affect individual decisions. A traditional, dense Broyden update, without considering sparsity, could lead to incorrect sparsity structures and, in many cases, result in divergence in equation solving or suboptimal performances.

The initial Jacobian $\nabla_{Y_s} \bar{x}_t$ at the steady state is constructed using the fake news algorithm developed by [Auclert et al. (2021)](https://onlinelibrary.wiley.com/doi/full/10.3982/ECTA17434)

## Other Implementation Details

To ensure maximum performance, the procedure for solving individual optimization problems is compiled into C++ libraries (MATLAB mex binaries). Functions are approximated with linear interpolations or tensor products of cubic splines, with the option to specify different orders for extrapolation. The optimization problems are solved with well-respected numerical routines. Analytical gradients are used whenever possible, with automatic differentiation as a backup.

Distributions of individual states and their deterministic transitions are approximated over histograms, following Young (2010). The stationary distribution is solved as an eigenvector of the stationary transition matrix of individual states. Sparsity of the transition matrix is taken into account at construction to assure performance.

The aggregate equilibrium system is defined in MATLAB. Multiple equation solving algorithms are provided for both steady states and transition paths, with the Jacobian constructed following the aforementioned procedure.

Stochastic simulations of individual samples are also provided.

See the [Toolbox API Reference](toolbox_api) for the list of optimization and equation solving algorithms.





