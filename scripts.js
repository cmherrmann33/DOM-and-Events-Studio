// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let takeoff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    let landing = document.getElementById("landing");

    let missionAbort = document.getElementById("missionAbort");

    let button = document.getElementById("button");


    takeoff.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff")
        if (response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            spaceShuttleHeight.innerHTML = "10,000";
            shuttleBackground.style.background = "blue";
        } 
    });

    landing.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        spaceShuttleHeight.innerHTML = "0";
        shuttleBackground.style.background = "green";
    });

    missionAbort.addEventListener("click", function() {
        let response2 = window.confirm("Confirm that you want to abort the mission.");
        if (response2) {
            flightStatus.innerHTML = "Mission aborted.";
            spaceShuttleHeight.innerHTML = "0";
            shuttleBackground.style.background = "green";
        }
    });

    button.addEventListener("click", function() {
        if 
    });

}

window.onload = init;