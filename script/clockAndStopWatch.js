document.addEventListener("DOMContentLoaded", () => {

    getCurrentTime();
    getCurrentDate();

})

const getCurrentDate = () => {
    console.log("getCurrentDate invoked")

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const currentDay = document.getElementById("current-day");
    const currentMonth = document.getElementById("current-month");
    const currentDate = document.getElementById("current-date");
    const currentYear = document.getElementById("current-year");

    const d = new Date();

    currentDay.innerHTML = days[d.getDay()];
    currentMonth.innerHTML = months[d.getMonth()];
    currentDate.innerHTML = d.getDate();
    currentYear.innerHTML = d.getFullYear();

    console.log(d.getFullYear());

}

const getCurrentTime = () => {
    // console.log("getCurrentTime invoked")



}