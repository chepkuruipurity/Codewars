def disemvowel(string):
    novowel= str.maketrans(dict.fromkeys('aeiouAEIOU'))
    string= string.translate(novowel)
    return string
    