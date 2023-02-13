// main app module

//global module
import * as readline from 'node:readline'
import {stdin as input, stdout as output} from 'node:process'

// custom module / local
import { data_week, days } from "./data.mjs"

const io = readline.createInterface({input, output})

const parseDayValue = (input) => {
    let day_value = parseInt(input)
    if (Number.isNaN(day_value)) {
        day_value = days[input]
    }
        return day_value
}

const printTemp = (cb) => {
    data_week.forEach((day, index) => {
        if(cb(index)) {
            console.log(`[${day.date}]: ${day.temp}`)
        }
    })
}

io.question('Choose the day (1..7):',input => {
   // range
    if (input.indexOf("..") !=-1) {
        let [day_start, day_end] = input.split("..")
        let day_start_value = parseDayValue(day_start)
        let day_end_value = parseDayValue(day_end)

        printTemp(index => {index +1 >= day_start_value && index + 1 <= day_end_value})
    }
    // single value
    else{
        let day_value = parseDayValue(input)

        printTemp(index => {index +1 == day_value})
        }      
        io.close()
})
