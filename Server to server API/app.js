const http = require('http')
const {HOST, PATH, KEY} = require('./config.json')
let city = 'Chisinau'

const callback = (res) => {   // <<< response - readable stream
    //console.log(res)

    // BIND EVENT HANDLERS
    res.on('data', (chunk) => {
        // console.log('API response data')
        // console.log(chunk.toString())
        const data = JSON.parse(chunk.toString())
        console.log(data)
    })
    res.on('end', () => {
        console.log('API response ended')
    })  
    res.on('error', () => {
        console.log('API response error')
    })
}
// prepare request
const req = http.request({
    host: HOST,
    path: PATH + `?q=${city}&appid=${KEY}`,
    port: 80,
    method: 'GET'
}, callback)


req.end()




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