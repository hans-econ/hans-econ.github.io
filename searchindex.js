Search.setIndex({"docnames": ["cores/api", "cores/methodology", "examples/HANK1_SSJ/hank1_ssj", "examples/HANK1_ZLB/hank1_zlb", "examples/HANK2_SSJ/hank2_ssj", "examples/KS_JEDC10/ks", "examples/KT2008/kt2008", "index", "miscs/howto_contribute_examples"], "filenames": ["cores\\api.md", "cores\\methodology.md", "examples\\HANK1_SSJ\\hank1_ssj.md", "examples\\HANK1_ZLB\\hank1_zlb.md", "examples\\HANK2_SSJ\\hank2_ssj.md", "examples\\KS_JEDC10\\ks.md", "examples\\KT2008\\kt2008.md", "index.md", "miscs\\howto_contribute_examples.md"], "titles": ["Toolbox API Reference", "The Algorithm", "Handling Non-trivial Market Clearing: One-asset HANK", "Solving for Non-linear Transitions: Forward Guidance under ZLB (McKay, Nakamura, Steinsson, 2016)", "Handling Portfolio Choices: Two-asset HANK", "Getting Started: Krusell and Smith (1998)", "Handling Non-convex Adjustment Costs: Khan and Thomas (2008)", "<strong>HANS</strong>: A <em><strong>H</strong></em>eterogeneous-<em><strong>A</strong></em>gent model <em><strong>N</strong></em>onlinear <em><strong>S</strong></em>olver", "How to Contribute Examples"], "terms": {"all": [0, 1, 3, 5, 8], "statement": 0, "need": [0, 1, 3, 5, 6, 8], "close": [0, 1], "semicolon": 0, "paramet": [0, 1, 3, 5, 6, 7], "var1": 0, "var2": 0, "declar": [0, 3, 5], "ar": [0, 1, 3, 5, 6, 7, 8], "us": [0, 1, 7], "vfi": [0, 3, 5, 6, 7], "block": [0, 5, 6], "should": 0, "includ": [0, 7, 8], "those": 0, "which": [0, 1, 3, 5, 6], "1": [0, 1, 3, 5, 6, 7], "enter": [0, 1, 5, 6], "explicitli": 0, "2": [0, 1, 3, 5, 6], "definit": [0, 5], "var_pre_vfi": [0, 3, 5, 6], "chang": [0, 5, 8], "var_agg": [0, 3, 5, 6, 7], "var_shock": [0, 3, 5, 6, 7], "individu": [0, 1, 3, 5], "exogen": [0, 1, 3, 5, 6, 7], "state": [0, 1, 3, 5, 6, 7], "variabl": [0, 1, 3, 5, 6, 7], "thei": [0, 3, 5], "markov": [0, 1, 3, 5, 6], "chain": [0, 3, 6], "discret": [0, 5, 6, 7], "valu": [0, 1, 3, 5, 6], "specifi": [0, 1, 3, 5, 6], "Their": 0, "joint": [0, 5], "transit": [0, 1, 5, 6, 7], "matrix": [0, 1, 3, 5], "varaibl": [0, 5], "shock_tran": [0, 3, 5, 7], "exampl": [0, 3, 5, 6, 7], "e": [0, 1, 3, 5, 6, 7], "z": [0, 1, 3, 5, 6, 7], "e_grid": 0, "0": [0, 1, 3, 5, 6, 7], "e_tran": 0, "4": [0, 3, 5, 6], "6": [0, 3, 5, 6], "z_grid": 0, "3": [0, 1, 3, 5, 6, 7], "z_tran": 0, "form": 0, "tensor": [0, 1, 5], "product": [0, 1, 3, 5, 6], "ndgrid": 0, "kron": 0, "var_stat": [0, 3, 5, 6, 7], "endogen": [0, 1, 5, 6, 7], "continu": [0, 6, 7], "varialb": [0, 5], "The": [0, 7, 8], "grid": [0, 5, 6], "each": [0, 1, 5, 6], "polici": [0, 1, 3, 5, 6], "function": [0, 1, 3, 5, 6], "approxim": [0, 1, 5], "over": [0, 1, 3, 5, 6], "linear": [0, 1, 5, 6, 7], "interpol": [0, 1], "cubic": [0, 1], "spline": [0, 1], "simpl": [0, 3, 5], "can": [0, 1, 3, 5, 6, 7, 8], "evalu": [0, 1, 3, 5, 6], "befor": [0, 3, 5, 6], "A": [0, 1, 3, 5, 6], "defin": [0, 1, 3, 5, 6], "initi": [0, 1, 3, 5, 6, 7], "var_polici": [0, 3, 5, 6, 7], "direclti": 0, "thi": [0, 1, 3, 5, 6, 8], "avoid": 0, "unnecessari": 0, "repetit": 0, "solv": [0, 1, 5, 6, 7], "optim": [0, 1, 5, 6], "problem": [0, 1, 5, 6, 7], "beta": [0, 1, 3, 5, 6, 7], "r": [0, 1, 3, 5, 7], "w": [0, 1, 3, 5, 6, 7], "budget": [0, 5, 7], "ap": [0, 5, 7], "c": [0, 1, 3, 5, 6, 7], "tv": [0, 3, 5, 6, 7], "u": [0, 1, 3, 5, 7], "expect": [0, 3, 5, 6, 7], "v": [0, 3, 5, 6, 7], "end": [0, 3, 5, 6, 7], "i": [0, 1, 3, 5, 6, 7, 8], "depend": 0, "var_aux": [0, 3, 5, 6], "auxilliari": 0, "return": [0, 3, 5, 7], "inc": 0, "execut": 0, "line": [0, 3, 5, 6, 8], "from": [0, 1, 3, 5, 6, 7, 8], "top": 0, "bottom": 0, "In": [0, 3, 8], "updat": [0, 5, 6, 7], "after": [0, 1, 3, 5, 6], "iter": [0, 3, 5, 6], "assign": [0, 3], "object": [0, 5, 6], "If": 0, "found": [0, 8], "futur": [0, 3, 5, 6], "last": [0, 3, 5], "call": [0, 3, 5, 6], "var_state_1_futur": 0, "var_state_2_futur": 0, "warp": 0, "calcul": [0, 7], "condit": [0, 1, 5, 6, 7], "current": 0, "equal": [0, 5, 7], "inequ": [0, 1, 5, 7], "constraint": [0, 1, 3, 5, 7], "infer": 0, "argument": [0, 3, 6], "when": [0, 1, 3, 5, 6, 7], "One": [0, 3, 6], "also": [0, 1, 3, 5], "explic": 0, "state_value_1": 0, "state_value_2": 0, "prob_1": 0, "prob_2": 0, "where": [0, 1, 3, 5, 6], "associ": [0, 6], "probabl": [0, 1, 3, 5, 6], "stochast": [0, 1, 5, 6], "follow": [0, 1, 3, 5, 6, 7, 8], "equilibrium": [0, 1, 5, 6], "model": [0, 1, 8], "requir": [0, 1, 5], "inform": [0, 1, 5], "option": [0, 1, 3, 5, 6, 8], "parser": [0, 6, 8], "gener": [0, 3, 5, 6, 7, 8], "standalon": 0, "code": [0, 3, 5, 6], "unknown": [0, 1, 3, 5, 6], "aggreg": [0, 1, 3, 5, 6, 7], "equilibirium": 0, "var_agg_shock": [0, 3, 5, 6, 7], "time": [0, 1, 3, 5, 6], "vari": 0, "steadi": [0, 1, 3, 5, 6], "For": [0, 3, 5, 7], "name": [0, 8], "var": [0, 3], "its": [0, 6], "sequenc": [0, 1, 3, 5, 6, 7], "overwritten": 0, "suppli": [0, 3, 5, 6, 7], "field": [0, 3, 5, 6], "var_t": 0, "pass": [0, 3, 5, 6], "system": [0, 1, 3, 5, 6], "equat": [0, 1, 3, 5, 6, 7], "repres": [0, 1, 3, 5, 6, 7], "contain": [0, 5], "intermedi": [0, 3, 5], "g": [0, 1, 3, 6], "wage": [0, 3, 5, 6, 7], "interest": [0, 1, 3, 5], "rate": [0, 1, 3, 5, 6, 7], "capit": [0, 5, 6, 7], "stock": 0, "integr": [0, 1, 5, 6], "distribut": [0, 1, 3, 5, 6], "lag": [0, 5], "lead": [0, 1, 3, 6], "varnam": [0, 3], "l": [0, 1, 5, 7], "number": [0, 3, 6, 7], "period": [0, 1, 3, 5, 6], "onli": [0, 1, 5, 6, 8], "have": [0, 3, 5, 6], "cannot": 0, "index": [0, 5, 8], "pre": 0, "determin": [0, 5], "left": [0, 1, 6], "hand": 0, "side": [0, 1], "facilit": [0, 3], "extra": [0, 3, 6], "k": [0, 5, 6, 7, 8], "30": [0, 5], "stead": 0, "alpha": [0, 5, 6, 7], "delta": [0, 5, 6, 7], "below": [0, 3, 5, 6, 7], "asset": [0, 3, 5, 6, 7], "demand": [0, 3, 5, 6, 7], "post": [0, 5, 6], "y": [0, 1, 3, 5, 6], "model_modnam": [0, 6], "var_agg_1": [0, 6], "var_agg_2": [0, 6], "an": [0, 1, 3, 5, 6, 7], "altern": [0, 3, 6], "solve_modnam": [0, 6], "m": [0, 3, 5, 6], "alterant": 0, "allow": [0, 5, 7], "multipl": [0, 1, 7], "differ": [0, 1, 3, 6], "share": [0, 5, 6, 7], "same": [0, 3, 6], "calibr": [0, 3, 5, 6], "model_cali": [0, 3, 6], "ky_ratio_target": 0, "solve_vfi": [0, 3, 5, 6], "structur": [0, 1, 3, 5, 8], "interp_ord": 0, "order": [0, 1, 5, 6], "extrapol": [0, 1], "default": [0, 5], "extrapl": 0, "quadrait": 0, "pchip": 0, "": [0, 1, 3, 7], "singl": 0, "dimension": [0, 7], "algorithm": [0, 3, 5, 6, 7], "dbrent": 0, "choic": [0, 5, 6, 7], "box": [0, 5, 7], "donlp2": 0, "otherwis": [0, 6], "golden": 0, "brent": 0, "nr3_dbrent": 0, "vfi_tol_v": 0, "toler": 0, "converg": [0, 3, 5, 6], "1e": [0, 3, 6], "vfi_tol_polici": 0, "12": [0, 3, 5], "print_freq": 0, "frequenc": 0, "print": [0, 5], "100": [0, 3, 5], "solver_tol_x": 0, "8": [0, 3, 5], "solver_tol_con": 0, "feasibl": 0, "num_thread": 0, "thread": 0, "across": 0, "featur": [0, 1, 6], "numcor": 0, "overwrit": [0, 3, 5], "exist": 0, "ones": [0, 3, 5], "solve_ss": [0, 3, 5, 6], "equilbrium": 0, "ss_solver": 0, "solver": [0, 1, 3], "broyden": [0, 3, 5, 6, 7], "newton": [0, 3, 5, 6], "lsqnonlin": 0, "codosol": 0, "fsolv": 0, "ss_ftol": 0, "residu": [0, 1, 3, 5, 6], "ss_xtol": 0, "step": [0, 1, 3, 5, 6], "size": [0, 3, 5, 6], "ss_findiffstep": 0, "finit": [0, 1], "numer": [0, 1], "deriv": [0, 3], "hans_x": [0, 3, 5], "solve_trans_linear": [0, 3, 5, 6], "ss": [0, 5], "path": [0, 1, 3, 5, 6, 7], "space": [0, 1, 7], "jacobian": [0, 3, 7], "method": [0, 1, 3, 6], "respect": [0, 1, 3, 5, 6], "fake": [0, 1], "new": [0, 1, 5, 6], "conatin": 0, "around": 0, "carri": 0, "out": [0, 1, 3, 6], "t": [0, 1, 3, 5, 6], "200": [0, 3, 5, 6, 7], "solve_trans_nonlinear": [0, 3, 5, 6], "init_ss": [0, 5], "final_ss": [0, 5], "non": [0, 5, 7], "start": [0, 7], "final": [0, 3, 6], "trans_linear_rslt": [0, 3, 5], "nonlinear": [0, 1, 5, 6], "empti": 0, "trans_solv": [0, 3], "fixedjacobian": 0, "broydenmod": 0, "trans_ftol": 0, "trans_xtol": 0, "solve_": 0, "modnam": 0, "model_": 0, "input": [0, 1, 6, 7], "output": [0, 3, 6], "simulate_stochast": [0, 5], "eq_rslt": 0, "simul": [0, 1, 5], "random": [0, 5], "sampl": [0, 1, 5], "solve_nonlinear_tran": [0, 5], "num_sampl": [0, 5], "1e4": 0, "num_period": [0, 5], "1e3": 0, "simulate_initi": [0, 5], "stationari": [0, 1, 3, 5, 6], "simu_print_freq": 0, "summari": 0, "statsit": 0, "along": [0, 1, 5], "1000": [0, 5], "we": [1, 3, 5, 6], "write": [1, 6], "sequenti": [1, 3, 5, 6], "ani": [1, 3, 5], "heterogen": [1, 3, 5, 6], "agent": [1, 5, 6], "denot": [1, 3, 6], "mathbb": [1, 3, 5, 6], "subseteq": 1, "n_z": 1, "n_y": 1, "subset": [], "n_e": 1, "n_a": 1, "x": [1, 3, 5, 6], "n_x": 1, "fix": [1, 3, 6], "larg": [1, 3], "integ": 1, "given": [1, 3, 5, 6], "phi_0": [1, 5], "measur": [1, 3, 6], "mathcal": [1, 6], "equiv": [1, 6], "z_t": [1, 3, 5, 6], "_": [1, 3, 5, 6], "character": [1, 3, 5, 7], "y_t": [1, 3, 5], "f": [1, 3, 5, 6], "_t": [1, 6], "z_": [1, 3], "y_": [1, 3], "bar": [1, 3, 5, 6], "right": [1, 3, 6], "foral": [1, 6], "rightarrow": 1, "map": 1, "specif": [1, 3], "int": [1, 3, 5, 6], "g_": [1, 3, 5, 6], "mathrm": [1, 3, 5], "d": [1, 3, 5, 6], "phi_t": [1, 5], "bellman": [1, 3, 5, 6, 7], "v_t": [1, 3, 5, 6], "max_": [1, 3, 5, 6], "v_": [1, 3, 5, 6], "quad": [1, 3, 5, 6], "leq": [1, 5, 6], "sim": 1, "text": [1, 6, 8], "util": [1, 6], "set": [1, 3, 6], "subject": [1, 3, 5, 6, 7], "potenti": 1, "evolv": 1, "accord": [1, 5], "process": [1, 5], "p": [1, 6], "phi_": 1, "de": 1, "big": [1, 6], "da": 1, "being": [1, 3, 5], "notat": [1, 3, 5, 6], "read": 1, "k_": [1, 5], "note": [1, 3, 5, 6], "k_0": 1, "henc": 1, "part": [1, 6], "k_t": [1, 5], "ln": 1, "tau": [1, 3, 5, 7], "mu": [1, 3, 5], "two": [1, 3, 5, 6, 7], "albeit": 1, "effici": [1, 3], "gradient": 1, "base": [1, 5], "onc": 1, "challeng": [1, 3], "involv": [1, 3], "ineffici": 1, "induc": 1, "re": 1, "perturb": 1, "dimens": [1, 5], "automat": 1, "differenti": [1, 3, 7], "ad": [1, 6, 8], "possibl": 1, "auclert": [1, 5, 6], "et": [1, 5, 6], "al": [1, 5, 6], "2021": [1, 5, 6], "approach": 1, "develop": [1, 7], "propos": 1, "work": [1, 3, 5, 7], "adequ": 1, "dynam": [1, 5, 7], "doe": [1, 6], "high": [1, 3, 5, 6, 7], "keynesian": [1, 5, 6], "zero": [1, 3], "lower": [1, 3], "bound": [1, 3, 5, 6], "mckai": [1, 5, 6, 7], "nakamura": [1, 5, 6, 7], "steinsson": [1, 5, 6, 7], "2016": [1, 5, 6, 7], "central": [1, 3], "contribut": [1, 7], "our": 1, "enhanc": 1, "robust": 1, "provid": 1, "spars": 1, "entri": 1, "nabla_": 1, "cdot": [1, 6], "kei": 1, "observ": 1, "analyt": 1, "via": 1, "therefor": 1, "know": 1, "draw": [1, 6], "insight": 1, "schubert": 1, "1970": 1, "emploi": [1, 5], "reli": 1, "user": [1, 7], "identifi": 1, "remain": 1, "similar": [1, 7], "standard": 1, "addit": [1, 3], "than": [1, 6], "search": [1, 3, 5, 6], "sparsiti": 1, "construct": [1, 5], "toolbox": [1, 7], "both": [1, 5], "necessari": [1, 3], "affect": [1, 3], "decis": [1, 5, 6, 7], "tradit": [1, 3], "dens": 1, "without": [1, 3], "consid": [1, 5, 6], "could": [1, 3], "incorrect": 1, "mani": 1, "case": 1, "result": [1, 3, 5, 6], "diverg": 1, "suboptim": 1, "perform": [1, 7], "To": 1, "ensur": 1, "maximum": 1, "procedur": 1, "compil": [1, 3, 5, 6, 7, 8], "librari": 1, "matlab": [1, 3, 5, 6, 7, 8], "mex": [1, 3, 5, 6], "binari": [1, 7], "well": 1, "routin": 1, "whenev": 1, "backup": 1, "determinist": [1, 5, 6], "histogram": [1, 5, 6], "young": 1, "2010": [1, 5, 7], "eigenvector": 1, "taken": [1, 6], "account": [1, 6], "assur": 1, "aforement": 1, "see": [1, 3, 7], "api": [1, 5, 6, 7], "refer": [1, 5, 6, 7], "list": [1, 3, 5, 6, 7], "tbd": [2, 4], "one": [3, 5, 6], "hank": [3, 5, 6, 7], "studi": 3, "monetari": 3, "liquid": 3, "trap": 3, "nomin": 3, "driven": 3, "posit": [3, 6], "shock": [3, 5, 6], "common": 3, "discount": [3, 5, 6, 7], "factor": [3, 5, 6, 7], "bank": 3, "commit": [3, 8], "economi": [3, 5], "would": 3, "exit": 3, "demonstr": [3, 6, 7], "capabl": [3, 7], "highli": 3, "particular": 3, "veri": 3, "pose": 3, "solut": [3, 5, 7], "parameter": [3, 5, 6], "origin": 3, "paper": [3, 5], "labor": [3, 5, 6, 7], "real": [3, 6], "bond": 3, "hold": [3, 5, 6], "b": [3, 6], "n": [3, 5, 6, 7], "frac": [3, 6], "gamma": 3, "chi": [3, 6], "nu": [3, 6], "beta_t": 3, "r_t": [3, 5, 6], "w_ten": 3, "tau_t": 3, "d_t": [3, 6], "geq": [3, 5, 6], "w_t": [3, 5], "tax": [3, 5, 7], "level": [3, 6], "profit": [3, 6], "firm": [3, 5, 6], "take": [3, 6, 7], "whether": [3, 6], "type": 3, "choos": [3, 6], "consumpt": [3, 5, 6], "borrow": [3, 5], "gamma_t": [3, 6], "good": [3, 5, 6], "produc": [3, 5], "ce": 3, "engag": 3, "monopolist": 3, "competit": [3, 5, 6], "face": [3, 5, 6], "price": [3, 5, 6], "adjust": [3, 5, 7], "friction": 3, "la": 3, "calvo": 3, "phillip": 3, "curv": 3, "textbook": 3, "y_ts_t": 3, "n_t": [3, 6], "s_": 3, "theta": 3, "p_": 3, "pi_": 3, "p_t": 3, "w_": 3, "elast": [3, 6], "substitut": 3, "opportun": 3, "s_t": 3, "dispers": 3, "pi_t": [3, 6], "inflat": 3, "ideal": 3, "auxiliari": [3, 5], "author": 3, "implement": [3, 7], "taylor": 3, "rule": [3, 6], "i_t": 3, "max": [3, 6], "i_": 3, "phi": 3, "sinc": 3, "uncertainti": [3, 5, 7], "fisher": 3, "govern": 3, "financ": [3, 5], "spend": 3, "payment": [3, 5], "b_t": 3, "g_t": 3, "b_": 3, "r_": 3, "outstand": 3, "begin": 3, "benchmark": 3, "fiscal": 3, "amount": 3, "overlin": [3, 5, 6], "eg_": 3, "gamma_0": [3, 6], "infti": [3, 5, 6], "quantiti": [3, 5, 6], "w_tn_t": 3, "e_": 3, "impli": [3, 5, 6], "walra": [3, 5], "law": [3, 5], "further": 3, "simplifi": 3, "986": 3, "5": [3, 5, 6, 7], "9663": 3, "0334": 3, "0003": 3, "0167": 3, "9666": 3, "49008": 3, "0405": 3, "b_min": 3, "b_max": 3, "50": 3, "b_pt": 3, "201": 3, "b_shift": 3, "exp": [3, 5, 6, 7], "linspac": [3, 5, 6, 7], "log": [3, 5, 6, 7], "budget_n1": 3, "bp": 3, "ne": 3, "pii": 3, "pa": 3, "pb": 3, "markup": 3, "15": [3, 5, 6, 7], "prob": 3, "stagger": 3, "pop_tax": 3, "25": [3, 5, 7], "ii0": 3, "005": 3, "how": [3, 7], "m_shock": 3, "ii": 3, "pstar": 3, "pars": [3, 5, 6], "filespars": [3, 5], "filessuppos": [3, 5], "you": [3, 5, 8], "hank1": 3, "directori": [3, 5, 8], "matlabclear_hanshan": [3, 5], "hank1pars": 3, "ok": [3, 5, 6], "dpopt_vfi": [3, 5, 6], "build": [3, 5, 6, 8], "mingw64": [3, 5, 6], "complet": [3, 5, 6], "successfulli": [3, 5, 6], "struct": [3, 5, 6], "var_agg_param": [3, 5, 6], "var_agg_assign": [3, 5, 6], "var_agg_in_ind_param": [3, 5, 6], "var_ind_in_eq": [3, 5, 6], "As": [3, 5, 6], "shown": [3, 5, 6], "han": [3, 5, 6, 8], "paras": [3, 5], "describ": [3, 5], "clear_han": [3, 5], "first": [3, 5, 6], "cach": [3, 5], "equilibriumcal": [3, 5], "solve_cali": [3, 6], "calibrationt": 3, "cali_rslt": [3, 6], "metric_v": [3, 5, 6], "00168503": 3, "metric_pol": [3, 5, 6], "476": 3, "rang": [3, 5, 6], "32": [3, 5], "3227": 3, "equilbirium": [3, 5, 6], "0405098": 3, "323861": 3, "func": [3, 5, 6], "count": [3, 5, 6], "fnorm": [3, 5, 6], "norm": [3, 5, 6], "065268e": 3, "01": [3, 5, 6], "263845e": 3, "0001": 3, "03659e": 3, "05": [3, 5, 6], "216": [3, 6], "0404013": 3, "323684": 3, "60056": 3, "51514e": 3, "06": [3, 5, 6], "222": 3, "0405116": 3, "323222": 3, "03796": 3, "8252": 3, "06396e": 3, "386": 3, "31": [3, 5], "3304": 3, "0175e": 3, "000127707": 3, "632513e": 3, "08": [3, 5, 6], "277698e": 3, "04": [3, 5, 6], "283784e": 3, "000000e": [3, 5, 6], "00": [3, 5, 6, 7], "82509": 3, "45515e": 3, "140": 3, "37884e": 3, "09": [3, 5, 6], "08386e": 3, "288908e": 3, "16": [3, 5], "135301e": 3, "171250e": 3, "reus": [3, 5, 6], "fprintf": [3, 5], "toc": [3, 5, 6], "elaps": [3, 5, 6], "122064": 3, "second": [3, 5, 6, 7], "var_aggan": [3, 5, 6], "0380": 3, "8251": 3, "9860": 3, "8333": 3, "1730": 3, "0050": 3, "1159": 3, "4111": 3, "0a": 3, "warmupw": 3, "trivial": 3, "linera": 3, "obtain": 3, "later": 3, "shockth": 3, "rais": [3, 5], "framework": [3, 7], "neg": 3, "drive": 3, "let": [3, 5, 6], "\u03b2": 3, "small": 3, "percentag": 3, "point": 3, "33": 3, "beta_factor": 3, "001638": 3, "figur": [3, 5], "plot": [3, 5, 6], "titl": [3, 5, 6], "hit": [3, 5], "tic": [3, 5, 6], "trans_nonlinear_rslt_zlb": 3, "486206e": 3, "118066e": 3, "245582e": 3, "7": [3, 5, 6], "902899e": 3, "268511e": 3, "501378e": 3, "02": [3, 5, 6], "915712e": 3, "329662e": 3, "200015e": 3, "03": [3, 5, 6], "464123e": 3, "306648e": 3, "453417e": 3, "907476e": 3, "548852e": 3, "10": [3, 5, 6], "127025e": 3, "07": [3, 5, 6], "357119e": 3, "9": [3, 5, 6, 7], "155388e": 3, "286371e": 3, "134183e": 3, "020893e": 3, "newtonfprintf": 3, "liquidti": 3, "615578": 3, "netwon": 3, "now": [3, 5], "inspect": [3, 5, 6], "inde": 3, "trigger": 3, "substanti": 3, "fall": 3, "length": 3, "var_agg_t": [3, 5, 6], "40": [3, 5], "linewidth": 3, "legend": [3, 5], "No": 3, "fontsiz": 3, "14": [3, 5], "locat": [3, 5], "best": [3, 5], "endsolv": 3, "guidancea": 3, "abov": [3, 6], "caus": 3, "20": [3, 5], "three": [3, 5, 6], "achiev": 3, "23": [3, 5], "equilbirum": 3, "m_shock_t": 3, "make": [3, 6, 8], "sure": 3, "peggingm_shock_t": 3, "24": [3, 5], "00092": 3, "mn": 3, "nbsp": 3, "trans_nonlinear_rslt_zlb_and_fg": 3, "690161e": 3, "300062e": 3, "548295e": 3, "244305e": 3, "815699e": 3, "094189e": 3, "015657e": 3, "100678e": 3, "868972e": 3, "141492e": 3, "518881e": 3, "076167e": 3, "411996e": 3, "759440e": 3, "264677e": 3, "124578e": 3, "507298e": 3, "810113e": 3, "252341e": 3, "253649e": 3, "165918e": 3, "414554e": 3, "582783e": 3, "522481e": 3, "553915e": 3, "383555e": 3, "251368e": 3, "118645e": 3, "005057e": 3, "newtonnot": 3, "previous": 3, "warm": 3, "up": 3, "faster": 3, "next": [3, 7], "compar": [3, 5, 6], "replic": [3, 6], "With": [3, 5, 6], "idiosyncrat": [5, 6], "uninsur": 5, "incom": [5, 7], "risk": [5, 7], "household": [5, 6], "total": [5, 6], "unexpect": [5, 6], "boppart": [5, 6], "mitman": [5, 6], "2018": [5, 6], "effect": [5, 6], "den": [5, 7], "haan": [5, 7], "judd": [5, 7], "juillard": [5, 7], "comput": [5, 7], "suit": [5, 7], "incomplet": [5, 7], "market": [5, 6, 7], "employ": 5, "statu": 5, "unemploy": [5, 7], "insur": [5, 7], "hire": 5, "l_t": 5, "depreci": [5, 6, 7], "z_tk_t": 5, "clear": [5, 6], "benefit": [5, 6], "consist": [5, 6], "ks_jedc10": 5, "journal": [5, 7], "econom": [5, 7], "control": [5, 7], "34": [5, 7], "pp": [5, 7], "99": [5, 7], "009": [5, 7], "89": [5, 7], "replac": [5, 7], "ratio": [5, 7], "600000": [5, 7], "400000": [5, 7], "044445": [5, 7], "955555": [5, 7], "shock_invariant_dist": [5, 7], "e_bar": [5, 7], "unemp_r": [5, 7], "500": [5, 7], "simpli": 5, "43": [5, 7], "guess": [5, 7], "36": [5, 7], "025": [5, 7], "like": [5, 7], "dynar": [5, 7], "38": [5, 7], "goal": 5, "explain": 5, "balanc": 5, "advanc": 5, "multi": [5, 6, 7], "here": [3, 5, 6], "sum": [5, 6], "certain": 5, "directli": 5, "readi": [5, 6], "enclos": [5, 6], "highlight": [3, 5, 6], "ha": [5, 7], "natur": 5, "syntax": [5, 6], "treat": 5, "known": 5, "oper": [5, 6], "realiz": [5, 6], "arbitrari": [5, 7], "stop": 5, "defn": 5, "so": [3, 5, 6], "self": 5, "essenti": 5, "variant": 5, "tfp": [5, 7], "recal": 5, "convent": 5, "predetermin": 5, "impos": 5, "specfi": 5, "guarante": 5, "other": [3, 5, 6, 7], "ca": [], "usag": [3, 5, 6, 7], "illustr": [3, 5, 6], "ks_jedc10pars": 5, "sigma": [5, 6, 7], "equilibriumt": 5, "ss_rslt": [5, 6], "00663442": 5, "489": 5, "18": 5, "9484": 5, "0071": 5, "024452e": 5, "200706e": 5, "0043": 5, "000364795": 5, "290": 5, "015": 5, "14285e": 5, "646": 5, "8489": 5, "26": 5, "1081": 5, "816343e": 5, "610813e": 5, "500000e": 5, "437515e": 5, "39": 5, "0435e": 5, "865": 5, "60": 5, "5201": 5, "2586": 5, "104102e": 5, "025858e": 5, "250000e": 5, "129711e": 5, "625": 5, "17248e": 5, "991": 5, "128": 5, "441": 5, "13": 5, "1583": 5, "731411e": 5, "315831e": 5, "443720e": 5, "3125": 5, "22019e": 5, "1034": 5, "91778": 5, "513465e": 5, "917784e": 5, "125000e": 5, "698019e": 5, "2235": 5, "49177e": 5, "915": 5, "10224": 5, "682838e": 5, "102240e": 5, "903913e": 5, "268": 5, "27167e": 5, "860": 5, "0836401": 5, "995670e": 5, "364012e": 5, "451957e": 5, "2692": 5, "76193e": 5, "564": 5, "0116397": 5, "354831e": 5, "163972e": 5, "240618e": 5, "2691": 5, "09795e": 5, "355": 5, "000535046": 5, "862740e": 5, "350458e": 5, "515583e": 5, "74544e": 5, "109": 5, "71076e": 5, "11": 5, "261282e": 5, "710763e": 5, "302386e": 5, "488543": 5, "ss_rsltss_rslt": 5, "vfi_rslt": [5, 6], "stat": 5, "dist": [5, 6], "doubl": 5, "resid": 5, "7108e": 5, "exit_flag": 5, "rslt_type": 5, "solver_output": 5, "ind_rslt_dict": 5, "arraykeymap": 5, "0099": 5, "3769": 5, "7139": 5, "9567": 5, "7571we": 5, "insepct": 5, "distributionplot": [5, 6], "xlabel": [5, 6], "ylabel": [5, 6], "fraction": 5, "functionsplot": 5, "low": [5, 6], "temporai": 5, "shocksolv": 5, "pathw": 5, "shock_z": 5, "rho_z": [5, 6], "686213": 5, "trans_linear_rslttrans_linear_rslt": 5, "var_agg_shock_t": 5, "jacs_ind_wrt_agg": 5, "jac_eqs_of_var_agg": 5, "irf_ssj": 5, "pathnow": 5, "trans_nonlinear_rslt": 5, "800552e": 5, "408433e": 5, "663947e": 5, "581462e": 5, "095308e": 5, "broydenfprintf": 5, "229093": 5, "trans_nonlinear_rslttrans_nonlinear_rslt": 5, "exitflag": 5, "eqs_resid": 5, "nonlinear_tran": 5, "perman": 5, "shockw": 5, "sovl": 5, "ss_rslt_new": 5, "0403421": 5, "413": 5, "160": 5, "841": 5, "586975e": 5, "608408e": 5, "00550782": 5, "199": 5, "836": 5, "195": 5, "495": 5, "0173235": 5, "251": 5, "1867": 5, "177": 5, "356": 5, "145508e": 5, "773558e": 5, "524948e": 5, "119": 5, "247": 5, "000418207": 5, "593": 5, "95": 5, "5869": 5, "75": 5, "8555": 5, "754062e": 5, "585554e": 5, "624738e": 5, "94": 5, "8119": 5, "83391e": 5, "1024": 5, "104": 5, "716": 5, "096535e": 5, "047156e": 5, "443547e": 5, "107": 5, "58706e": 5, "1299": 5, "86": 5, "2799": 5, "444222e": 5, "627991e": 5, "221774e": 5, "118": 5, "026": 5, "32533e": 5, "674": 5, "115": 5, "361": 5, "71": 5, "2133": 5, "071333e": 5, "121329e": 5, "2833": 5, "8147e": 5, "1217": 5, "1582": 5, "832350e": 5, "915820e": 5, "874234e": 5, "108": 5, "654": 5, "78346e": 5, "1192": 5, "81": 5, "0655": 5, "571617e": 5, "106551e": 5, "371172e": 5, "117": 5, "088": 5, "73028e": 5, "713": 5, "137": 5, "358": 5, "66": 5, "8543": 5, "469492e": 5, "685426e": 5, "102": 5, "82466e": 5, "1156": 5, "3721": 5, "906088e": 5, "437207e": 5, "437252e": 5, "902": 5, "69193e": 5, "1337": 5, "73": 5, "9379": 5, "466809e": 5, "393788e": 5, "186259e": 5, "116": 5, "37": 5, "568e": 5, "719": 5, "161": 5, "62": 5, "7817": 5, "941536e": 5, "278166e": 5, "105": 5, "292": 5, "31381e": 5, "1283": 5, "90": 5, "0579": 5, "110429e": 5, "005792e": 5, "107805e": 5, "110": 5, "831": 5, "6242e": 5, "1285": 5, "63": 5, "5917": 5, "043907e": 5, "359172e": 5, "539026e": 5, "113": 5, "743": 5, "9994e": 5, "963": 5, "5864": 5, "977013e": 5, "158641e": 5, "626473e": 5, "370880e": 5, "111": 5, "084": 5, "99602e": 5, "1145": 5, "59": 5, "2506": 5, "17": 5, "510630e": 5, "925057e": 5, "659407e": 5, "112": 5, "414": 5, "37522e": 5, "1094": 5, "4686": 5, "051521e": 5, "746860e": 5, "329704e": 5, "887": 5, "50023e": 5, "950": 5, "94162": 5, "19": 5, "653100e": 5, "941615e": 5, "735105e": 5, "819": 5, "57584e": 5, "813": 5, "0719135": 5, "171552e": 5, "191350e": 5, "824452e": 5, "817": 5, "43607e": 5, "488": 5, "000647376": 5, "21": 5, "190962e": 5, "473764e": 5, "710179e": 5, "91224e": 5, "00672e": 5, "80": 5, "000487595": 5, "22": 5, "377487e": 5, "875948e": 5, "525794e": 5, "96806e": 5, "00087e": 5, "203": 5, "00145568": 5, "119016e": 5, "455684e": 5, "656163e": 5, "99162e": 5, "00287e": 5, "000980458": 5, "612978e": 5, "804580e": 5, "328082e": 5, "94487e": 5, "00652e": 5, "146": 5, "24834e": 5, "553178e": 5, "248339e": 5, "1option": 5, "trans_to_new_ss_rslt": 5, "361269e": 5, "322069e": 5, "831519e": 5, "353336e": 5, "746381e": 5, "928935e": 5, "391964e": 5, "326839e": 5, "277507e": 5, "130268e": 5, "819679e": 5, "582870e": 5, "978530e": 5, "717419e": 5, "003643e": 5, "001820e": 5, "033724e": 5, "266697e": 5, "125476e": 5, "258355e": 5, "681201e": 5, "067290e": 5, "298983e": 5, "120954": 5, "trans_to_new_ss_rslttrans_to_new_ss_rslt": 5, "subplot": 5, "samplessimul": 5, "distributionw": 5, "simu_rslt": 5, "cstate_transition_value_1": 5, "896": 5, "87": 5, "753": 5, "86fprintf": 5, "807524": 5, "simu_rsltsimu_rslt": 5, "10000": 5, "state_transition_value_1": 5, "panel": 5, "simualt": 5, "mean": 5, "By": 5, "000": 5, "drawn": [5, 6], "simu_opt": 5, "2e4": 5, "2e3": 5, "899": 5, "758": 5, "2000": 5, "895": 5, "82": 5, "752": 5, "81fprintf": 5, "490324": 5, "normal": 5, "xlim": 5, "210": 5, "ylim": 5, "014": 5, "pathto": 5, "them": 5, "distirubtionsimulate_initi": 5, "valuessimu_opt": 5, "simu_trans_rslt": 5, "0200": 5, "138": 5, "9we": 5, "determinst": 5, "behind": [5, 6], "scene": [5, 6], "understand": [5, 6], "detail": [5, 6, 7], "more": [5, 6, 7], "busi": 6, "cycl": 6, "invest": 6, "krusel": [6, 7], "equival": [], "winberri": 6, "trend": 6, "growth": 6, "varepsilon": 6, "incur": 6, "xi": 6, "unit": 6, "becom": 6, "unconstrain": 6, "constrain": 6, "interv": 6, "ak": 6, "leav": 6, "uniform": 6, "At": 6, "omega_t": 6, "under": [6, 7, 8], "unlock": 6, "0_": 6, "inherit": 6, "int_0": 6, "threshold": 6, "outweigh": 6, "satisfi": 6, "thu": 6, "leisur": 6, "maxim": 6, "lifetim": 6, "sum_": 6, "c_t": 6, "give": 6, "c_": 6, "h": 7, "eterogen": 7, "gent": 7, "onlinear": 7, "olver": 7, "bai": 7, "luo": 7, "wang": 7, "2023": 7, "econ": [7, 8], "ark": 7, "phact": 7, "what": 7, "intuit": 7, "script": [3, 6, 7, 8], "file": [7, 8], "offer": 7, "friendli": 7, "interfac": 7, "smith": [6, 7], "1998": [6, 7], "regular": 7, "laptop": 7, "within": 7, "mu_ratio": 7, "avers": 7, "handl": [5, 7], "portfolio": [5, 6, 7], "home": 7, "get": 7, "hmod": [7, 8], "forward": 7, "guidanc": 7, "zlb": 7, "convex": [5, 7], "cost": [5, 7], "khan": [5, 7], "thoma": [5, 7], "2008": [5, 7], "partial": 7, "frequent": 7, "instal": 8, "sphinx": 8, "extens": [6, 8], "python": 8, "shell": 8, "pip": 8, "rst2pdf": 8, "sphinx_rtd_them": 8, "myst": 8, "clone": 8, "git": 8, "repositori": 8, "http": 8, "github": 8, "com": 8, "io": 8, "creat": 8, "folder": 8, "sourc": 8, "copi": 8, "live": 8, "templat": 8, "ks_notebook": 8, "mlx": 8, "convert": 8, "html": 8, "run": 8, "command": 8, "intern": 8, "liveeditor": 8, "openandconvert": 8, "example_notebook": 8, "suppos": 8, "your": 8, "md": 8, "add": [6, 8], "toctre": 8, "do": 8, "abl": [6, 8], "push": 8, "repo": 8, "root": 8, "recompil": 8, "websit": 8, "pull": 8, "request": 8, "merg": 8, "compat": 8, "markedli": 8, "typographi": 8, "readthedoc": 8, "direct": 8, "document": 8, "doc": 8, "org": 8, "boreal": [1, 6], "access": 5, "check": [5, 6], "complex": [5, 6], "style": 6, "min": 6, "appli": 6, "underbrac": 6, "iint_0": 6, "xi_t": 6, "int_": 6, "four": 6, "due": 6, "gamma_": 6, "dk": 6, "sever": 6, "simplif": 6, "independ": 6, "decoupl": 6, "written": 6, "geq0": 6, "assumpt": 6, "cutoff": 6, "kt2008": 6, "xi_max": 6, "961": 6, "invers": 6, "ei": 6, "256": 6, "64": 6, "085": 6, "0083": 6, "upper": 6, "011": 6, "region": 6, "859": 6, "022": 6, "rouwenhorst": 6, "setup_shock_process": 6, "k_min": 6, "k_max": 6, "nkgrid": 6, "ka": 6, "kc": 6, "nd": 6, "kp": 6, "nd_input": 6, "tv_fix": 6, "ra": 6, "rc": 6, "optimimz": 6, "xi_tild": 6, "domain": 6, "xi_star": 6, "nd_adjust": 6, "averag": 6, "gross": 6, "sale": 6, "consum": 6, "4135": 6, "32531": 6, "n_star": 6, "target": 6, "foc": 6, "cali": 6, "indepen": 6, "agre": 6, "Then": 6, "var_state_nam": 6, "value_1": 6, "value_2": 6, "probability_1": 6, "probability_2": 6, "main": [3, 6], "targetd": 6, "basic": 6, "untitledloc": 6, "kt2008pars": 6, "symbol": 6, "fail": 6, "switch": 6, "cell": 6, "85215e": 6, "29862e": 6, "390": 6, "68": 6, "000197203": 6, "000149756": 6, "131594e": 6, "476205e": 6, "4136": 6, "64107e": 6, "48728e": 6, "227": 6, "000959078": 6, "000766295": 6, "32554": 6, "86429e": 6, "76106e": 6, "213": 6, "000470949": 6, "000404774": 6, "413464": 6, "32538": 6, "81415e": 6, "01103e": 6, "96032e": 6, "34074e": 6, "570212e": 6, "962590e": 6, "735502e": 6, "464644": 6, "3254": 6, "9615we": 6, "97218e": 6, "577820e": 6, "972178e": 6, "statess_rslt": 6, "9610": 6, "9615": 6, "3333let": 6, "mesh": 6, "exhibit": 6, "either": 6, "too": 6, "zig": 6, "zag": 6, "shape": 6, "pattern": 6, "increas": 6, "seri": 6, "size_z_shock": 6, "feed": 6, "trans_rslt": 6, "386038e": 6, "818968e": 6, "281655e": 6, "776667e": 6, "418998e": 6, "broydentoc": 6, "657985": 6, "resolv": 6, "trans_large_shock": 6, "372703e": 6, "807498e": 6, "824057e": 6, "350577e": 6, "670312e": 6, "383330e": 6, "839383e": 6, "916697e": 6, "411725e": 6, "067854e": 6, "803021e": 6, "220428e": 6, "104730e": 6, "834561e": 6, "broydenplot": 6, "respons": 6, "roughli": 6, "show": 6, "despit": 6, "micro": 6, "covex": 6, "echo": 6, "find": 6, "rise": 6, "import": 6, "margin": 6, "nevertheless": 3, "reduc": 3, "unless": 3, "desir": 6}, "objects": {"": [[0, 0, 1, "", "simulate_stochastic"], [0, 0, 1, "", "solve_ss"], [0, 0, 1, "", "solve_trans_linear"], [0, 0, 1, "", "solve_trans_nonlinear"], [0, 0, 1, "", "solve_vfi"]]}, "objtypes": {"0": "py:function"}, "objnames": {"0": ["py", "function", "Python function"]}, "titleterms": {"toolbox": [0, 3, 5, 6], "api": 0, "refer": [0, 8], "script": [0, 5], "hmod": [0, 3, 5, 6], "file": [0, 3, 5, 6], "matlab": 0, "interfac": 0, "The": [1, 3, 5, 6], "algorithm": 1, "gener": 1, "framework": 1, "exampl": [1, 8], "krusel": [1, 5], "smith": [1, 5], "1998": [1, 5], "calcul": 1, "jacobian": 1, "partial": 1, "broyden": 1, "updat": 1, "other": 1, "implement": 1, "detail": 1, "handl": [2, 4, 6], "non": [2, 3, 6], "trivial": 2, "market": [2, 3], "clear": [2, 3], "One": 2, "asset": [2, 4], "hank": [2, 4], "solv": 3, "linear": 3, "transit": 3, "forward": 3, "guidanc": 3, "under": 3, "zlb": 3, "mckai": 3, "nakamura": 3, "steinsson": 3, "2016": 3, "model": [3, 5, 6, 7], "household": 3, "decis": 3, "problem": 3, "new": 3, "keynesian": 3, "block": 3, "condit": 3, "definit": 3, "equilibrium": 3, "us": [3, 5, 6, 8], "portfolio": 4, "choic": 4, "two": 4, "get": 5, "start": 5, "what": [5, 6], "": [5, 6], "next": [5, 6], "convex": 6, "adjust": 6, "cost": 6, "khan": 6, "thoma": 6, "2008": 6, "han": 7, "A": 7, "heterogen": 7, "agent": 7, "nonlinear": 7, "solver": 7, "content": 7, "how": 8, "contribut": 8, "frequent": 8, "character": 6}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Toolbox API Reference": [[0, "toolbox-api-reference"]], "Toolbox Script (hmod) File": [[0, "toolbox-script-hmod-file"]], "MATLAB Interfaces": [[0, "matlab-interfaces"]], "Handling Non-trivial Market Clearing: One-asset HANK": [[2, "handling-non-trivial-market-clearing-one-asset-hank"]], "Handling Portfolio Choices: Two-asset HANK": [[4, "handling-portfolio-choices-two-asset-hank"]], "The Algorithm": [[1, "the-algorithm"]], "General Framework": [[1, "general-framework"]], "Example: Krusell and Smith (1998)": [[1, "example-krusell-and-smith-1998"]], "Calculating the Jacobian with Partial Broyden Updates": [[1, "calculating-the-jacobian-with-partial-broyden-updates"]], "Other Implementation Details": [[1, "other-implementation-details"]], "The Model": [[5, "the-model"], [3, "the-model"]], "Use the Toolbox": [[5, "use-the-toolbox"], [3, "use-the-toolbox"], [6, "use-the-toolbox"]], "Getting Started: Krusell and Smith (1998)": [[5, "getting-started-krusell-and-smith-1998"]], "The Toolbox Script (hmod) File": [[5, "the-toolbox-script-hmod-file"]], "What\u2019s Next?": [[5, "whats-next"], [6, "whats-next"]], "HANS: A Heterogeneous-Agent model Nonlinear Solver": [[7, "hans-a-heterogeneous-agent-model-nonlinear-solver"]], "Contents": [[7, null]], "How to Contribute Examples": [[8, "how-to-contribute-examples"]], "Frequently used references:": [[8, "frequently-used-references"]], "The hmod File": [[3, "the-hmod-file"], [6, "the-hmod-file"]], "Solving for Non-linear Transitions: Forward Guidance under ZLB (McKay, Nakamura, Steinsson, 2016)": [[3, "solving-for-non-linear-transitions-forward-guidance-under-zlb-mckay-nakamura-steinsson-2016"]], "Households decision problems": [[3, "households-decision-problems"]], "The New-Keynesian block": [[3, "the-new-keynesian-block"]], "Market clearing conditions": [[3, "market-clearing-conditions"]], "Definition of equilibrium": [[3, "definition-of-equilibrium"]], "Handling Non-convex Adjustment Costs: Khan and Thomas (2008)": [[6, "handling-non-convex-adjustment-costs-khan-and-thomas-2008"]], "Model": [[6, "model"]], "Characterizations": [[6, "characterizations"]]}, "indexentries": {}})