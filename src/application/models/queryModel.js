var con = require('../../config/mysql');

// Allows us to run custom MySQL Query
module.exports.customQuery = function(query,callback){
  
  con.query(query,function (err, rows) {
      //here we return the results of the query
      callback(err, rows); 
  }
  );  
 
};


