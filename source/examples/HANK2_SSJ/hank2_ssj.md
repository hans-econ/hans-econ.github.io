# Handling Portfolio Choices: Two-asset HANK (Auclert et al, 2021)

In this example, we solve the two-asset HANK model as presented in Auclert, Bardóczy, Rognlie, and Straub (2021, Appendix B.3 and Appendix E.1). In this model, each heterogeneous household selects an optimal portfolio consisting of liquid and illiquid assets, taking into account a convex portfolio adjustment cost. Additionally, New Keynesian sticky-price firms determine intermediate goods prices, considering Rotemberg-type price adjustment costs, and make dynamic investment decisions with quadratic capital adjustment costs. Labor unions control wages to maximize the average welfare of their members.

This example is employed to showcase the toolbox's capability in solving complex decision problems with multi-dimensional endogenous state and control variables, as well as a large equilibrium system of equations.

We adhere to the notation, parametrization, and calibration procedure outlined in their original paper. For the detailed derivation of the equilibrium system of equations, we direct readers to the original paper.

## The Model

### Households

Households are heterogeneous in their Markov labor efficiency ($e$), and the initial holding liquid assets ($b$) and illiquid assets ($a$). They solve the Bellman equation:

$$
V_t\left(e_{it}, b_{it-1}, a_{it-1}\right) =\max_{c_{it}, b_{it}, a_{it}}\left\{\frac{c_{it}^{1-\sigma}}{1-\sigma}  - \varphi \frac{N_{t}^{1+\nu}}{1+\nu} +\beta \mathbb{E}_t V_{t+1}\left(e_{it+1}, b_{it}, a_{it}\right)\right\}
\\
\quad s.t. \quad c_{it} + a_{it} + b_{it} = \left(1-\tau_{t}\right)w_t e_{it} N_{t} + \left(1+r_{t}^{a}\right) a_{it-1}
\\
 +\left(1+r_t^b\right) b_{it-1}-\Phi_{t}\left(a_{it}, a_{it-1}\right)
\\
a_{it} \geq 0, \quad b_{it} \geq \underline{b},
$$
where $\tau_t$ denotes the flat tax rate, $w_t$ the real wage rate, $N_t$ the labor hours, $r_t^b$ and $r_t^{a}$ the real interest rates for liquid assets and illiquid assets, and $\Phi_t$ the adjust cost function specified as 
$$
\Phi_{t}\left(a_{it}, a_{it-1}\right)=\frac{\chi_1}{\chi_2}\left|\frac{a_{it}-\left(1+r_t^a\right) a_{it-1}}{\left(1+r_t^a\right) a_{it-1}+\chi_0}\right|^{\chi_2}\left[\left(1+r_t^a\right) a_{it-1}+\chi_0\right],
$$
with $\chi_0 > 0$, $\chi_1 > 0$, and $\chi_2 > 1$.

Households choose consumption ($c_{it}$) and a portfolio $\left(b_{it}, a_{it}\right)$, subject to a borrowing constraint $a_{it} \geq 0$ and $b_{it} \geq \underline{b}$ , and supply a uniform labor ($N_{t}$) determined by the Labor Unions to accommodate labor demand from the firm. Without loss of generality, the mean of the labor efficiency is normalized to equal to $1$. Hence $N$ represents both average labor hours and the total efficiency unit of the labor supply.

Denote the measure that represents the distribution over households states by $\Gamma_t$, and policy functions by $g_{c,t},g_{b,t},g_{a,t}$.

### The Financial Intermediary

Households deposit both liquid and illiquid asset holdings into a representative financial intermediary. The financial intermediary invests the liquid deposit ($\int{b_{it}di}$) to illiquid government bonds at a per unit liquidity transformation cost $\omega$, so that $r_t^b = r_t - \omega$ with $r_t$ denoting realized real interest rate of government bonds at $t$. The financial intermediary also invests illiquid deposit ($\int{a_{it}di}$) into a mutual fund consisting of government bonds and firm equity which implies 

