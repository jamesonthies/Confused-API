function aResponse(){
  const num = Math.floor(Math.random() * 4);
  switch(num){
    case 0:
      return('Excuse me?');
    case 1:
      return('Sorry?');
    case 2:
      return('And what does that mean?');
    case 3:
      return('pardon?');
    case 4:
      return('come again?');
    default:
      return('I did not catch that');
  }
}

module.exports = function(app) {
  app.get('/:urlParams', function(req, res) {
    console.log('nfsjdknkdsnfkjs from console')
    //res.send("url is localhost:3090/" + req.params.urlParams);
    res.send(aResponse());
  });

  app.get('/', function(req, res){
    res.send(aResponse());
  });
}
