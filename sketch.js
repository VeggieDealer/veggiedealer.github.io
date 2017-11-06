let runlingDestination;
let runling = {
    position: 0,
    speed: 0.7
}
let runlingMove = false;
let moveVector = false;
drones = [];
let baseDrone = {
    position: 0,
    r: 15,
    move: 0,
}
let lane = 0;
let speedComplete = false;
let godMode = -1;
let level = 1;
let runSpeed = [0, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4];

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(1500, 1300);
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
    fill(200, 200, 200);

    if (isNaN(runling.speed)) {
        console.log("fixing...");
        runling.speed = 0.7;
    }
    fill("white");
    //safe zone 1
    rect(0, 0, 100, 100);
    //safe zone 2
    rect(1377, 0, 122, 96);
    //safe zone 3
    rect(1377, 1200, 122, 99);
    //safe zone 4
    rect(0, 1200, 100, 99);
    //safe zone 5
    rect(0, 105, 100, 95);
    //safe zone 6
    rect(1250, 105, 118, 95);
    //safe zone 7 
    rect(1250, 1100, 118, 100);
    //safe zone 8
    rect(105, 1100, 92, 100);
    //safe zone 9
    rect(105, 205, 92, 92);
    //safe zone 10
    rect(1150, 205, 94, 92);
    //safe zone 11
    rect(1150, 1025, 94, 75);
    //safe zone 12
    rect(205, 1025, 94, 75);
    //safe zone 13
    rect(205, 305, 94, 70);
    //safe zone 14
    rect(1050, 305, 94, 70);
    //safe zone 15
    rect(1050, 950, 94, 70);
    //safe zone 16
    rect(305, 950, 94, 70);
    //safe zone 17
    rect(305, 380, 94, 90)
    
    drawMap();
    drawCharacter();
    boundaries();

    stroke(0);


    // Assigning the drones random spots within the lane and giving them random speeds
    //lane 1 drone 
    sketchDrone(115, 1300, 10, 88, 1);
    //lane 2 drone 
    sketchDrone(1400, 1490, 110, 1100, 1);
    //drones in lane 3
    sketchDrone(160, 1300, 1220, height - 11, 1);
    //drones in lane 4
    sketchDrone(10, 90, 250, 1150, 1);




    droneNumber++;
    // Creating the drones
    for (i = 0; i < drones.length; i++) {
        fill("black");
        ellipse(drones[i].position.x, drones[i].position.y, drones[i].r);
        drones[i].position.add(drones[i].move);
        //lane one drones rebounce
        if (drones[i].position.x < 107 && drones[i].position.x > 100 && drones[i].position.y > 10 && drones[i].position.y < 88) {
            drones[i].move.x *= -1;
        } else if (drones[i].position.x > 1370 && drones[i].position.x < 1375 && drones[i].position.y > 10 && drones[i].position.y < 88) {
            drones[i].move.x *= -1;
        }
        if (drones[i].position.y < 10) {
            drones[i].move.y *= -1;
        } else if (drones[i].position.y > 88 && drones[i].position.y < 100 && drones[i].position.x > 107) {
            drones[i].move.y *= -1;
        } else if (drones[i].position.y > 88 && drones[i].position.y < 100 && drones[i].position.x < 1370) {
            drones[i].move.y *= -1;
        }


        //lane two Drones rebounce
        if (drones[i].position.x < 1385 && drones[i].position.x > 1375 && drones[i].position.y > 100) {
            drones[i].move.x *= -1;
        } else if (drones[i].position.x > width - 10 && drones[i].position.y > 100) {
            drones[i].move.x *= -1;
        }
        if (drones[i].position.y < 105 && drones[i].position.x < width && drones[i].position.x > 1380) {
            drones[i].move.y *= -1;
        } else if (drones[i].position.y > 1192 && drones[i].position.x < width && drones[i].position.x > 1380) {
            drones[i].move.y *= -1;
        }

        //lane three Drones rebounce

        if (drones[i].position.x < 110 && drones[i].position.y > 1200) {
            drones[i].move.x *= -1;
        } else if (drones[i].position.x > 1370 && drones[i].position.y > 1200) {
            drones[i].move.x *= -1;
        }
        if (drones[i].position.y < 1212 && drones[i].position.y > 1210 && drones[i].position.x > 100 && drones[i].position.x < 1380) {
            drones[i].move.y *= -1;
        } else if (drones[i].position.y > height - 10) {
            drones[i].move.y *= -1;
        }
        
        //lane four Drones rebounce
        if (drones[i].position.x < 10 && drones[i].position.x > 0 && drones[i].position.y > 100 && drones[i].position.y < 1212) {
            drones[i].move.x *= -1;
        } else if (drones[i].position.x < 100 && drones[i].position.x > 87 && drones[i].position.y > 100 && drones[i].position.y < 1212) {
            drones[i].move.x *= -1;
        }
        if (drones[i].position.x < 95 && drones[i].position.x > 0 && drones[i].position.y < 210 && drones[i].position.y > 205) {
            drones[i].move.y *= -1;
        } else if (drones[i].position.x < 95 && drones[i].position.x > 0 && drones[i].position.y > 1192) {
            drones[i].move.y *= -1;
        }

        
        //lane five Dreons reb0unce 
            
        

        //Drone Collision
        if (dist(runling.position.x, runling.position.y, drones[i].position.x, drones[i].position.y) < drones[i].r - 3 && godMode == -1) {
            runling.position.x = 10;
            runling.position.y = 10;
            runlingMove = false;
        }
    }


    // Moving the character
    if (runlingMove) {
        moveVector = p5.Vector.sub(runlingDestination, runling.position);
        if (moveVector.mag() > runling.speed) {
            moveVector.div(moveVector.mag() / runling.speed);
            runling.position.add(moveVector);
        }
    }

    //LOCAL STORAGE
    localStorage.setItem('speed', runling.speed);

}

function mousePressed() {
    runlingMove = true;
    runlingDestination.x = mouseX;
    runlingDestination.y = mouseY;
}


function keyPressed() {
    if (keyCode == 83) {
        runlingMove = false;
    }

    if (keyCode == 71) {
        godMode *= -1
    }

}
