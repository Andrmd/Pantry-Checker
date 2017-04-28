var request = require('request');

var options = {
        url: 'https://hooks.slack.com/services/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',
        form: 'payload={"text": "hogehogeegege"}',
        json :true
};


request.post(options, function(error, response, body){
  if (!error && response.statusCode == 200) {
    console.log(body.name);
  } else {
    console.log('error: '+ response.statusCode + body);
  }
});