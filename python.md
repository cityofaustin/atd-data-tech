# Python

## Install package in editable mode

From parent directory of package:

```bash
$ pip install -e <your package name>
```

## Updating and Publishing Packages to PyPi:

See [Packaging Python Projects \(`python.org`\)](https://packaging.python.org/tutorials/packaging-projects/)

1. Your python envrionment will require the following pacakges:

   ```text
    python=3
    setuptools
    twine
   ```

2. Update the [semantic version](https://semver.org/) number in the package's `setup.py`.
3. From the same directory as `setup.py` build the new version:

   ```bash
    $ python setup.py bdist_wheel --universal
   ```

4. Upload the new version to [PyPi](http://pypi.org). \(You'll be prompted to enter your username/password\):

   ```bash
    $ twine upload dist/*
   ```

