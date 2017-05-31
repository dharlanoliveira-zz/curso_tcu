//npm install express --save

import {Request, Response} from "express";
import * as _ from 'lodash';

let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let hateoasLinker = require('express-hateoas-links')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(hateoasLinker);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    next();
});

let tasks: string[] = [];


app.get('/', (req,res) => {
    res.json({},[
        { rel: "self", method: "GET", href: 'http://localhost:3000/all-tasks' },
        { rel: "new-task", method: "POST", title: 'Criar nova tarefa', href: 'http://localhost:3000/new-task' },
        { rel: "delete-task", method: "POST", title: 'Detalhar tarefa', href: 'http://localhost:3000/delete-task' },
        { rel: "delete-all-tasks", method: "POST", title: 'Detalhar tarefa', href: 'http://localhost:3000/delete-all-tasks' }
    ]);
});

app.get('/all-tasks', (req,res) => {
    let tasksSchema = {
        tasks: tasks
    };
    res.json(tasksSchema,[
        { rel: "self", method: "GET", href: 'http://localhost:3000/all-tasks' }
    ]);
});

app.post('/new-task', (req, res) => {
    if (req.body.task) {
        var task = req.body.task;
        tasks.push(task);
        res.json({},[
            { rel: "self", method: "POST", href: 'http://localhost:3000/tasks' },
            { rel: "all-tasks", method: "GET", title: 'Lista de tarefas', href: 'http://localhost:3000/all-tasks' }
        ]);
    } else {
        res.sendStatus(400);
        res.send('Formato inváildo')
    }
});

app.post('/delete-task', (req, res) => {
    if (req.body.task) {
        var task = req.body.task;
        var index = _.findIndex(tasks, function(t) { return t == task; });
        if(index < 0){
            res.status(400).send('Tarefa não existe');
        }
        delete task[index];
        tasks = _.compact(tasks);
        res
            .status(201)
            .json({},[
            { rel: "self", method: "POST", href: 'http://localhost:3000/tasks' },
            { rel: "all-tasks", method: "GET", title: 'Lista de tarefas', href: 'http://localhost:3000/all-tasks' }
        ]);
    } else {
        res.status(400).send('Tarefa não foi informada');
    }
});

app.delete('/delete-all-tasks', (req, res) => {
    tasks = []
    res.json({},[
        { rel: "self", method: "POST", href: 'http://localhost:3000/tasks' }
    ]);
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Tasklist executando na porta 3000!');
});
