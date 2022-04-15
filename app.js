const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/", function(req, res){
    res.send("Hello World");
})

app.post("/bfhl", function(req, res){
    let output = {}
    const is_success = true;
    const data = req.body.data;
    var alphabets = [];
    var numeric = [];

    data.forEach((value)=> {
        if(!isNaN(value)){
            numeric.push(value)
        }
        else{
            if(value>="A" && value<="Z" || value>= "a" && value<="z"  ){
                alphabets.push(value);

            }
        }
    })
    output = {
        is_success:is_success,
        user_id:"garimamathur_05102001",
        email:"garimamathurcs19@acropolis.in",
        roll_no:"0827CsS191090",
        numbers:numeric,
        alphabets:alphabets

    };
    res.json(output);

})
app.listen(port)
