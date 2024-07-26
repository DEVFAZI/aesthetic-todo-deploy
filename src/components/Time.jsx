
let date = new Date()
export function getDay(){
// console.log(date)
let dayOfWeeks = ["Sunday","Monday","Tuesday", "Wednesday","Thrusday","Friday","Satudary"]
let Day = date.getDay()
Day = Day
return dayOfWeeks[Day]
}


export function getDate(){
let newDate = date.getDate()
newDate = newDate+"th"
 return newDate
}

export function getMonth(){
    let monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = date.getMonth()
    month = monthsName[month]
    return month
}
