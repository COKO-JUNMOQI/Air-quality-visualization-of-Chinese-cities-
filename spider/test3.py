import csv

# 读取csv至字典
csvFile = open("database/xian.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
# 建立空字典

air=[]
sum1=0
sum2=0
sum3=0
sum4=0
sum5=0
sum6=0
n=0
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    sum1+=int(item[4])
    sum2+=int(item[5])
    sum3+=int(item[6])
    sum4+=int(item[7])
    sum5+=float(item[8])
    sum6+=int(item[9])
    n=n+1
    

air.append(int(sum1/(n-1)))
air.append(int(sum2/(n-1)))
air.append(int(sum3/(n-1)))
air.append(int(sum4/(n-1)))
air.append(float(sum5/(n-1)))
air.append(int(sum6/(n-1)))


csvFile.close()
print(air)