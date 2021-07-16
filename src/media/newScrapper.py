from selenium import webdriver
from time import sleep
import urllib.request
import os


print("getcwd",os.getcwd())
os.chdir("D:\\najam data\Django\Airbook\Big_project\media\pictures")
print("changed",os.getcwd())

# exit()

driver = webdriver.Chrome(executable_path="C:\chromedriver.exe")

driver.get("https://www.amazon.com/s?rh=n%3A21102321011&fs=true&ref=lp_21102321011_sar")

sleep(3)


images = driver.find_elements_by_class_name("s-image")
names = driver.find_elements_by_class_name("a-size-medium.a-color-base.a-text-normal")

print(len(images))
print(len(names))
for name,image in zip(names,images):
    if ':' in name.text:
        print("in if")
        print(name.text.replace(':',''))
        urllib.request.urlretrieve(image.get_attribute('src'), f"{name.text.replace(':','')}.jpg")
    else:
        
        urllib.request.urlretrieve(image.get_attribute('src'), f"{name.text}.jpg")
        print(image.get_attribute('src'))


driver.close()