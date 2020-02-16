def find_even_index(arr):
    #your code here
    for i in range(len(arr)):
      left,right = arr[0:i],arr[i+1:]
      if sum(left)==sum(right):
        return i
    return -1