//Date objects are static
const d = new Date();//Wed Mar 26 2025 18:33:23 GMT+0530 (India Standard Time)// Object
d.toString();//String
d.toDateString();//Wed Mar 26 2025
// new Date(date string)
const d3 = new Date("2022-03-25");
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)
const d1 = new Date(100000000000);//100000000000 milliseconds from January 01 1970 UTC
const d2 = new Date(-100000000000);//January 01 1970 minus 100 000 000 000 milliseconds


// Method	              Description
// getFullYear()	      Get year as a four digit number (yyyy)
// getMonth()	          Get month as a number (0-11)
// getDate()	          Get day as a number (1-31)
// getDay()	              Get weekday as a number (0-6)
// getHours()	          Get hour (0-23)
// getMinutes()	          Get minute (0-59)
// getSeconds()	          Get second (0-59)
// getMilliseconds()	  Get millisecond (0-999)
// getTime()	          Get time (milliseconds since January 1, 1970)
//Date.now()              returns the number of milliseconds since January 1, 1970.

//The get methods above return Local time
// In a date object, the time is static. The "clock" is not "running".

// The time in a date object is NOT the same as current time.

// Method	          Description
// setDate()	      Set the day as a number (1-31)
d.setDate(15);
d.setDate(d.getDate() + 50);
// setFullYear()	  Set the year (yyyy)
d.setFullYear(2020);
d.setFullYear(2020, 11, 3);//The setFullYear() method can optionally set month and day:
// setHours()	      Set the hour (0-23)
d.setHours(22);
d.setHours(22, 10, 20);//The setHours() method can also be used to set minutes and seconds.
// setMilliseconds()  Set the milliseconds (0-999)
// setMinutes()	      Set the minutes (0-59)
// setMonth()	      Set the month (0-11)
// setSeconds()	      Set the seconds (0-59)
// setTime()	      Set the time (milliseconds since January 1, 1970)


                                                               //Compare Dates
let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}  
console.log(text);                                                            
