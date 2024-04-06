# **HANS**: A ***H***eterogeneous-***A***gent model ***N***onlinear ***S***olver

**HANS** is an open-source toolbox designed to solve nonlinear solutions in discrete-time heterogeneous-agent (HA) models with a continuum of individual decision makers. It excels in scenarios where large deviations from stationary equilibrium values demand highly nonlinear solutions. 
**HANS** provides a useful addition to the [existing suite of excellent HA modeling toolboxes](list_toolboxes_header), especially for researchers addressing highly nonlinear problems.

**HANS** offers flexibility by accommodating:
- Multiple endogenous individual state and choice variables
- Discrete individual decision variables
- Linearized equilibrium solutions with perfect foresight or with aggregate shocks via the Sequence-Space Jacobian method ([Auclert, Bardczy, Rognlie and Straub, 2021](https://doi.org/10.3982/ECTA17434))
- Nonlinear deterministic transition path solutions through our specialized nonlinear equation solvers

To explore **HANS**'s capabilities in greater depth, refer to the examples listed below. 

**HANS** takes intuitive model script files as input for automatic code generation (similar to [Dynare](https://www.dynare.org/) and [GDSGE](http://gdsge.com)), compiles C++ binaries for high-performance computations, and offers user-friendly MATLAB interfaces. For example, the model of Krusell and Smith (1998) can be represented with the following toolbox script:

```{literalinclude} examples/KS_leading/KS_leading.hmod
:language: HANS
:linenos:
```

```{toctree}
:maxdepth: 2
:caption: Contents
   
Home <self>
cores/list_toolboxes.md
examples/KS_JEDC10/ks.md
examples/HANK1_ZLB/hank1_zlb.md
examples/HANK2_SSJ/hank2_ssj.md
examples/KT2008/kt2008.md
cores/methodology.md
cores/api.md
miscs/howto_contribute_examples.md
```

