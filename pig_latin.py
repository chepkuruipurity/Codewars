def pig_it(text):
    #your code here
    sen= text.split()
    return ' '.join(word[1:]+ word[0]+ 'ay' if word.isalpha() else word for word in sen)