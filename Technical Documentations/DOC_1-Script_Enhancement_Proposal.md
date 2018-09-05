## Script Enhancement Proposal

### About

The DATS devision uses a script launcher to run most of its backend scripts. In order to be compatible with the script launcher, the a



1.1 Find all “static” objects like dictionary and pre-defined variables under  

```python
__name__ == "__main__"
```

1.2 Copy-paste them to the beginning of the code right under the module import section

1.3 Move variables that extract values from other dictionary inside the main() function

1.4 delete the `import _setpath` at the importing section

### 2. Move logger creation

Get script name and create logger is now a part of job in script launcher

Delete:

```python
script_name = os.path.basename(__file__).replace('.py', '')
logfile = f'{LOG_DIRECTORY}/{script_name}.log'
    
logger = logutil.timed_rotating_log(logfile)
logger.info('START AT {}'.format( arrow.now() ))
```

### 3. Remove the job creation

Delete 

```python
try:
    job ...
except:
    logger.error ...
```

### 4. Modify the main function 

4.1 Change the `main(job)` to `main(job, **kwargs)`  

4.2 inside the main function, redefine all needed variables using kwargs dictionary.

