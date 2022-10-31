var express = require("express");
const bodyParser = require("body-parser");
const connection = require("./config");
const { connect } = require("./config");
var app = express();

app.use(bodyParser.json());
const port =7000;

//   --User--

app.post("/adduser",function(req,res){
    let userData = req.body;
    let sqlQuery = "INSERT INTO user SET ?"
    connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    })
});




app.get("/viewuser",function(req,res){
    let sqlQuery = "SELECT * FROM user";
    connection.query(sqlQuery, function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })
    
});



app.patch("/updateuser/:user_id", function(req,res){
    let userData = [req.body.Full_Name,req.body.Email,req.body.gender,req.body.password,req.body.mobile,req.body.Address,req.body.status,req.body.Registration_date,req.body.last_update,req.params.user_id];
    let sqlQuery = "UPDATE user SET Full_Name=?, Email=?, gender=?, password=?, mobile=?, Address=?, status=?, Registration_date=?, last_update=? WHERE user_id = ?";

    connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })

});


app.delete("/deleteuser/:user_id",function(req,res){
    let userid = req.params.user_id;
    let sqlQuery = "DELETE FROM user WHERE user_id=?";

    connection.query(sqlQuery, userid,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })
   
});


//  --Role--


app.post("/addrole",function(req,res){
    let userData = req.body;
    let sqlQuery = "INSERT INTO Role SET ?"
    connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    })
});



app.get("/viewrole",function(req,res){
    let sqlQuery = "SELECT * FROM Role";
    connection.query(sqlQuery, function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })
    
});

app.patch("/updaterole/:Role_id", function(req,res){
    let userData = [req.body.Role_name,req.params.Role_id];
    let sqlQuery = "UPDATE Role SET Role_name=? WHERE Role_id = ?";

    connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })

});


app.delete("/deleterole/:Role_id",function(req,res){
    let userid = req.params.Role_id;
    let sqlQuery = "DELETE FROM Role WHERE Role_id=?";

    connection.query(sqlQuery, userid,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })
   
});

// --Role_Assign--

app.post("/addassign",function(req,res){
    let userData = req.body;
    let sqlQuery = "INSERT INTO Role_Assign SET ?"
    connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    })
});


app.get("/viewassign",function(req,res){
    let sqlQuery = "SELECT * FROM Role_Assign";
    connection.query(sqlQuery, function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })
    
});





app.patch("/updateassign/:User_id", function(req,res){
    let userData = [req.body.Role_id,req.params.user_id];
    let sqlQuery = "UPDATE Role_Assign SET Role_id=? WHERE user_id = ?";

    connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })

});





app.delete("/deleteassign/:user_id",function(req,res){
    let userid = req.params.user_id;
    let sqlQuery = "DELETE FROM role_assign WHERE user_id=?";

    connection.query(sqlQuery, userid,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })
   
});

// --user_login_history--

app.post("/addhistory",function(req,res){
    let userData = req.body;
    let sqlQuery = "INSERT INTO user_login_history SET ?"
    connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    })
});





app.get("/viewhistory",function(req,res){
    let sqlQuery = "SELECT * FROM user_login_history";
    connection.query(sqlQuery, function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })
    
});




app.patch("/updatehistory/:User_id", function(req,res){
    let userData = [req.body.logindatetime,req.body.logout_time ,req.params.user_id];
    let sqlQuery = "UPDATE user_login_history SET logindatetime=?,logout_time=? WHERE user_id = ?";

    connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })

});

app.delete("/deletehistory/:user_id",function(req,res){
    let userid = req.params.user_id;
    let sqlQuery = "DELETE FROM user_login_history WHERE user_id=?";

    connection.query(sqlQuery, userid,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })
   
});

// --Auction Type--


app.post("/addauction",function(req,res){
    let userData = req.body;
    let sqlQuery = "INSERT INTO Auction_type SET ?"
    connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    })
});



app.get("/viewauction",function(req,res){
    let sqlQuery = "SELECT * FROM auction_type";
    connection.query(sqlQuery, function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })
    
});

app.patch("/updateauction/:Auction_id", function(req,res){
    let userData = [req.body.Auction_type,req.body.addname ,req.params.Auction_id];
    let sqlQuery = "UPDATE auction_type SET Auction_type=?,addname=? WHERE Auction_id = ?";

    connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })

});


app.delete("/deleteauction/:Auction_id",function(req,res){
    let userid = req.params.Auction_id;
    let sqlQuery = "DELETE FROM Auction_type WHERE Auction_id=?";

    connection.query(sqlQuery, userid,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })
   
});


// --Business_name--

app.post("/addbusiness",function(req,res){
    let userData = req.body;
    let sqlQuery = "INSERT INTO business_name SET ?"
    connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    })
});


app.get("/viewbusiness",function(req,res){
    let sqlQuery = "SELECT * FROM business_name";
    connection.query(sqlQuery, function(error,result,field){
    
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
        
    })
});



app.patch("/updatebusiness/:user_id", function(req,res){
    let userData = [req.body.business_id,req.body.business_name,req.body.contact_no,req.body.Business_register_date,req.body.status,req.body.turnover,req.body.Last_update,req.body.URL,req.body.Email,req.body.GST,req.body.PAN,req.body.Address,req.body.state,req.body.city,req.params.user_id];
    let sqlQuery = "UPDATE business_name SET business_id=?,business_name=?,contact_no=?,Business_register_date=?,status=?,turnover=?,Last_update=?,URL=?,Email=?,GST=?,PAN=?,Address=?,state=?,city=? WHERE user_id = ?";

    connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }
    })

});







app.listen(port);
console.log(`Server is running on...${port}`);

