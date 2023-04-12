from email import header
from urllib import request
from bs4 import BeautifulSoup
import sqlite3

url="http://www.air-level.com/rank"
header={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36"}
req=request.Request(url,headers=header)
res=request.urlopen(req)
html=res.read()
html=html.decode("utf-8")
soup = BeautifulSoup(html, 'html.parser')
soup1=soup.find('div', attrs='text-center')
content=[]
ranking=[]
city=[]
AQI=[]
pollution=[]
alldata=[]
for i in soup1.find_all('td'):
    content.append(i.text)
j=0
while j < len(content):
    alldata.append((content[j],content[j+1],content[j+2],content[j+3]))
    j+=4
#print(alldata)


data='database/AirRank.db'# 建立数据库
con=sqlite3.connect(data)#连接到date数据库
cur= con.cursor()  # 游标对象
cur.execute('create table IF NOT exists AirRanking(ranking int primary key,city varchar(255),AQI varchar(255),pollution varchar(255))')  # 创建表
cur.executemany('replace into AirRanking values(?,?,?,?)',alldata)#保存到数据库



con.commit()  # 提交
cur.close()    #关闭
con.close()  # 关闭

