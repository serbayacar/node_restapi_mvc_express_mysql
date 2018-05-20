var dbModel= require('../models/queryModel');
var url = require('url');

module.exports.getCountries =  function(req, res) {  
     
    // where-conditions contolls in function
    whereQuery = whereBuilder(req)


    dbModel.customQuery("SELECT * FROM country " + whereQuery,function (err, result){ 
        if (err) throw err;                    
        res.json(result);

    });
}

module.exports.getCity =  function(req, res) {  
     
    // where-conditions contolls in function
    whereQuery = whereBuilder(req)

    //Select with customization query
    dbModel.customQuery("SELECT c.Id city_id,u.id country_id, c.cityName, u.countryName, u.tr_TR, u.en_US FROM cities c " + 
                        "inner join country u " +
                        "WHERE u.Id=c.countryId " + whereQuery,function (err, result){
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
    if(  "country" in variables ){
        if(first=0){
            query += "WHERE countryName LIKE '%"+ variables.country +"%'";
        }else{
            query += "and countryName LIKE '%"+ variables.country +"%'";
        }
        
    }

    // Limit the data
    if(  "limit" in variables ){
        query += "LIMIT " + variables.limit ;
    }

    return query;
}