def is_leap(year):
    leap = False
    if( year % 4 == 0 ):
        print('hit')
        if( not (year % 100 == 0) ):
            leap = True
        elif( year % 400 == 0):
            leap = True
        else:
            leap = False
    return leap

print(is_leap(1990))