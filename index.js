const http = require('http');

const srv = http.createServer((req, res) => {
    console.log('MÉTODO: ', req.method);
    console.log('HEADERS: ', req.headers);
    console.log('HTTP VERSÃO: ', req.httpVersion);

   res.writeHead(200, {
      'Content-Type':  'text/html'  
   })

   res.write(`
   <!DOCTYPE html>
            <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Modelo</title>
        </head>
        <body>
            <h1>Olá Pessoal</h1>
        </body>
        </html>    
   `)

   res.end()
});

srv.listen(3002, () => {
    console.log('Servidor Funcionando');
})