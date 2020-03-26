let fs=require('fs');
let path=require('path')
let express=require('express');
let bodyparser=require('body-parser');
let app=express();
app.use('/public',express.static(__dirname));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});
app.use(bodyparser());
app.post('/',(req,res)=>{
    
    fs.writeFile("cv.docx",`


    name: ${req.body.name}

   address: ${req.body.address}
   
   phoneno: ${req.body.phoneno}

   email: ${req.body.email}
   
   EDUCATION qualification:
   
   =====================================================================
  | sl.no |    institution       | percentage       |   year of passing |
  |=====================================================================|
  |  1.   | ${req.body.school}   | ${req.body.per1} | ${req.body.year1} |      
  |       |                      |                  |                   |
  |  2.   | ${req.body.pu}       | ${req.body.per2} | ${req.body.year2} |
  |       |                      |                  |                   |
  |  3.   | ${req.body.college}  | ${req.body.per3} | ${req.body.year3} |
  |_______|______________________|__________________|___________________|
  
    
  work Experience: ${req.body.wE}

  Father name:${req.body.fathername}

  Permanent address:${req.body.Padd}

  declaration:${req.body.declare}
  
  
                                          
  


                                                                  sign here 
    `,(err)=>{
        if(err){
            res.send("error occured");
            console.log(err);
        }
        else{
            res.send("file created");
        }
    });
});

app.listen(3000);