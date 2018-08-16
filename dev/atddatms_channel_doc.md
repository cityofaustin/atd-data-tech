## Managing DATS Anaconda Channel

This documents serves as a brief introduction to manageing Austin Transportation Department DATMS anaconda channel.

Link to the channel: [Here](https://anaconda.org/atddatms)

All packages used in knackpy, tdutils and ATD data publishing project are avalible on [pypi](https://pypi.org/) and will be available in this conda channel as well.

Before read the rest of this document, please make sure that Anaconda or Miniconda is installed. Moreover, you also need to install conda-build and anaconda-client using conda build.

### Copy packages from other anaconda channel

1. Search the package name in the search box on anaconda home page: [https://anaconda.org](https://anaconda.org/)

2. Write down the channel name. Open the terminal or command line prompt and type:

  first, login in:

  ```console
  anaconda login
  ```

  type in your user name and password. If you have logged in before, you may skip this step. 

3. 

  ```console
  anaconda copy {channel name}/{package name}/{version} --to-owner {name of your channel}
  ```

for example, if I want to copy the version 0.23.3 of pandas package from conda-forge channel to atddatms (Austin transportation DATS team):

  ```console
  anaconda copy conda-forge/pandas/0.23.3 --to-owner atddatms
  ```

4. Log in to the anaconda dashboard to verify if all packages are uploaded properly.

### Create conda installation package from pypi package

Anaconda's instruction for building conda pakcages from pypi pakcages: [Building conda packages with conda skeleton](https://conda.io/docs/user-guide/tutorials/build-pkgs-skeleton.html). 

###  Convert conda packages for other opearting system

Instruction from Anaconda: [Here](https://conda.io/docs/user-guide/tutorials/build-pkgs-skeleton.html#optional-converting-conda-package-for-other-platforms)

### Upload packages to Anaconda
1. install anaconda-client by typing:
```console
conda install anaconda-client
```
in the terminal

2. Open the directory contains tar.bz2 file.

3. type
```console
anaconda login
```
into the terminal.
4. Enter the username and the password.
5. type
```console
anaconda upload {full name of the package with the extension}
```
6. Log in to the anaconda dashboard in your browser to verify if all packages are uploaded properly.
7. If there are multiple installation files for a same package needs to be uploaded (i.e. one package may needs both MacOS and Windows file), they need to be uploaded separately.



### Troubleshooting

1. If the the `anaconda copy` command yields only `Using Anaconda API: https://api.anaconda.org` , it mostly caused by wrong user name, packages name or an non-exist package version. Verify these information by log in your anaconda account and manually verify the package name and the it’s version.

2. If the `conda skeleton` command yields MinGW gcc error on Windows platform after you installed the MinGW on your windows, please use a Linux or a MacOS system instead. Currently, I don’t have a viable solution for this issue. 

3. Installing pymssql may run into a wheel problem. In this case, please visit this [page](https://www.lfd.uci.edu/~gohlke/pythonlibs/#pymssql) to download the right wheel for your operating system. Thanks to the work of Laboratory For Fluorescence Dynamics at University of California, Irvine. 

   