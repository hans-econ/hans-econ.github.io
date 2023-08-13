# Krusell and Smith (1998)

We use the parameterization from [Den Haan, Judd and Juillard (2010): Computational suite of models with heterogeneous agents: Incomplete markets and aggregate uncertainty](https://www.sciencedirect.com/science/article/pii/S0165188909001286).

We follow the notation in the paper as much as possible.

## The Model

The decision problem:

$$
v(e,a;Z,\Omega) = \max_{c,a'} \log(c)+ \beta\mathbb{E}[v(e',a';Z',\Omega')|e,Z]
\\
s.t. \quad c+a' \leq  (1+r(Z,\Omega))a +  [(1-\tau)\overline{l}e + \mu(1-e)]w(Z,\Omega)
\\
a'\geq 0, c \geq 0
\\
\Omega' = G(Z,\Omega)
$$

Other equilibrium conditions:

$$
r(Z,\Omega) = Z\alpha K^{\alpha-1}L^{1-\alpha} - \delta
\\
w(Z,\Omega) = Z(1-\alpha)K^{\alpha}L^{-\alpha}
$$

in which $K=\int a \Omega(de,da)$.


## The hmod File

The model can be represented using a dmod file listed below

```{literalinclude} KS_JEDC10.hmod
:language: HANS
```

## Use the Toolbox

```{raw} html
:file: ks_notebook.html
```

