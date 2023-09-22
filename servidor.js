import chalk from 'chalk';
import http from 'http';

const port = 8000;

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/user') {
        console.log('peticion get');
} else if(req.method == 'POST' && req.url === '/user') {

}

});  

server.listen(port, () => {
    console.log(chalk.greenBright(JSON.stringify({nombre: "Rafael R", msj: "Shinra tensei!"})));
    console.log(chalk.greenBright(`Welcome, host: local, port: ${port}`));
});