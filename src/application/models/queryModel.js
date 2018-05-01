var con = require('../../config/mysql');

// Allows us to run custom MySQL Query
module.exports.customQuery = function(query,callback){
  
  con.query(query,function (err, rows) {
      //here we return the results of the query
      callback(err, rows); 
  }
  );  
 
};

// Allows us to run insert MySQL Query with json data
module.exports.insertQuery = function(table,data){

  var query = con.query('INSERT INTO '+ table + ' SET ?', data, function(err, result) {
    if (err) throw err;
    console.log(query.sql); 
  });
  
};

// Allows us to run update MySQL Query with json data
module.exports.updateQuery = function(table,id,data){

  var query = con.query("UPDATE "+ table +" SET ? WHERE users_id =" +id , data, function(err, result) {
    if (err) throw err;
    console.log(query.sql); 
  });

};
