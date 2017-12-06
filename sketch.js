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
let level;
let runSpeed = [0, 1.2, 1.35, 1.55, 1.75, 1.95, 2.15, 2.35, 2.55, 2.75, 2.95, 3.15, 3.35, 3.55, 3.75, 3.95, 4.15, 4.35];



function setup() {
    createCanvas(1000, 800);
    runling.position = createVector(10, 10);
    runlingDestination = createVector(0, 0);
    droneNumber = 0;
    baseDrone.move = p5.Vector.random2D(-1, 1);
    baseDrone.position = createVector(0, 0);
    level = 1;
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

    if (level == 1) {
        // Assigning the drones random spots within the lane and giving them random speeds
        //    lane 1 drone 
        sketchDrone(115, 1300, 10, 88, 0.7, 15);
        //lane 2 drone 
        sketchDrone(1400, 1490, 110, 1100, 0.7, 15);
        //drones in lane 3
        sketchDrone(160, 1300, 1220, 1300 - 11, 0.7, 15);
        //drones in lane 4
        sketchDrone(10, 85, 250, 1150, 0.7, 15);
        //drones in lane 5
        sketchDrone(110, 1100, 115, 185, 0.7, 15);
        //drones in lane 6
        sketchDrone(1280, 1360, 210, 1080, 0.7, 15);
        //drones in lane 7
        sketchDrone(225, 1180, 1110, 1180, 0.7, 15);
        //drones in lane 8
        sketchDrone(110, 180, 320, 1070, 0.7, 15);
        //drone in lane 9
        sketchDrone(300, 1100, 240, 260, 0.7, 15);
        //drones in lane 10
        sketchDrone(1185, 1225, 350, 950, 0.7, 15);
        //drones in lane 11
        sketchDrone(340, 1100, 1050, 1075, 0.7, 15);
        //drones in lane 12
        sketchDrone(220, 260, 400, 1000, 0.7, 15);
        //drones in lane 13
        sketchDrone(320, 1030, 315, 360, 0.7, 15);
        //drones in lane 14
        sketchDrone(1060, 1140, 380, 940, 0.7, 15);
        //drone 15
        sketchDrone(420, 1020, 980, 1000, 0.7, 15);
        //16
        sketchDrone(320, 375, 500, 900, 0.7, 15);
        //17
        sketchDrone(420, 930, 400, 450, 0.7, 15);
        //18
        sketchDrone(970, 1030, 490, 830, 0.7, 15);
    } else if (level == 2) {
        for (let i = 0; i < drones.length; i ++) {
            drones.splice(i, 1);
        }
        //BLUE DRONES

        sketchBlueDrone();
        droneNumber = 0;
    } else if (level == 3) {
        //lane 1 drone 
        sketchDrone(115, 1300, 10, 88, 0.7, 15);
        //lane 2 drone 
        sketchDrone(1400, 1490, 110, 1100, 0.7, 15);
        //drones in lane 3
        sketchDrone(160, 1300, 1220, 1300 - 11, 0.7, 15);
        //drones in lane 4
        sketchDrone(10, 85, 250, 1150, 0.7, 15);
        //drones in lane 5
        sketchDrone(110, 1100, 115, 185, 0.7, 15);
        //drones in lane 6
        sketchDrone(1280, 1360, 210, 1080, 0.7, 15);
        //drones in lane 7
        sketchDrone(225, 1180, 1110, 1180, 0.7, 15);
        //drones in lane 8
        sketchDrone(110, 180, 320, 1070, 0.7, 15);
        //drone in lane 9
        sketchDrone(300, 1100, 240, 260, 0.7, 15);
        //drones in lane 10
        sketchDrone(1185, 1225, 350, 950, 0.7, 15);
        //drones in lane 11
        sketchDrone(340, 1100, 1050, 1075, 0.7, 15);
        //drones in lane 12
        sketchDrone(220, 260, 400, 1000, 0.7, 15);
        //drones in lane 13
        sketchDrone(320, 1030, 315, 360, 0.7, 15);
        //drones in lane 14
        sketchDrone(1060, 1140, 380, 940, 0.7, 15);
        //drone 15
        sketchDrone(420, 1020, 980, 1000, 0.7, 15);
        //16
        sketchDrone(320, 375, 500, 900, 0.7, 15);
        //17
        sketchDrone(420, 930, 400, 450, 0.7, 15);
        //18
        sketchDrone(970, 1030, 490, 830, 0.7, 15);
        
        sketchBlueDrone();
    }


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
