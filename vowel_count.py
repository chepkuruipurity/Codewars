def getCount(inputStr):
    num_vowels = 0
    # your code here
    input= inputStr.lower()
    for i in input:
        if i in 'aeiou':
          num_vowels += 1
    
    return num_vowels