$$
1 + r_t^a = \Theta_{pt-1} \frac{D_t + p_t}{p_{t-1}} + (1 - \Theta_{pt-1}) \left(1 + r_t\right),
$$
where the mutual fund equity share $\Theta_{pt-1} = \frac{p_{t-1}}{p_{t-1} + B^{g}_{t-1} - B^{h}_{t-1}}$ is determined by equity share price ($p_{t-1}$), aggregate government bond $\left(B^{g}_{t-1}\right)$, and aggregate liquid asset holdings $\left(B^{h}_{t-1} = \int{b_{it-1}di}\right)$ at $t-1$. In a perfect foresight equilibrium, the no arbitrage condition implies the equalization of future returns for $t \geq 1$ 

$$
1 + r_t^a = \frac{D_t + p_t}{p_{t-1}} = 1 + r_t, \forall t \geq 1,
$$
However, the returns of assets at $t = 0$ may differ due to surprise shocks at $t = 0$.

### Firms

Intermediate goods firms operate a Cobb-Douglas production technology with capital and labor to produce differentiated goods, which are aggregated by competitive final goods firms using a CES aggregator with an elasticity of substitution $\mu_{p}/\left(\mu_p - 1\right)$. Intermediate goods firms engage in monopolistic competition on the intermediate goods market, make dynamic investment decision subject to a quadratic adjustment cost, and face price adjustment cost of a quadratic form in logs.

The demand, technology and adjustment costs for an intermediate goods firm $j$ are defined by the following equations:

 - Product Demand Function:

$$
 y_{jt} = \left(\frac{p_{jt}}{P_{t}}\right)^{-\frac{\mu_{p}}{\mu_p - 1}} Y_{t}
$$

 - Production Function:

$$
 y_{jt} = Z_t k_{jt-1}^\alpha n_{jt}^{1-\alpha}
$$

  - Capital Adjustment Cost Function:

$$
 \zeta \left(k_{jt},k_{jt-1}\right) k_{jt-1} = \frac{1}{2 \delta \epsilon_I}\left(\frac{k_{jt}}{k_{jt-1}} - 1\right)^2 k_{jt-1}
$$

  - Price Adjustment Cost Function:

$$
 \psi^p_t \left(p_{jt},p_{jt-1}\right)=\frac{\mu_p}{\mu_p-1} \frac{1}{2 \kappa_p}\left[\log \left(\frac{p_{jt}}{p_{jt-1}}\right)\right]^2 Y_t
$$

  - Capital Accumulation Equation:

$$
 i_{jt} = k_{jt} - \left(1 - \delta\right) k_{jt-1} + \zeta \left(k_{jt},k_{jt-1}\right) k_{jt-1}
$$

  - Dividend Equation:

$$
 d_{jt} = y_{jt} - w_{t} n_{jt} - i_{jt} - \psi^p_t
$$

The firm $j$ maximizes the discounted value of the dividend flow. In a symmetric equilibrium, firms' optimal solution can be characterized by the following equations:

 - The Price Phillips Curve: 

$$
\log(1+\pi_t) = \kappa_p \left(mc_t - \frac{1}{\mu_p} \right) + \frac{1}{1+r_{t+1}} \frac{Y_{t+1}}{Y_t} \log(1+\pi_{t+1})
$$

 - Investment Equation:

$$
Q_t = 1 + \frac{1}{\delta \epsilon_I}\left(\frac{K_t-K_{t-1}}{K_{t-1}}\right)
$$

- Valuation Equation

$$
(1+r_{t+1})Q_{t} = \alpha \frac{Y_{t+1}}{K_t} mc_{t+1} - \left[\frac{K_{t+1}}{K_t} - (1-\delta) + \frac{1}{2\delta \epsilon_I}\left(\frac{K_{t+1} - K_t}{K_t}\right)^2\right] + \frac{K_{t+1}}{K_t}Q_{t+1}
$$
where $mc_t$ is a short-hand notation for 

 - Marginal Cost Function:

$$
 mc_t = \frac{w_t }{(1-\alpha)\frac{Y_t}{N_t}} 
$$

### Labor Unions

A competitive labor recruiter aggregates differentiated labor provided by a continuum of monopolistically competitive labor unions. Each labor union $k$ faces a labor demand function with an elasticity of substitution $\mu_{w}/\left(\mu_{w} - 1\right)$, and sets nominal wage rates ($W_{kt}$) to maximize the average utility of its members, subjective to a quadratic adjustment cost in utils

