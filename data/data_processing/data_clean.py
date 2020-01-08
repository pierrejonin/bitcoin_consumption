import sys
import pandas as pd
import numpy as np
import csv
 
if __name__ == "__main__":
    data = pd.read_csv("bitcoin_electric.csv", sep='\s+')
    data16 = data[data['Timestamp']>=1451606400].to_numpy()
    print(data16)
    currmonth = 0
    curryear = 16
    data_month = []
    max_m = 0
    min_m = 0
    guess_m = 0
    length = 0
    for i in range(0,data16.shape[0]):
        newmonth = int(data16[i][1][5:7])
        curryear = int(data16[i][1][0:4])
        length += 1
        max_m += float(data16[i][2])
        min_m += float(data16[i][3])
        guess_m += float(data16[i][4])
        if newmonth != currmonth:
            max_m /= float(length)
            min_m /= float(length)
            guess_m /= float(length)
            currmonth = newmonth
            if currmonth < 10:
                periode = '0' + str(currmonth) + '/' + str(curryear)
            else:
                periode = str(currmonth) + '/' + str(curryear)
            newmonth = [periode,guess_m,max_m,min_m]
            data_month.append(newmonth)
    print(data_month)
    import csv
    with open("consumption_bitcoin_monthly.csv", "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(['Periode','Estimation','Borne_sup','Borne_inf'])
        writer.writerows(data_month)

