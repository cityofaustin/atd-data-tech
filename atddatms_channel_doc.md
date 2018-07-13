## Managing DATMS Anaconda channel

This documents serves as a brief introduction to manageing Austin Transportation Department DATMS anaconda channel.

Link to the channel: [Here](https://anaconda.org/atddatms)

All packages used in knackpy, tdutils and ATD data publishing project are avalible on [pypi](https://pypi.org/) and will be avaliable in this conda channel as well.

### Obtain the conda package installer (tar.bz2 file)

#### Copy packages from other anaconda channel

1. Search package name in the search box on anaconda home page:
[https://anaconda.org/](https://anaconda.org/)
2. Click on the the package name.
3. Click on the files tab.
4. Find tar.bz2 filw with right package name and operating system and download it to the local disk.
5. Open the terminal, cd to the directory that contains the tar.bz2 file.

#### Create conda installation package from pypi package

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
6. Sign in to the anaconda dashboard to verify if all packages are uploaded properly.
