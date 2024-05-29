import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3001;
const api='pa8pCWaeUPm9y5wpEj64zpZMJmhD6YNfak84UfCa'
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/city",async(req,res)=>{
    const city=req.body.cities;
    console.log(city);
    try{
        const response=await axios.get(`https://api.api-ninjas.com/v1/airquality?city=${city}`,{
            headers:{'X-Api-Key':api},
        });
        const result=response.data;
        console.log(result);
        res.render("info.ejs",{content:result ,headings :city})
    }
    catch(error){
        console.log(error);
    }
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
