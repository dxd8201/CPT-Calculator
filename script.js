const totalHours = document.querySelector("#totalHours");
const remainingHours = document.querySelector("#remainingHours");
const sessionLength = document.querySelector("#sessionLength");
const startDate = document.querySelector("#startDate");
const endDate = document.querySelector("#endDate");
const calcBtn = document.querySelector("#calcBtn");
const remainingSessions = document.querySelector("#remainingSessions");
const saturdaySessions = document.querySelector("#saturdaySessions");
const percentageRemaining = document.querySelector("#percentageRemaining");


const sessionsRemaining = function (hoursRemaining, sessionLength) {
    let sessions = hoursRemaining / sessionLength; 
    remainingSessions.textContent = `You have approximately ${sessions} sessions remaining.`;
}

const remainingSaturdays = function (hoursRemaining, sessionLength, startDate, endDate) {
    //needs to use remaining days some how
    let sessions = hoursRemaining / sessionLength; 
    

    //converts date from inputs into UNIX time stamp and runs remaining days calculation
    let actualStartDate = new Date(startDate);
    let actualEndDate = new Date(endDate);
    let remainingDays = calculateBusinessDays(actualStartDate, actualEndDate);
    console.log(remainingDays);

    //calculates remaining saturdays that can be attended
    let saturdaySesh = sessions - remainingDays;

    if(saturdaySesh >= 1) {
        saturdaySessions.textContent = `You have approximately ${saturdaySesh} Saturday sessions remaining.`;
    } else {
        saturdaySessions.textContent = `You have 0 Saturday sessions remaining.`;
    }
}

const percentageRem = function (totalHours, remainingHours) {
    let percentage = remainingHours / totalHours;
    let totalPercent = percentage * 100;
    let roundedPercent = totalPercent.toFixed(0);
    percentageRemaining.textContent = `You have approximately ${roundedPercent} percent of total hours remaining.`;
}

function calculateBusinessDays(startDate, endDate){
    // Validate input
    if (endDate < startDate)
        return 0;

    console.log(startDate);
    console.log(endDate);
    
    // Calculate days between dates
    var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    startDate.setHours(0,0,0,1);  // Start just after midnight
    endDate.setHours(23,59,59,999);  // End just before midnight
    var diff = endDate - startDate;  // Milliseconds between datetime objects    
    var days = Math.ceil(diff / millisecondsPerDay);
    
    // Subtract two weekend days for every week in between
    var weeks = Math.floor(days / 7);
    days = days - (weeks * 2);
    
    // Handle special cases
    var startDay = startDate.getDay();
    var endDay = endDate.getDay();
    
    // Remove weekend not previously removed.   
    if (startDay - endDay > 1)         
        days = days - 2;      
    
    // Remove start day if span starts on Sunday but ends before Saturday
    if (startDay == 0 && endDay != 6) {
        days = days - 1;  
    }
    
    // Remove end day if span ends on Saturday but starts after Sunday
    if (endDay == 6 && startDay != 0) {
        days = days - 1;
    }

    console.log(days);
    
    return days;
    }

calcBtn.addEventListener("click", function () {
    console.log(totalHours.value);
    console.log(remainingHours.value);
    console.log(sessionLength.value);

    sessionsRemaining(remainingHours.value, sessionLength.value);
    remainingSaturdays(remainingHours.value, sessionLength.value, startDate.value, endDate.value);
    percentageRem(totalHours.value, remainingHours.value);
})