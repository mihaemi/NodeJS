// main app module

//global module
import * as readline from 'node:readline'
import {stdin as input, stdout as output} from 'node:process'

// custom module / local
import { data_week, days } from "./data.mjs"

const io = readline.createInterface({input, output})

io.question('Choose the day (1..7):',input => {
   // range
   if (input.indexOf("..") !=-1) {
      let [day_start, day_end] = input.split("..")
      let day_start_value = parseInt(day_start)
      if (Number.isNaN(day_start_value)) {
         day_start_value = days[day_start]
   } 
      let day_end_value = parseInt(day_end)
      if (Number.isNaN(day_end_value)) {
         day_end_value = days[day_end]
      }

      data_week.forEach((day, index) => {
         if(index +1 >= day_start_value && index + 1 <= day_end_value) {
         console.log(`[${day.date}]: ${day.temp}`)
         }
         })
   }
   // single value
   else{
      let day_value = parseInt(input)
      if (Number.isNaN(day_value)) {
      day_value = days[input]
      }
      data_week.forEach((day, index) => {
         if(index +1 == day_value) {
         console.log(`[${day.date}]: ${day.temp}`)
         }
         })
   }
   
      //console.log(day_value, typeof day_value)
      //find algo
      
      
   io.close()
})

//HW1: what if the user inputs the day name? ("Monday", 'Tuesday')
//HW2: what if the user inputs a range ---> 1..3, "Monday"..'Tuesday'

//hint1: use the data type check
// hint2: use String processing

