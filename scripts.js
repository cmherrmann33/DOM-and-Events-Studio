// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let takeoff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.querySelector("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");


    takeoff.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff")
        if (response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            spaceShuttleHeight.innerHTML = "10,000";
            shuttleBackground.background = "blue";
        } 
    });

}

window.onload = init;