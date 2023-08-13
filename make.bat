@ECHO OFF

setlocal enabledelayedexpansion

REM loop through all files and folders
for /F "delims=" %%i in ('dir /b') do (
    set "item=%%i"

    REM Check if the item is not in the exception list
    if not "!item!"=="source" (
        if not "!item!"==".git" (
            if not "!item!"==".gitignore" (
                if not "!item!"=="make.bat" (
                    if not "!item!"=="CNAME" (
                        REM Delete if it's a file
                        if exist "%%i" del /F /Q "%%i"

                        REM Delete if it's a directory
                        if exist "%%i\" rmdir /S /Q "%%i"
                    )
                )
            )
        )
    )
)

endlocal

pushd %~dp0

REM Command file for Sphinx documentation

if "%SPHINXBUILD%" == "" (
	set SPHINXBUILD=sphinx-build
)
set SOURCEDIR=source
set BUILDDIR=build

if "%1" == "" goto help

%SPHINXBUILD% >NUL 2>NUL
if errorlevel 9009 (
	echo.
	echo.The 'sphinx-build' command was not found. Make sure you have Sphinx
	echo.installed, then set the SPHINXBUILD environment variable to point
	echo.to the full path of the 'sphinx-build' executable. Alternatively you
	echo.may add the Sphinx directory to PATH.
	echo.
	echo.If you don't have Sphinx installed, grab it from
	echo.http://sphinx-doc.org/
	exit /b 1
)

%SPHINXBUILD% -M %1 %SOURCEDIR% %BUILDDIR% %SPHINXOPTS%
goto end

:help
%SPHINXBUILD% -M help %SOURCEDIR% %BUILDDIR% %SPHINXOPTS%

:end
popd