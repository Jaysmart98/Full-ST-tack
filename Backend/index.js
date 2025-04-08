const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5300;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(express.json()); // post request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Allow connection



const usStates = [
    {
        name: "California",
        rank: 1,
        population: 39538223,
        opportunities: "Tech, Entertainment, Agriculture"
    },
    {
        name: "Texas",
        rank: 2,
        population: 29145505,
        opportunities: "Energy, Technology, Agriculture"
    },
    {
        name: "Florida",
        rank: 3,
        population: 21538187,
        opportunities: "Tourism, Agriculture, Aerospace"
    },
    {
        name: "New York",
        rank: 4,
        population: 20201249,
        opportunities: "Finance, Media, Technology"
    },
    {
        name: "Pennsylvania",
        rank: 5,
        population: 13002700,
        opportunities: "Manufacturing, Agriculture, Energy"
    },
    {
        name: "Illinois",
        rank: 6,
        population: 12812508,
        opportunities: "Finance, Manufacturing, Agriculture"
    },
    {
        name: "Ohio",
        rank: 7,
        population: 11799448,
        opportunities: "Manufacturing, Agriculture, Aerospace"
    },
    {
        name: "Georgia",
        rank: 8,
        population: 10711908,
        opportunities: "Agriculture, Film, Technology"
    },
    {
        name: "North Carolina",
        rank: 9,
        population: 10439388,
        opportunities: "Technology, Finance, Agriculture"
    },
    {
        name: "Michigan",
        rank: 10,
        population: 10077331,
        opportunities: "Automotive, Manufacturing, Agriculture"
    }
];

    app.get('/test', (req, res) => {
        res.send(usStates);
    });

    app.post('/submit', (req,res) => {
        console.log(req.body);
        if (req.body) {
            res.status(201).json({message: 'Form submitted succesfully'})
        } else {
            res.status(401).json({message: 'form not submitted'})
        }
    })


app.listen(port, () => console.log(`Server started at port: ${port}`));