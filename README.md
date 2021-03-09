#  CloudHaven
## TEAM Biggest Pig
- Sarah Samora
- Grant Matejka
- Evan Rozhon
- Justin Evans
- Kaitlin Clever

## Focus

We focused in on a particular field for our project.

This field was Vendor Apps, and what this means is that we wanted to experiement with how CloudHaven and vendor apps would communicate and behave together.


## Stack

CloudHaven utilizes React, Node, Express and Heroku hosted PostGres database.

## Structure

All client code is in the upper most directory and server side code is in the 'api/' folder.

Vendor apps are in the subdirectory called `apps`.

## Dependencies

All CloudHaven requires is the most up to date version of Node and all other dependencies can be installed simply with `npm install`
Database connection requires valid credentials in a .env file

## Relevant Links

### Deployment Location
https://cloud-haven.herokuapp.com

### CI/CD
https://travis-ci.org/github/CPSECapstone/BiggestPig

## Available Scripts

To aid in the development process here are some provided scripts:
(`yarn` can be replaced with `npm run`)

### `yarn dev`

This will build and run both server and client side and open to 'http://localhost:3000/' with a proxy to port 5000

### `yarn update`

Runs 'npm install' for both server and client side code

### `yarn lint`

Runs our ESLint style checker over all .js files with the --fix tag to automatically fix any simple issues (usually whitespace)

### `yarn test`

Launches the test runner in the interactive watch mode for client code.

## Sample Node App 

In a bash system should be able to just run script in top level folder called `run`.
This will run both cloudhaven and vendor app in parallel and allow them to communicate with each other based on set up ports.

## Sample Java Vendor App
In `apps/javaVendor` there is an example vendor app. It runs on `http://127.0.0.1:4040/` and by default it broadcasts to the local network. Sending a get request to `http://127.0.0.1:4040/` will result in receiving a response indicating how to get customized sample json.
 
This app relies on libraries with the following Maven coordinates.
- `com.github.javafaker:javafaker:1.02`
- `javax.json:javax.json-api:1.1.4`
- `org.glassfish:javax.json:1.0.2`

## Sample Python Vendor App
In `apps/pythonVendor` there is an example vendor app. It runs on `http://127.0.0.1:5001/` and by default it broadcasts to the local network. Sending a get request to `http://127.0.0.1:5000/`will result in receiving the following default response: 
```
{
  "authorization": "6fa691d2c07bea6ae78b7022c80e9d20",
  "components": [
    {
      "columns": [
        {
          "children": [
            {
              "component": "textFormField",
              "label": "Full Name",
              "required": "true",
              "validation": "[a-fA-F0-9]"
            },
            {
              "component": "textFormField",
              "label": "Address",
              "required": "true",
              "validation": "[a-fA-F0-9]"
            }
          ]
        },
        {
          "children": [
            {
              "component": "textFormField",
              "label": "Phone Number",
              "required": "true",
              "validation": "[a-fA-F0-9]"
            },
            {
              "action": "Submit",
              "component": "button",
              "target": "78b83774d3a907fbea42783d58a95204"
            }
          ]
        }
      ],
      "component": "form",
      "formID": "78b83774d3a907fbea42783d58a95204"
    }
  ],
  "target": "42aefbae01d2dfd981f7da7d823d689e"
}
```
There is also a second supported operation of sending a GET request to `http://127.0.0.1:5001/hello/<name>` to which the endpoint will respond with a custom hello message. This is an example sent to `http://127.0.0.1:5001/hello/World`:
```
{
  "message": "Hello World!"
}
```
### Installing Vendor Requirements
1. Navigate to the apps directory using: `cd BiggestPig/apps/pythonVendor` 
2. Install the requirements using pip:  `pip install -r requirements.txt`

### Running Default Vendor App
1. Navigate to the pythonVendor directory using: `cd BiggestPig/apps/pythonVendor` 
2. Run the app with: `python dummy.py`

