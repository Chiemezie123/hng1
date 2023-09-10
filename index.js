let  getDate = new Date();
let getDay  = getDate.getDay();
let getMilliseconds = getDate.getUTCMilliseconds();
console.log("getMilliseconds",getMilliseconds);
console.log("this is the day", getDate);
let knowTheDay;
if(getDay === 1){
    knowTheDay = "monday";
}else if(getDay === 2){
    knowTheDay = "tuesday";
}else if (getDay === 3){
    knowTheDay = "wednesday";
}
else if (getDay === 4){
    knowTheDay = "thursday";
}
else if (getDay === 5){
    knowTheDay = "friday";
}
else if (getDay === 6){
    knowTheDay = "saturday";
}
else if (getDay === 0){
    knowTheDay = "sunday";
}
else {
    knowTheDay = "how manage you reach here";
}

let getPtag =document.getElementById("currentDateOfTheWeek");
let currentUTCTime= document.getElementById("currentUTCTime");

currentUTCTime.innerText = ` ${getMilliseconds}`

getPtag.innerText =  ` ${knowTheDay} `;

