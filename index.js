const http = require('http');  

 
 
(async () => { 
  const requestHandler = (request, response) => {  
       console.log(request.url)
       response.end('Hello World')
  }
       
  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })
 
})();

 
nightmare = require('nightmare');
function kiusi(){ 
  var cc=nightmare().goto('https://kinhhen862.github.io/tinhyeuhomnao/index.html'); 
  cc.evaluate(() => { return document.title;}).then((title) => {console.log("here2");console.log(title);}).catch(error => {
    console.log('Search failed:', error)
  }) ;
  setTimeout(  () => { cc.end().then(()=>{console.log("title");}) }  , 120000); 
  
  console.log('----XONG--------');
   
}


function f() { 
    console.log('-111111111111-------trong f -----------');
    kiusi();
    console.log(Date()); 
    setTimeout( f, 150000 ); 
    console.log('--tttttttttt--') 
}



f();
 
