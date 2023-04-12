from pickle import NONE
from unittest import result
from flask import Flask, jsonify,render_template,request
import sqlite3
import os,time
from pyecharts import options as opts
from pyecharts.charts import Bar
import json
from threading import Timer
import csv
from bs4 import BeautifulSoup
from email import header
from urllib import request
import wordcloud




app = Flask(__name__)


@app.route("/")
def homepage():
    return render_template('head.html')

@app.route("/index")
def jumpweb1():
    return render_template('index.html')

@app.route("/search")
def jumpweb2():
    return render_template('search.html')

@app.route("/advise")
def jumpweb3():
    return render_template('advise.html')

@app.route("/knowledge")
def jumpweb4():
    return render_template('knowledge.html')

@app.route("/province")
def jumpweb5():
    return render_template('province.html')

@app.route("/province-1")
def jumpweb6():
    return render_template('province-1.html')

@app.route("/province-2")
def jumpweb7():
    return render_template('province-2.html')

@app.route("/province-3")
def jumpweb8():
    return render_template('province-3.html')

@app.route("/leftupchart",methods= ['GET','POST'])
def leftup():
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
    j=0
    data_all1=[]
    while j < 6:
        data_all1.append(alldata[j][1])
        j+=1
    t={} 
    t['city']=data_all1
    j=0
    data_all2=[]
    while j < 6:
        data_all2.append(alldata[j][2])
        j+=1
    t['aqi']=data_all2

    return t

@app.route("/mid",methods= ['GET','POST'])
def hzcitydata():
    # 读取csv至字典
    csvFile = open("database/hangzhou.csv", "r",encoding='utf-8')
    reader = csv.reader(csvFile)
    # 建立空字典
    result = {}
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
    result['pm25']=pm25
    result['grade']=grade
    result['aqi']=aqi
    result['优']=[0]
    result['良']=[0]
    result['轻度污染']=[0]
    result['中度污染']=[0]
    result['重度污染']=[0]
    result['严重污染']=[0]
    for i in result['grade']:
        result[i][0]+=1
    csvFile.close()

    return result

@app.route("/rightupchart",methods= ['GET','POST'])
def nowaqi():
    url="http://www.86pm25.com/city/hangzhou.html"
    header={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36"}
    req=request.Request(url,headers=header)
    res=request.urlopen(req)
    html=res.read()
    html=html.decode("utf-8","ignore")
    soup = BeautifulSoup(html, 'html.parser')
    soup1=soup.find('div', attrs='weilai')
    content=[]
    for i in soup1.find_all('td'):
        content.append(i.text)
    result={}
    sumaqi=0
    n=12
    for i in range(0,12):
        if content[i*5+1]=='—':
            n=n-1
        else:
            sumaqi=sumaqi+int(content[i*5+1])
    result['data']=int(sumaqi/n)

    return result

#生成词云
def outputwordcloud():
    c=wordcloud.WordCloud(background_color=None,font_path='msyh.ttc',width=476,height=380,mode="RGBA")#1.配置对象参数

    wenzi = "空气污染 空气污染红色预警 成都空气污染 空气污染指数 空气污染能导致肥胖 空气污染对人体造成的影响有多大 空气污染气象条件预报 全球每年700万人因空气污染过早死亡 上海空气污染指数"
    c.generate(wenzi) #2.加载词云文本
    c.to_file("static/images/pywordcloud.png")#3.输出词云文件

outputwordcloud()


@app.route("/paihang",methods= ['GET','POST'])
def paihangbang():
    url="http://www.air-level.com/rank"
    header={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36"}
    req=request.Request(url,headers=header)
    res=request.urlopen(req)
    html=res.read()
    html=html.decode("utf-8")
    soup = BeautifulSoup(html, 'html.parser')
    soup1=soup.find_all('div', attrs='text-center')[1]
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
    j=0
    data_all1=[]
    while j < 20:
        data_all1.append(alldata[j][1])
        j+=1
    t={} 
    t['city']=data_all1
    j=0
    data_all2=[]
    while j < 20:
        data_all2.append(alldata[j][2])
        j+=1
    t['aqi']=data_all2

    return t

@app.route("/paihang2",methods= ['GET','POST'])
def paihangbang2():
    url="http://www.air-level.com/rank"
    header={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36"}
    req=request.Request(url,headers=header)
    res=request.urlopen(req)
    html=res.read()
    html=html.decode("utf-8")
    soup = BeautifulSoup(html, 'html.parser')
    soup1=soup.find_all('div', attrs='text-center')[1]
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
    j=0
    data_all1=[]
    while j < 9:
        data_all1.append(alldata[j][1])
        j+=1
    t={} 
    t['city']=data_all1
    j=0
    data_all2=[]
    while j < 9:
        data_all2.append(alldata[j][2])
        j+=1
    t['aqi']=data_all2



    return t


@app.route("/update",methods= ['GET','POST'])
def update():
    url="http://www.air-level.com"
    header={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36"}
    req=request.Request(url,headers=header)
    res=request.urlopen(req)
    html=res.read()
    html=html.decode("utf-8")
    soup = BeautifulSoup(html, 'html.parser')
    soup1=soup.find('img', attrs='img-thumbnail')["src"]
    soup2=soup.find('h4').text
    result={}
    result['src']=soup1
    result['update']=soup2
    return result




if __name__ == '__main__':
    app.debug = False
    app.run()
