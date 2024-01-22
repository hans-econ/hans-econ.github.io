# How to Contribute Examples
- Ensure Python and Git are installed and configured on your computer. Open a command window running a standard command shell (e.g., Bash on Linux or PowerShell on Windows).

- Install Sphinx and extensions for Python with the following shell command:

  ```shell
  pip install sphinx rst2pdf sphinx_rtd_theme myst-parser
  ```

- Clone the git repository with the following shell command:

  ```shell
  git clone https://github.com/hans-econ/hans-econ.github.io
  ```

- Create a folder with the name of the example under source/examples/ 

- Copy the hmod file to the example folder

- Create a MATLAB live script under the example folder, following the template {download}`ks_notebook.mlx <../examples/KS_JEDC10/ks_notebook.mlx>`

- Convert the live script into a html file by running in the MATLAB command line

  ```matlab
  matlab.internal.liveeditor.openAndConvert('example_notebook.mlx','example_notebook.html')
  ```

  Suppose your live script is named example_notebook.mlx

- Create a .md file and include the model, the hmod file and the html generated from the MATLAB live script. Follow the template {download}`ks.md <../examples/KS_JEDC10/ks.md>`

- In source/examples/index.md, add the .md file under the toctree

- (Optional, only do this if you are able to push changes to the git repo) Change directory to the repository root folder, run in shell to recompile the website

  ```shell
  ./make html
  ```

  Copy all files and folders from build/html/ to the root folder

- Commit and push changes or create a pull request to merge the added example

## Frequently used references

The .md file needs to be compatible with MySt (Markedly Structured Text) and compiled with Sphinx. References can be found at

-  [Typography (myst-parser.readthedocs.io)](https://myst-parser.readthedocs.io/en/latest/syntax/typography.html)

- Sphinx directives: [Directives — Sphinx documentation (sphinx-doc.org)](https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html)

