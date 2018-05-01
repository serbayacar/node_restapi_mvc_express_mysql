var dbModel= require('../models/queryModel');
var url = require('url');

module.exports.getCountries =  function(req, res) {  
     
    // where-conditions contolls in function
    whereQuery = whereBuilder(req)


    dbModel.customQuery("SELECT * FROM ulke " + whereQuery,function (err, result){ 
        if (err) throw err;                    
        res.json(result);

    });
}

module.exports.getCity =  function(req, res) {  
     
    // where-conditions contolls in function
    whereQuery = whereBuilder(req)

    //Select with customization query
    dbModel.customQuery("SELECT i.Id il_id,u.id ulke_id, i.IlAdi, u.UlkeAdi, u.tr_TR, u.en_US FROM il i " + 
                        "inner join ulke u " +
                        "WHERE u.Id=i.UlkeId " + whereQuery,function (err, result){
        if (err) throw err;                    
        res.json(result);

    });
}

// where-conditions is creating from url
function whereBuilder(req){
    var first= 0;
    var url_parts = url.parse(req.url, true);
    var variables = url_parts.query;

    var query = "";

    // Select a spesific id numbers
    if(  "id" in variables ){
        if(first=0){
            query += "WHERE Id="+ variables.id +"";
        }else{
            query += "and Id="+ variables.id +"";
        }
        
    }

    // customization with country name
    if(  "ulke" in variables ){
        if(first=0){
            query += "WHERE UlkeAdi LIKE '%"+ variables.ulke +"%'";
        }else{
            query += "and UlkeAdi LIKE '%"+ variables.ulke +"%'";
        }
        
    }

    // Limit the data
    if(  "limit" in variables ){
        query += "LIMIT " + variables.limit ;
    }

    return query;
}