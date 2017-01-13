//npm install express --save

import {Request, Response} from "express";

let express = require('express');
var bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let tasks: string[] = [];

app.get('/tasks', (req: Request, res: Response) => {
    res.json({
        tasks: tasks
    })
});

app.post('/tasks', (req: Request, res: Response) => {
    if(req.body.task){
        var task = req.body.task;
        tasks.push(task);
        res.sendStatus(201);
    } else{
        res.sendStatus(400);
        res.send('Formato inváildo')
    }
});

app.listen(3000, () => {
    console.log('Tasklist executando na porta 3000!');
});
