const totalHours = document.querySelector("#totalHours");
const remainingHours = document.querySelector("#remainingHours");
const remainingDays = document.querySelector("#remainingDays");
const sessionLength = document.querySelector("#sessionLength");
const calcBtn = document.querySelector("#calcBtn");
const remainingSessions = document.querySelector("#remainingSessions");
const saturdaySessions = document.querySelector("#saturdaySessions");
const percentageRemaining = document.querySelector("#percentageRemaining");

console.log("Hello world");

const sessionsRemaining = function (hoursRemaining, sessionLength) {
    let sessions = hoursRemaining / sessionLength; 
    console.log(`You have approximately ${sessions} sessions remaining.`);
    remainingSessions.textContent = `You have approximately ${sessions} sessions remaining.`;
}

const remainingSaturdays = function (hoursRemaining, sessionLength) {
    let sessions = hoursRemaining / sessionLength; 
    let saturdaySesh = sessions / 14;
    console.log(`You have approximately ${saturdaySesh} Saturday sessions remaining.`);
    saturdaySessions.textContent = `You have approximately ${saturdaySesh} Saturday sessions remaining.`;
}

const percentageRem = function (totalHours, remainingHours) {
    let percentage = remainingHours / totalHours;
    let totalPercent = percentage * 100;
    console.log(`You have approximately ${totalPercent} percentage of hours remaining.`)
    percentageRemaining.textContent = `You have approximately ${totalPercent} percentage of hours remaining.`;
}

calcBtn.addEventListener("click", function () {
    console.log(totalHours.value);
    console.log(remainingHours.value);
    console.log(remainingDays.value);
    console.log(sessionLength.value);
    sessionsRemaining(remainingHours.value, sessionLength.value);
    remainingSaturdays(remainingHours.value, sessionLength.value);
    percentageRem(totalHours.value, remainingHours.value);
})