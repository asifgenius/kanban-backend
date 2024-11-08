## Features
- Upload multiple files
- Get the attachment file count for each task

##  Tech
 - Node JS
 - MongoDB

## Demo
Live link - https://asif-kanban.onrender.com


![kanban](https://raw.githubusercontent.com/asifgenius/kanban-frontend/refs/heads/main/docs/assets/kanban.gif)
 
 
## Installation

First create .env accroding to .env.example. Make sure you have added mongo db url and  server port.

#### Node Server

```sh
$ npm install
```

Run the server project
```sh
$ npm run dev
```

Verify the deployment to you server address in your browser
```sh
$ 127.0.0.1:5000
```

Build the server project
```sh
$ npm run build
```

Start the server project for production
```sh
$ npm start
```
Verify the deployment to you server address in your browser
```sh
$ 127.0.0.1:5000
```

## Endpoints
```sh
POST api/attachments
GET  api/task/attachments
```
## Status Code
| Status Code                   | Description                        
|-------------------------------|--------------------------
| 200                           | OK    
| 201                           | CREATE 
| 400                           | BAD REQUEST
| 404                           | NOT FOUND  
| 500                           | INTERNAL SERVER ERROR
