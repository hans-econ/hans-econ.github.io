# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))

from sphinx.application import Sphinx
from sphinx.util.docfields import Field
from pygments.lexer import RegexLexer, bygroups
from pygments import token
from sphinx.highlighting import lexers

numfig = True
math_numfig = True
numfig_secnum_depth = 2
math_eqref_format = "({number})"

class BCLLexer(RegexLexer):
    name = 'HANS'
	
    keywordListStr = """ 
		parameters, var_shock, var_state,
        var_pre_vfi, var_policy, var_aux,
        vfi;,
        var_agg_shock,
        var_agg, initial,
        shock_trans,
        model;,
        end;
		"""
    keywordList = keywordListStr.split(',')
    keywordListPair = [( '(.*)(' + p.replace('\n','').replace('\t','').strip() + ')(.*)', bygroups(token.Text,token.Keyword,token.Text)) for p in keywordList]

    tokens = {
        'root': [
			(r'%.*$', token.Comment),
			(r'(.*)(%.*$)', bygroups(token.Text,token.Comment))
        ] + keywordListPair
        + [
			(r'.*\n', token.Text),
        ]
    }

lexers['HANS'] = BCLLexer(startinline=True)

# -- Custom objects -----------------------------------
def setup(app: Sphinx):
    app.add_object_type(
        'declare',
        'declare',
        objname='Declaration',
        indextemplate='pair: %s; declare'
    )
    app.add_object_type(
        'option',
        'option',
        objname='Option',
        indextemplate='pair: %s; option'
    )


# -- Project information -----------------------------------------------------

project = 'HANS'
copyright = '2023, Jinhui Bai, Wenlan Luo and Pengfei Wang'
author = 'Jinhui Bai, Wenlan Luo and Pengfei Wang'

html_title = 'HANS Homepage'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
  'myst_parser',
  'rst2pdf.pdfbuilder',
  'sphinx.ext.autosectionlabel',
  'sphinx.ext.githubpages',
]
pdf_documents = [('index', u'rst2pdf', u'HANS User Manual', u'Jinhui Bai and Wenlan Luo'),]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# myst markdown extension
myst_enable_extensions = [
    "amsmath",
    "attrs_inline",
    "colon_fence",
    "deflist",
    "dollarmath",
    "fieldlist",
    "html_admonition",
    "html_image",
    "replacements",
    "smartquotes",
    "strikethrough",
    "substitution",
    "tasklist",
]

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'sphinx_rtd_theme'
html_show_sourcelink = False

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
# html_static_path = ['_static','lectures']
html_static_path = []