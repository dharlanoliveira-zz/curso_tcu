//npm install express --save

import {Request, Response} from "express";
import * as _ from 'lodash';

let express = require('express');
var bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE");
    next();
});

let tasks: string[] = [];

app.get('/tasks', (req: Request, res: Response) => {
    res.json({
        tasks: tasks
    })
});

app.post('/tasks', (req: Request, res: Response) => {
    if (req.body.task) {
        var task = req.body.task;
        tasks.push(task);
        res.sendStatus(201);
    } else {
        res.sendStatus(400);
        res.send('Formato inváildo')
    }
});

app.delete('/tasks/:id', (req: Request, res: Response) => {
    if (req.params.id) {
        var id = req.params.id;
        if (id >= tasks.length) {
            res.sendStatus(400);
            res.send('Identificador não existe')
        }
        delete tasks[id];
        tasks = _.compact(tasks);
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
        res.send('Identificador não informado')
    }
});

app.delete('/tasks', (req: Request, res: Response) => {
    tasks = []
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Tasklist executando na porta 3000!');
});
