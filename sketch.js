let runlingDestination;
let runling = {
    position: 0,
    speed: 0.7
}
let runlingMove = false;
let moveVector = false;
let drones = [];
let blueDrones = [];
let baseDrone = {
    position: 0,
    r: 15,
    move: 0,
}
class baseBlueDrone {
    constructor() {
        this.position = createVector(750, 650);
        this.r = 15;
        this.move = p5.Vector.random2D();
    }
}
let lane = 0;
let speedComplete = false;
let godMode = -1;
let invincible = -1;
let level = 1;
let runSpeed = [0, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4];

function setup() {
    createCanvas(1000, 800);
    runling.position = createVector(10, 10);
    runlingDestination = createVector(0, 0);
    droneNumber = 0;
    baseDrone.move = p5.Vector.random2D(-1, 1);
    baseDrone.position = createVector(0, 0);
    //Calling localStorage
    runling.speed = parseFloat(localStorage.getItem("speed"));
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {

    background(200, 200, 200);
    cameraControl();
    fill(200, 200, 200);
    safeZones();

    if (isNaN(runling.speed)) {
        console.log("fixing...");
        runling.speed = runSpeed[1];
    }
    if (runling.speed > 4.4) {
        runling.speed = 4.4;
    }
    fill("white");


    drawMap();
    runMove();
    drawCharacter();
    stroke(0);


    // Assigning the drones random spots within the lane and giving them random speeds
    //    lane 1 drone 
    sketchDrone(115, 1300, 10, 88, 0.7);
    //    lane 2 drone 
    sketchDrone(1400, 1490, 110, 1100, 0.7);
    //    drones in lane 3
    sketchDrone(160, 1300, 1220, 1300 - 11, 0.7);
    //    drones in lane 4
    sketchDrone(10, 85, 250, 1150, 0.7);
    //    drones in lane 5
    sketchDrone(110, 1100, 115, 185, 0.7);
    //    drones in lane 6
    sketchDrone(1280, 1360, 210, 1080, 0.7);
    //    drones in lane 7
    sketchDrone(225, 1180, 1110, 1180, 0.7);
    //    drones in lane 8
    sketchDrone(110, 180, 320, 1070, 0.7);
    //    drone in lane 9
    sketchDrone(230, 1140, 220, 280, 0.7);
    //    drones in lane 10
    sketchDrone(1175, 1235, 320, 1000, 0.7);
    //    drones in lane 11
    sketchDrone(320, 1130, 1040, 1080, 0.7);
    //    drones in lane 12
    sketchDrone(220, 260, 400, 1000, 0.7);
    //    drones in lane 13
    sketchDrone(320, 1030, 315, 360, 0.7);
    //BLUE DRONES
    sketchBlueDrone();

    droneNumber++;
    droneBounce();

    //LOCAL STORAGE
    localStorage.setItem('speed', runling.speed);

}

function mousePressed() {
    runlingMove = true;
    runlingDestination.x = mouseX - width / 2 + runling.position.x;
    runlingDestination.y = mouseY - height / 2 + runling.position.y;
}

function keyPressed() {
    if (keyCode == 83) {
        runlingMove = false;
    }

    if (keyCode == 71) {
        invincible *= -1;
    }

}
