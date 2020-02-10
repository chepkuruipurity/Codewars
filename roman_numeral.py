def solution(roman):
    dict= { 'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000 }
    int = 0
    for i in range(len(roman)):
          if i > 0 and dict[roman[i]] > dict[roman[i-1]]:
            int += dict[roman[i]] - 2*dict[roman[i-1]]
          else:
            int += dict[roman[i]]
    return int