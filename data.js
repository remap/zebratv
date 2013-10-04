
connect("128.97.152.30",5117);

/**
 * Connects to a host and port
 *
 * @param {String} host The remote host to connect to
 * @param {Number} port The port to connect to at the remote host
 */
function connect(host, port) {
  tcpClient = new TcpClient(host, port);

  tcpClient.connect(function() {
    log('Connected to ' + host + ':' + port);
    tcpClient.addResponseListener(function(data) {
      var lines = data.split('\n');
     
      var i = 0;
      for(i=0;i<lines.length-1;i++){
          e = lines[i].split(',')
          setPosition(e[1],e[2],e[3],e[4])
      }
      //var output = lines.join('..\n');
      //log(output)
    });
  });
}


var sensors = {};

function setPosition(id, x, y ,z){
    oldLength = Object.keys(sensors).length
    //log(" setting element "+id+" to "+x+","+y+","+z) 
    sensors[id] = {'x':x,'y':y,'z':z,'name':id}
    newLength = Object.keys(sensors).length
    if(newLength>oldLength) addElement(id);
    //log("elem length is "+Object.keys(elem).length)
    //log("x is "+elem[id]['x'])
}


/**
 * Wrapper function for logging
 */
function log(msg) {
  console.log(msg);
}

/**
 * Wrapper function for error logging
 */
function error(msg) {
  console.error(msg);
}