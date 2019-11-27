from flask import Flask, redirect, url_for, request
from pymongo import MongoClient
import requests

app = Flask(__name__)

client = MongoClient() # 클래스 객체 할당 
client = MongoClient("mongodb://127.0.0.1:27017/") 

db = client["test"] # test라는 db 객체 할당 
register_collection = db["memo"] # memo라는 register_collection 객체 할당
login_collection = db["memo"] # memo라는 login_collection 객체 할당 

colla = db.register_collection 
# register_collection 객체에 colla이름 & 아이디, 비밀번호, 등..
collb = db.login_collection 
# login_collection 객체에 collb이름 & 아이디, 비밀번호 

@app.route('/')
def main():
    return 'Hello'

@app.route('/register', methods = ['POST', 'GET'])
def register():
 if request.method == 'POST': # 메소드가 post인지 확인
    user = data.get # user에 post값이 들어온다 
    db.colla.insert(user) # colla에 user값 넣기 
    print(db.colla.find())
    return 'succes'

@app.route('/login', methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        arr = data.get # arr에 post값이 들어온다 
        db.collb.remove() # coolb에 있는 값 지우기 
        db.collb.insert(arr) # coolb에 arr값 넣기 
        myquery = db.collb.find_one() # arr에 들어온 값 중 앞에 값인 아이디를 myquery에 받아오기 
        mydoc = db.colla.find(myquery) # colla에서 myquery가 저장된 값을 mydoc에 저장 
        if(mydoc == arr): # mydoc랑 arr같으면 1반환 - 로그인 성공 
            return 1
        else:
            return 0

if __name__ == '__main__':
    app.run(host='127.0.0.1', port='8000', debug=True)