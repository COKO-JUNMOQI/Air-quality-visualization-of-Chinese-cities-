from email import header
from unittest import result
from urllib import request
from bs4 import BeautifulSoup
import sqlite3

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
print(result)