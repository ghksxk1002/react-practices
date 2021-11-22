import http from 'http';
import * as path from 'path';
import express from 'express';

const port = 8080;

// Application Setup
const application = express().use(express.static(path.join(path.resolve('.'), 'public')));

// httpModel
http.createServer(application)
    .on('listening', function(){
        console.log(`http server runs on ${port}`)
    })
    .listen(port) 