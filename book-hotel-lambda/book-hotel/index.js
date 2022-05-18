const fetch = require("node-fetch");

exports.handler = async (evt) => {
   // fetch the request
   let response = await fetch("https://v8x4dtv1mf.execute-api.us-east-1.amazonaws.com/Prod/hotel", {
      method: 'POST',
      body: JSON.stringify(evt)
   })
   
   // get the JSON
   let json = await response.json()
   return json;
}