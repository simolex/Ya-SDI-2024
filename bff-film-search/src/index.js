import { createServer } from "node:http";
import { parse } from "node:url";
// import path from "node:path";

const routes = {
    ping: function (data, res) {
        res.write(JSON.stringify({ pong: true }));
        res.end();
    },
    notFound: function (data, res) {},
};

const server = createServer((req, res) => {
    const parsedURL = parse(req.url, true);
    let path = parsedURL.pathname;

    path = path.replace(/^\/+|\/+$/g, "");

    console.log(path);

    let queryString = parsedURL.query;
    let headers = req.headers;
    let method = req.method.toLocaleUpperCase();

    req.on("data", function () {
        console.log("recived data");
    });
    req.on("end", function () {
        let route = routes[path] !== undefined ? routes[path] : routes["notFound"];
        let data = {
            path,
            queryString,
            headers,
            method,
        };
        route(data, res);
    });
});

server.listen(3000);
