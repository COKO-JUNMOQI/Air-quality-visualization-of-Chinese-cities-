import csv

# 读取csv至字典
csvFile = open("database/wuhan.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
# 建立空字典
result = {}
air=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    ins=[]
    ins.append(item[4])
    ins.append(item[6])
    air.append(ins)


csvFile.close()
print(air)