$$
 \psi_t^w \left(W_{kt},W_{kt-1}\right)=\frac{\mu_w}{\mu_w - 1} \frac{1}{2 \kappa_w}\left[\log \left(\frac{W_{kt}}{W_{kt-1}}\right)\right]^2
$$

In a symmetric equilibrium, union's optimal solution leads to the Wage Phillips Curve:

$$
\log \left(1+\pi_t^w\right)=\kappa_w\left[\varphi N_t^{1+v}-\frac{\left(1-\tau_t\right) w_t N_t}{\mu_w} \int{e_{it}c_{it}^{-\sigma}di}\right]+\beta \log \left(1+\pi_{t+1}^w\right),
$$
where $1 + \pi_t^w = W_t /W_{t-1} = (1 + \pi_t) w_t/w_{t-1}$ is the wage inflation rate at $t$.

### Monetary and Fiscal Policies

The monetary authority implements a Taylor rule with a zero steady state target inflation rate:

$$
i_t = r_{\ast} + \phi \pi_t + \phi_y \left(Y_t - Y_{\ast}\right) + m_t,
$$
where $m_t$ is a monetary policy shock, and $r_{\ast}$ and $Y_{\ast}$ are steady state real interest rate and GDP, respectively.

The nominal, real interest rates and inflation rate are linked through the Fisher equation:

$$
1+r_t=\frac{1+i_{t-1}}{1+\pi_{t}}.
$$

Government runs a balanced budget to maintain a constant debt in real value ($B^g$), and sets taxes $\tau_t$ to finance exogenous purchases ($G_t$) and interest payments on bonds:

$$
\tau_t =\frac{r_{t}B^{g} + G_t}{w_t N_t}.
$$

### Market clearing conditions

 - Asset market clearing:

$$
p_{t} + B^{g}=\int{\left(a_{it} + b_{it}\right)di}
$$

- goods market clearing:

$$
Y_t = \int{c_{it}di} + \int{\Phi_{t}\left(a_{it}, a_{it-1}\right)di} + \omega \int{b_{it}di}  + I_t + \psi^p \left(P_{t},P_{t-1}\right) + G_t.
$$

Notice that we have implicitly imposed labor market clearing conditions by using $N_t$ to denote both labor demand in the firms' problem and labor supply in the Wage Phillips Curve.


### The Equilibrium System of Equations: Transition Path

Given an initial distribution over households states, $\Gamma_0$, a perfect foresight competitive equilibrium is a sequence of (1) distributions over households states $\{\Gamma_t\}_{t=0}^{\infty}$, (2) households' value and policy functions $\{V_t,g_{c,t},g_{b,t},g_{a,t}\}_{t=0}^{\infty}$, and (3) aggregate quantities and prices $\{Y_t,K_t,N_t,I_t,\psi^{p}_{t},D_t,B_t^h,w_t,mc_t,p_t,Q_t,\pi_t,\pi_{t}^{w},i_t,r_t,r_t^a,r_t^b,\tau_t\}_{t=0}^{\infty}$ such that

