def nb_year(p0, percent, aug, p):
    n = 0
    # your code
    while( p0 <p):
        n+=1
        p0 = p0 +p0 *percent/100 + aug
        
        if p0 >= p:
           return n
    