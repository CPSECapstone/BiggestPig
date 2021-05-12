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

   form["Title"] = "78b83774d3a907fbea42783d58a95204"
   form["component"] = "form"
   form["columns"] = [column0, column1]
   return jsonify(
                  Vendorid = "SnakeSnakeImASnake",
                  VendorAuth="6fa691d2c07bea6ae78b7022c80e9d20",
                  components=[
                     form
                  ])


def interceptmessage(message):
   if message == {"VendorAuth":"92jdncTest23904Passed329jc","Vendorid":"OOHLookATestAndItPassed","components":[{"Title":"PassingTest","columns":[{"children":[{"component":"textFormField","label":"Full Name","required":"true","validation":"[a-fA-F0-9]"},
   {"component":"textFormField","label":"Address","required":"true","validation":"[a-fA-F0-9]"}]},{"children":[{"component":"textFormField","label":"Phone Number","required":"true","validation":"[a-fA-F0-9]"},
   {"action":"Submit","component":"button"}]}],"component":"form"}]}:
      logging.info('just testing and pasted')
      return message
   else: 
      logging.info('just testing and FAILED')
      return 'test failed'


@app.route('/test')
def test_app():
   logging.info('just testing')
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

   column1["children"] = [c1Child0, c1Child1]

   form["Title"] = "PassingTest"
   form["component"] = "form"
   form["columns"] = [column0, column1]
   message= jsonify(
                  Vendorid = "OOHLookATestAndItPassed",
                  VendorAuth="92jdncTest23904Passed329jc",
                  components=[
                     form
                  ])
   interceptmessage(message)
   return message



if __name__ == '__main__':
   app.run(port=5001)
