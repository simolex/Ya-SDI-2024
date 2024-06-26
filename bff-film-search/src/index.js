import { createServer } from "node:http";
import process from "node:process";
import { parse } from "node:url";

import { StringDecoder } from "node:string_decoder";
import { resolve } from "node:path";
import fs from "node:fs";
// import path from "node:path";

const envPort = process.env.PORT ? process.env.PORT : 3000;
const envBackupPath = process.env.BACKUP_FILE_PATH
    ? process.env.BACKUP_FILE_PATH
    : resolve("backup", "db_backup.txt");

const readImage = (pathFile, res) => {
    const content = fs.readFile(pathFile, function (err, content) {
        if (err) {
            const payload = {
                message: "File Not Found",
                code: 404,
            };
            res.setHeader("Content-Type", "application/json");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.writeHead(404);
            res.write(JSON.stringify(payload));
            res.end("\n");
        } else {
            res.writeHead(200, { "Content-Type": "image/jpg" });
            res.end(content);
        }
    });
};

const routes = {
    ping: function (data, res) {
        res.write(JSON.stringify({ pong: true }));
        res.end();
    },
    echo: function (data, res) {
        switch (data.method) {
            case "POST":
                res.write(JSON.stringify(data.buffer));
                break;
            case "GET":
                res.writeHead(200);
                break;
        }

        res.end();
    },
    img: function (data, res) {
        readImage(resolve("src", "logo.jpeg"), res);
    },
    notFound: function (data, res) {
        const payload = {
            message: "File Not Found",
            code: 404,
        };
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(404);
        res.write(JSON.stringify(payload));
        res.end("\n");
    },
};

const isFileAccess = (pathFile) => {
    fs.access(pathFile, fs.constants.F_OK, (err) => {
        if (err) {
            console.log("no exists");
            return;
        }
        console.log("exists");
    });
};

const server = createServer((req, res) => {
    const parsedURL = parse(req.url, true);
    let path = parsedURL.pathname;

    path = path.replace(/^\/+|\/+$/g, "");

    console.log(path);
    isFileAccess(resolve("src", "logo.jpeg"));

    let queryString = parsedURL.query;
    let headers = req.headers;
    let method = req.method.toLocaleUpperCase();
    let decoder = new StringDecoder("utf-8");
    let buffer = "";

    req.on("data", function (chunk) {
        buffer += decoder.write(chunk);
    });
    req.on("end", function () {
        buffer += decoder.end();
        let route = routes[path] !== undefined ? routes[path] : routes.notFound;
        let data = {
            path,
            queryString,
            headers,
            method,
            buffer,
        };
        route(data, res);
    });
});

server.listen(envPort);