$$
Y_t = Z_t K_{t-1}^\alpha N_{t}^{1-\alpha}
\\
I_t = K_{t}  - \left(1 - \delta\right) K_{t-1} + \zeta \left(K_{t},K_{t-1}\right) K_{t-1}
\\
\psi^p_t =\frac{\mu_p}{\mu_p-1} \frac{1}{2 \kappa_p}\left[\log \left(1 + \pi_t\right)\right]^2 Y_t
\\
D_t = Y_t - w_t N_t - I_t - \psi^{p}_{t}
\\
w_t = (1-\alpha)\frac{Y_t}{N_t} mc_t
\\
\log(1+\pi_t) = \kappa_p \left(mc_t - \frac{1}{\mu_p} \right) + \frac{1}{1+r_{t+1}} \frac{Y_{t+1}}{Y_t} \log(1+\pi_{t+1})
\\
Q_t = 1 + \frac{1}{\delta \epsilon_I}\left(\frac{K_t-K_{t-1}}{K_{t-1}}\right)
\\
(1+r_{t+1})Q_{t} = \alpha \frac{Y_{t+1}}{K_t} mc_{t+1} - \left[\frac{K_{t+1}}{K_t} - (1-\delta) + \frac{1}{2\delta \epsilon_I}\left(\frac{K_{t+1} - K_t}{K_t}\right)^2\right] + \frac{K_{t+1}}{K_t}Q_{t+1}
\\
1 + \pi_t^w = (1 + \pi_t) w_t/w_{t-1}
\\
\log \left(1+\pi_t^w\right)=\kappa_w\left[\varphi N_t^{1+v}-\frac{\left(1-\tau_t\right) w_t N_t}{\mu_w} \int{e g_{c,t}^{-\sigma}d \Gamma_t}\right]+\beta \log \left(1+\pi_{t+1}^w\right)
\\
i_t = r_{\ast} + \phi \pi_t + \phi_y \left(Y_t - Y_{\ast}\right) + m_t
\\
1+r_t=\frac{1+i_{t-1}}{1+\pi_{t}}
\\
r_t^b = r_t - \omega
\\
\frac{D_{t+1} + p_{t+1}}{p_{t}} = 1 + r_{t+1}
\\
\Theta_{pt-1} = \frac{p_{t-1}}{p_{t-1} + B^{g} - B^{h}_{t-1}}
\\
1 + r_t^a = \Theta_{pt-1} \frac{D_t + p_t}{p_{t-1}} + (1 - \Theta_{pt-1}) \left(1 + r_t\right)
\\
\tau_t =\frac{r_{t}B^{g} + G_t}{w_t N_t}
\\
B^{h}_{t} = \int{g_{b,t} d \Gamma_t}
\\
p_{t} + B^{g}=\int{\left(g_{a,t} + g_{b,t}\right)d \Gamma_t}
$$

and goods market clearing  implied by Walras's law. The system can be further simplified. See the hmod file below that defines the simplified system of equations.

### The Equilibrium System of Equations: Stationary Equilibrium

In a stationary equilibrium with a constant $\left(Z_t, \pi_t, G_t\right) = \left(z_{\ast}, 0, G_{\ast}\right) $, the equilibrium system of equations, in the order as presented above, reduce to

$$
Y_{\ast} = z_{\ast} K_{\ast}^\alpha N_{\ast}^{1-\alpha}
\\
I_{\ast} = \delta K_{\ast}
\\
\psi^p_{\ast} = 0
\\
D_{\ast} = Y_{\ast} - w_{\ast} N_{\ast} - \delta K_{\ast}
\\
w_{\ast} = (1-\alpha)\frac{Y_{\ast}}{N_{\ast}} mc_{\ast}
\\
mc_{\ast} = \frac{1}{\mu_p}
\\
Q_{\ast} = 1
\\
r_{\ast} + \delta = \alpha \frac{Y_{\ast}}{K_{\ast}} mc_{\ast}
\\
\pi_{\ast}^w = 0
\\
\varphi N_{\ast}^{v} = \frac{\left(1-\tau_{\ast}\right) w_{\ast}}{\mu_w} \int{e g_{c,{\ast}}^{-\sigma}d \Gamma_{\ast}}
\\
i_{\ast} = r_{\ast}
\\
i_{\ast} = r_{\ast}
\\
r_{\ast}^b = r_{\ast} - \omega
\\
D_{\ast} = r_{\ast} p_{\ast}
\\
\Theta_{p{\ast}} = \frac{p_{\ast}}{p_{\ast} + B^{g} - B^{h}_{\ast}}
\\
r_{\ast}^a = r_{\ast}
\\
\tau_{\ast} =\frac{r_{\ast}B^{g} + G_{\ast}}{w_{\ast} N_{\ast}}
\\
B^{h}_{\ast} = \int{g_{b,{\ast}} d \Gamma_{\ast}}
\\
p_{\ast} + B^{g}=\int{\left(g_{a,{\ast}} + g_{b,{\ast}}\right)d \Gamma_{\ast}}
$$

We will use these equatios for both calibration and the computation of stationary equilibria.

## The hmod File

The model can be represented using an hmod file listed below. To maintain consistency, the hmod file predominantly employs the same variable notations and equation representations as those in the model presentation. The file should be self-explanatory, aided by comments within the code.

```{literalinclude} hank2_ssj.hmod
:language: HANS
```

## Use the Toolbox

```{raw} html
:file: hank2_ssj_notebook.html
```

```{raw} latex
\includepdf[pages=-]{../../source/examples/HANK2_SSJ/hank2_ssj_notebook.pdf}
```
