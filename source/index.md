# **HANS**: A ***H***eterogeneous-***A***gent model ***N***onlinear ***S***olver

**HANS** is a toolbox that solves heterogeneous-agent (HA) models for non-linear solutions, using the algorithm developed by Bai, Luo and Wang (2023). Other toolboxes solving HA models include:

- [Econ-ARK](https://econ-ark.org/)

- [PHACT](https://github.com/gregkaplan/phact)

- [Sequence Space Jacobian](https://github.com/shade-econ/sequence-jacobian)

- [BASEforHANK](https://github.com/BASEforHANK)

**HANS** solves HA models with an arbitrary number of  endogenous states, handles multi-dimensional continuous choice variables including portfolio choices, handles discrete choices, and solves for  nonlinear transition paths. For examples demonstrating the capability and usage of the toolbox, see the list below.

**HANS** takes intuitive model script files as input similar to Dynare, compiles C++ binaries for high-performance computations, and offers user-friendly MATLAB interfaces. For example, the model of Krusell and Smith (1998) can be represented with the following toolbox script:

```{literalinclude} examples/KS_leading/KS_leading.hmod
:language: HANS
:linenos:
```

**HANS** is efficient and solves the following examples within seconds on a regular laptop.

```{toctree}
:maxdepth: 2
:caption: Contents
   
Home <self>
examples/KS_JEDC10/ks.md
examples/HANK1_ZLB/hank1_zlb.md
examples/HANK2_SSJ/hank2_ssj.md
examples/KT2008/kt2008.md
cores/methodology.md
cores/api.md
miscs/howto_contribute_examples.md
```

