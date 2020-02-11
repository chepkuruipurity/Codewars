def cakes(recipe, available):
    # TODO: insert code
    result=9999
    for i in recipe:
        if i in available:
            if result > available[i] // recipe[i]:
                result=available[i] // recipe[i]
        else:
            return 0
    return result
