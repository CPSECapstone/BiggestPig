import logging, json
from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/hello/<name>')
def hello(name):
   return jsonify(message='Hello %s!' % name)

@app.route('/')
def hello_world():
   logging.info('hello')
   form = dict()

   column0 = dict()
   c0Child0 = dict()
   c0Child1 = dict()
   c0Child0['component'] = "textFormField"
   c0Child0['label'] = "Full Name"
   c0Child0['required'] = "true"
   c0Child0['validation'] = "[a-fA-F0-9]"

   c0Child1['component'] = "textFormField"
   c0Child1['label'] = "Address"
   c0Child1['required'] = "true"
   c0Child1['validation'] = "[a-fA-F0-9]"

   column0["children"] = [c0Child0, c0Child1]


   column1 = dict()
   c1Child0 = dict()
   c1Child1 = dict()
   c1Child0['component'] = "textFormField"
   c1Child0['label'] = "Phone Number"
   c1Child0['required'] = "true"
   c1Child0['validation'] = "[a-fA-F0-9]"

   c1Child1['component'] = "button"
   c1Child1['action'] = "Submit"
   c1Child1['target'] = "78b83774d3a907fbea42783d58a95204"

   column1["children"] = [c1Child0, c1Child1]

   form["formID"] = "78b83774d3a907fbea42783d58a95204"
   form["component"] = "form"
   form["columns"] = [column0, column1]
   return jsonify(authorization="6fa691d2c07bea6ae78b7022c80e9d20",
                  target="42aefbae01d2dfd981f7da7d823d689e",
                  components=[
                     form
                  ])



if __name__ == '__main__':
   app.run()