//load the patients.csv file
var fs = require('fs');
var parse = require('csv-parse');

//create the parser
var parser = parse({delimiter: ','}, function(err, data){
  async.eachSeries(data, function(line, callback){
    //do something with the line
    createPatient(line, callback);
  });
});

function createPatient(line,callback){

}