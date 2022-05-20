# Creating a Node-based Lambda using the AWS CLI

This is a brief guide as to how to create and deploy a lambda using the AWS CLI

## Step 1: Create the execution role with trust policy

`aws iam create-role --role-name lambda-ex --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'`

## Step 2: Add permissions to the role

`aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole`

## Step 3: Create the function

`const fetch = require("node-fetch");

exports.handler = async (evt) => {
   // fetch the request
   let response = await fetch("https://v8x4dtv1mf.execute-api.us-east-1.amazonaws.com/Prod/museum", {
      method: 'POST',
      body: JSON.stringify(evt)
   })
   
   // get the JSON
   let json = await response.json()
   return json;
}`

## Step 4: Create the deployment package

`zip function.zip index.js`

`aws lambda create-function --function-name my-function \
--zip-file fileb://function.zip --handler index.handler --runtime nodejs12.x \
--role arn:aws:iam::123456789012:role/lambda-ex`

## Step 5: Invoke the function

`aws lambda invoke --function-name my-function out --log-type Tail`
