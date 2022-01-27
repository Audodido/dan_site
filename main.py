#https://dev.to/lordghostx/how-to-host-flask-applications-on-namecheap-cpanel-299b
from flask import Flask, session, redirect, url_for, request, render_template  
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    # today = datetime.today().strftime('%Y-%m-%d')
    # day = "2022-11-03"
    day = "the s-ft"
    color = "white"
    return render_template('index.html', day = day, color=color)



if __name__ == '__main__':

    app.run(debug=True)

