const http = require('http')
const readline = require('readline')
const {HOST, PATH, KEY} = require('./config.json')

const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function enterCity() {
  io.question('Enter a city name: ', (city) => {
    http.get(`http://${HOST}/${PATH}?q=${city}&appid=${KEY}&units=metric`, (res) => {
      res.on('data', (chunk) => {
        const data = JSON.parse(chunk)
        const tempMin = data.main.temp_min
        const tempMax = data.main.temp_max

        console.log(`In ${city} the max temperature is ${tempMax} deg Celsius, and the min temperature is ${tempMin} deg Celsius`)
        enterCity()
      })        
    })  
    //io.close()
  })
} 
enterCity()
  


/*
 HTTP(S)

 ClientRequest
 IncommingMessage (response)

 req = http.request(options...)   req ->  creates output stream
 req.write(..)
 req.end()


 Request
    init        write1      write2                      end
 x----|------------|------------|-------- ....... --------|------->


 Response
 
    init         read1        read2                      end
 x----|------------|------------|-------- ....... --------|------->


 app (client) -----> request ---------> weather server API
     event  <------- response < ------- ???


*/

//HW1: read city name from console
//     print to console (temp min+max)
//     make it interactive (cicle) 
//     * debug/prevent errors 