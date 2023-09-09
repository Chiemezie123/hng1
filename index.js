let  getDate = new Date();
let getDay  = getDate.getDay();
let getMilliseconds = getDate.getTime();
console.log("getMilliseconds",getMilliseconds);
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
else if (getDay === 7){
    knowTheDay = "sunday";
}
else {
    knowTheDay = "how manage you reach here";
}
let getdivTag = document.getElementsByClassName('second-container-inner')[0];
let getPtag =document.getElementById("currentDateOfTheWeek");
let currentUTCTime= document.getElementById("currentUTCTime");

currentUTCTime.innerText = `the current UTC time in milliseconds: ${getMilliseconds}`

getPtag.innerText =  `current day of the week : ${knowTheDay} `;

// let DisplayTheDay = document.createElement("p");
// DisplayTheDay.innerText = `today is ${knowTheDay} `;
getdivTag.appendChild(DisplayTheDay);
