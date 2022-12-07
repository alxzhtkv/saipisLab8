const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs')

http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Allow-Headers": "*",
  };
  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end('ok');
  }
  // if (req.method == 'GET') {
  //   fs.readFile('array.txt', 'utf8', (err, arrayStr) => {
  //     fs.readFile('editedArray.txt', 'utf8', (err2, editedArrayStr) => {
  //       let body = {
  //         array: arrayStr,
  //         editedArray: editedArrayStr
  //       }
  //       res.statusCode = 200;
  //       res.setHeader('Content-Type', 'application/json');
  //       res.setHeader('Access-Control-Allow-Origin', '*');
  //       res.write(JSON.stringify(body)) //сериализация объекта
  //       res.end()
  //     })
  //   })
  // }
  if (req.method === 'POST') {
    let data = [];
    req.on('data', (chunk) => {
      data.push(chunk)
    })
    req.on('end', () => {
      baseArray(JSON.parse(data))
    })
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok')
  };
}).listen(port, () => { 
  console.log("Server running at port 5500");
});


function baseArray(data) {
  console.log(data.array.toString())
  fs.writeFile("data.txt", data.array.toString(), function (err) {
    if (err) return console.log(err);
    console.log('Введенные данные записаны в файл');
  });
  // editArray(data.array)
}

// function editArray(array) {
//   let editesArray = array.sort()
//   fs.writeFile("editedArray.txt", editesArray.toString(), function (err) {
//     if (err) return console.log(err);
//     console.log('Измененные данные записаны в файл');
//   });
// }