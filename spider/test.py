import csv

# 读取csv至字典
csvFile = open("database/hangzhou.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
# 建立空字典
result = {}
hz={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
hz['pm25']=pm25
hz['grade']=grade
hz['aqi']=aqi
result['hz']=hz
csvFile.close()

csvFile = open("database/beijing.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
bj={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
bj['pm25']=pm25
bj['grade']=grade
bj['aqi']=aqi
result['bj']=bj
csvFile.close()

csvFile = open("database/chongqing.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
cq={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
cq['pm25']=pm25
cq['grade']=grade
cq['aqi']=aqi
result['cq']=cq
csvFile.close()

csvFile = open("database/guangzhou.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
gz={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
gz['pm25']=pm25
gz['grade']=grade
gz['aqi']=aqi
result['gz']=gz
csvFile.close()

csvFile = open("database/huhehaote.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
hhht={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
hhht['pm25']=pm25
hhht['grade']=grade
hhht['aqi']=aqi
result['hhht']=hhht
csvFile.close()

csvFile = open("database/lanzhou.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
lz={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
lz['pm25']=pm25
lz['grade']=grade
lz['aqi']=aqi
result['lz']=lz
csvFile.close()

csvFile = open("database/nanjing.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
nj={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
nj['pm25']=pm25
nj['grade']=grade
nj['aqi']=aqi
result['nj']=nj
csvFile.close()

csvFile = open("database/shanghai.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
sh={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
sh['pm25']=pm25
sh['grade']=grade
sh['aqi']=aqi
result['sh']=sh
csvFile.close()

csvFile = open("database/shenzhen.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
sz={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
sz['pm25']=pm25
sz['grade']=grade
sz['aqi']=aqi
result['sz']=sz
csvFile.close()

csvFile = open("database/shijiazhuang.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
sjz={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
sjz['pm25']=pm25
sjz['grade']=grade
sjz['aqi']=aqi
result['sjz']=sjz
csvFile.close()

csvFile = open("database/tianjin.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
tj={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
tj['pm25']=pm25
tj['grade']=grade
tj['aqi']=aqi
result['tj']=tj
csvFile.close()

csvFile = open("database/wuhan.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
wh={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
wh['pm25']=pm25
wh['grade']=grade
wh['aqi']=aqi
result['wh']=wh
csvFile.close()

csvFile = open("database/xian.csv", "r",encoding='utf-8')
reader = csv.reader(csvFile)
xa={}
pm25=[]
grade=[]
aqi=[]
for item in reader:
        # 忽略第一行
    if reader.line_num == 1:
        continue
    pm25.append(item[4])
    grade.append(item[1])
    aqi.append(item[2])
xa['pm25']=pm25
xa['grade']=grade
xa['aqi']=aqi
result['xa']=xa
csvFile.close()

print(result)
