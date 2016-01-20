var UI = require('ui');
var ajax = require('ajax');
var d = new Date();
var n = d.getTime();
var api_key = "myapikey";
// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Linode Servers',
  subtitle:'Fetching...'
});
 
// Display the Card
card.show();
 
// Construct URL
var URL = "https://api.linode.com/?api_key=" + api_key + "&api_action=linode.list";
ajax(
  {
    url: URL,
    method: 'get',
    type: 'json',
    crossDomain: true
  },
  function(data) {
    // Success!
    console.log("Successfull maybe!");
    card.body(data.DATA[0].LINODEID);
  },
  function(error) {
    console.log(n);
    console.log('Failed to Auth: ', error);
    if(error.unauthorized){
    console.log(error.unauthorized.message);
    console.log(error.unauthorized.code);
    }
    console.log(error);
    console.log(JSON.stringify(error));
    console.log(n);
  }
);
