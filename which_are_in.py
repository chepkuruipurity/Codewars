def in_array(array1, array2):
    # your code
    r = []
    for a1 in array1:
       for a2 in array2:
          if a1 in a2 and not a1 in r:
             r.append(a1)
    r.sort()
    return r