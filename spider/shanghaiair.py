

#可以利用webdriver 打开一个浏览器
import imp
from selenium import webdriver
import datetime
import csv

#使时间中止至指定时间
import time

def search(url):
    #利用get()方法获取网页信息并返回
    return driver.get(url)

def parse_one_page(page):
    #查找出网页中全部的tr标签并赋给 tr_list
    tr_list = driver.find_elements_by_tag_name('tr')
    return tr_list

def main():
    city = 'shanghai'  #获取上海市上个月的数据
    year = int(datetime.datetime.now().strftime('%Y'))
    month = int(datetime.datetime.now().strftime('%m'))-1
    now_year = int(datetime.datetime.now().strftime('%Y'))
    nowtime = int(datetime.datetime.now().strftime('%m'))-1
    print('请耐心等待：')
    print('正在抓取' + city + '市'  + '空气质量每日历史数据：')

    #创建一个csv文件
    file_name = '../Myproject/database/'+city + '.csv'
    f = open(file_name,'w',encoding='utf-8',newline="")
    #写入表头
    csv_writer = csv.writer(f)
    csv_writer.writerow(['date','grade','AQI','AQI_ranking','PM25','PM10','SO2','CO','NO2','O3'])
    
    #定义全局变量driver
    global driver
    #打开Chrome浏览器
    driver = webdriver.Chrome()
    #爬取所需数据
    #天气后报空气质量历史数据
    for i in range(1,80):
        if month < 10:
            url = 'http://www.tianqihoubao.com/aqi/{}-{}0{}.html'.format(city,year,month)
            month = month + 1
            page = search(url)
            time.sleep(1)
            tr_list = parse_one_page(page)
            #截止至当前月
            if month <= nowtime + 1:
                for i in range(1, len(tr_list)):
                    #找出tr_list 中的全部td 标签
                    td_list = tr_list[i].find_elements_by_tag_name('td')
                    date = td_list[0].text
                    grade = td_list[1].text
                    AQI = td_list[2].text
                    AQI_ranking = td_list[3].text
                    PM2 = td_list[4].text
                    PM10 =  td_list[5].text
                    SO2 = td_list[6].text
                    CO = td_list[7].text
                    NO2 = td_list[8].text
                    O3 = td_list[9].text
                    #将所得的数据写入上面建立的csv文件
                    csv_writer.writerow([date,grade,AQI,AQI_ranking,PM2,PM10,SO2,CO,NO2,O3])
            else:
                break
        elif month < 13:
            url = 'http://www.tianqihoubao.com/aqi/{}-{}{}.html'.format(city,year,month)
            month = month + 1
            if month > 12:
                year = year + 1
                month = 1
            page = search(url)
            time.sleep(1)
            tr_list = parse_one_page(page)
            #截止至当前月
            if month < 13:
                for i in range(1, len(tr_list)):
                    #找出tr_list 中的全部td 标签
                    td_list = tr_list[i].find_elements_by_tag_name('td')
                    date = td_list[0].text
                    grade = td_list[1].text
                    AQI = td_list[2].text
                    AQI_ranking = td_list[3].text
                    PM2 = td_list[4].text
                    PM10 =  td_list[5].text
                    SO2 = td_list[6].text
                    CO = td_list[7].text
                    NO2 = td_list[8].text
                    O3 = td_list[9].text
                    #将所得的数据写入上面建立的csv文件
                    csv_writer.writerow([date,grade,AQI,AQI_ranking,PM2,PM10,SO2,CO,NO2,O3])
            if year > now_year:
                break
    f.close()
    print('抓取完毕')

if __name__ =='__main__':
    main()
