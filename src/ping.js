import Ping from './pingue.js'
var p = new Ping();

// Using callback
p.ping("https://github.com", function(err, data) {
  // Also display error if err is returned.
  if (err) {
    console.log("error loading resource")
    data = data + " " + err;
  }
  document.getElementById("ping-github").innerHTML = `Ping de ${data} ms`
});

// You may use Promise if the browser supports ES6
p.ping("https://google.com")
  .then(data => {
    console.log("Successful ping: " + data);
    document.getElementById('ping-google').innerText = `Ping de ${data} ms`
  })
  .catch(data => {
    console.error("Ping failed: " + data);
  })
//Teste Ping
p.ping("http://172.31.49.249")
  .then(data => {
    console.log("Successful ping: " + data);
    document.getElementById('ping-teste').innerText = `Ping de ${data} ms`
  })
  .catch(data => {
    console.error("Ping failed: " + data);
  })
  export default Ping
