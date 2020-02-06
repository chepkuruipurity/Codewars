def namelist(names):
    #your code here
    name = [name['name'] for name in names]
    return ' & '.join(', '.join(name).rsplit(', ', 1))