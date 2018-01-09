let runlingDestination;
let runling = {
    position: 0,
    speed: 0.7,
    level: 1,
    exp: 0,
    needExp: 0,
    skillPoint: 4
}
let runlingMove = false;
let moveVector = false;
let drones = [];
let blueDrones = [];

class baseDrone {
    constructor(position, move, r) {
        this.position = position;
        this.move = move;
        this.r = r;
        this.freeze = false;
    }

    coolDown() {
        let that = this;
        setTimeout(function () {
            that.freeze = false
        }, 5000);
    }

}



class baseBlueDrone {
    constructor() {
        this.position = createVector(750, 650);
        this.r = 15;
        this.move = p5.Vector.random2D();
        this.freeze = false;
    }

    coolDown() {
        let that = this;
        setTimeout(function () {
            that.freeze = false
        }, 5000);
    }
}
let lane = 0;
let speedComplete = false;
let godMode = -1;
let invincible = -1;
let level;
let runSpeed = [0, 1.2, 1.35, 1.55, 1.75, 1.95, 2.15, 2.35, 2.55, 2.75, 2.95, 3.15, 3.35, 3.55, 3.75, 3.95, 4.15, 4.35];
let tiles = []
let rectangle = {
    x: 0,
    y: 0,
}
let speedPoints = 0;
let cheat = 0;
let freezeImg;
let freeze = {
    img: undefined,
    unlock: false,
    level: 0,
    CD: 0,
}
let speedBoost = {
    unlock: false,
    img: undefined,
    actualLevel: 0,
    level: [1, 2, 3, 4, 5],
    CD: 0,
    activate: false,
    time: 0,
    stopWorking: () => {
        setTimeout(function () {
            speedBoost.activate = false;
            runling.speed = runling.speed / (1 + (speedBoost.actualLevel * 0.2));
        }, 5000)
    },
}



function preload() {
    freeze.img = loadImage('assets/timeFreeze.jpg');
    speedBoost.img = loadImage('assets/speed.png');
}

function setup() {
    createCanvas(1000, 1000);
    runling.position = createVector(10, 10);
    runlingDestination = createVector(0, 0);
    droneNumber = 0;
    baseDrone.move = p5.Vector.random2D(-1, 1);
    baseDrone.position = createVector(0, 0);
    level = 1;

    //Calling localStorage
    localSetup();


    //runling exp get thing
    for (let i = 0; i < 19; i++) {
        tiles.push(true);
    }

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    rectangle.x = runling.position.x - width / 2;
    rectangle.y = runling.position.y + 350;

    runling.needExp = Math.pow(runling.level, 2);
    //console.log(runling.level, runling.exp, runling.needExp);
    background(200, 200, 200);
    cameraControl();
    fill(200, 200, 200);
    safeZones();

    local();

    fill("white");


    drawMap();
    runMove();
    drawCharacter();
    stroke(0);

    levelSetup();

    speedBoost.time++;

    if (speedBoost.time % 60 == 0) {
        speedBoost.CD--;
    }

    if (speedBoost.CD < 0) {
        speedBoost.CD = 0;
    }

    if (frameCount % 60 == 0) {
        freeze.CD -= 1;
    }

    if (freeze.CD < 0) {
        freeze.CD = 0;
    }

    droneBounce();

    droneNumber++;

    fill("black");
    rect(rectangle.x, rectangle.y, 1000, 150);
    fill("white");
    textSize(20)
    text("Runling Level: " + runling.level, rectangle.x + 50, rectangle.y + 50);
    text("Exp: " + runling.exp + "/" + runling.needExp, rectangle.x + 50, rectangle.y + 70);
    text("Skill Points: " + runling.skillPoint, rectangle.x + 50, rectangle.y + 90);

    fill("black");
    stroke("white");

    rect(rectangle.x + 580, rectangle.y + 20, 390, 50);
    fill("white");

    noStroke();
    text("LEVEL UP SPEED (68 POINTS MAX):" + speedPoints, rectangle.x + 590, rectangle.y + 50);


    image(freeze.img, rectangle.x + 230, rectangle.y + 20);
    textSize(15)
    if (!freeze.unlock) {
        text("TIME FREEZE: YET TO UNLOCK", rectangle.x + 160, rectangle.y + 115);
    } else {
        text("TIME FREEZE: " + freeze.CD, rectangle.x + 210, rectangle.y + 115);
        text("Press the D key ", rectangle.x + 210, rectangle.y + 130);
    }

    image(speedBoost.img, rectangle.x + 370, rectangle.y + 20);
    if (!speedBoost.unlock) {
        text("SPEED BOOST: YET TO UNLOCK", rectangle.x + 300, rectangle.y + 130);
    } else {
        text("SPEED BOOST: " + speedBoost.CD, rectangle.x + 350, rectangle.y + 115);
        text("Press the F key", rectangle.x + 350, rectangle.y + 130);
    }


}

function mousePressed() {
    if (mouseY < 850) {
        runlingMove = true;
        runlingDestination.x = mouseX - width / 2 + runling.position.x;
        runlingDestination.y = mouseY - height / 2 + runling.position.y;
    }
    if (runling.skillPoint > 0) {
        if (mouseX > 580 && mouseX < 970 && mouseY > 870 && mouseY < 920) {
            if (speedPoints < 68) {
                if (speedPoints > 19 && runling.skillPoint > 1) {
                    runling.skillPoint -= 2;
                    speedPoints++;
                } else {
                    runling.skillPoint--;
                    speedPoints++;

                }

            }
        }
    }

    if (mouseX > 228 && mouseX < 328 && mouseY > 870 && mouseY < 940) {
        if (runling.skillPoint >= 4) {
            if (freeze.level < 12) {
                freeze.unlock = true;
                freeze.level++;
                runling.skillPoint -= 4;
            }
        }
    }

    if (mouseX > 370 && mouseX < 450 && mouseY < 940 && mouseY > 865) {
        if (runling.skillPoint >= 4) {
            if (!speedBoost.unlock) {
                speedBoost.unlock = true;
            }
            if (speedBoost.actualLevel < 5) {
                speedBoost.unlock = true;;
                speedBoost.actualLevel++;
                runling.skillPoint -= 4;
            }
        }
    }

}

function keyPressed() {
    if (keyCode == 83) {
        runlingMove = false;
    }


    if (freeze.unlock && freeze.CD == 0) {
        if (keyCode == 68) {
            freeze.CD = Math.ceil(17 - freeze.level);
            for (let i = 0; i < drones.length; i++) {
                if (dist(runling.position.x, runling.position.y, drones[i].position.x, drones[i].position.y) < 80 && !drones[i].freeze) {
                    drones[i].freeze = true;
                    drones[i].coolDown();
                }
            }
            for (let i = 0; i < blueDrones.length; i++) {
                if (dist(runling.position.x, runling.position.y, blueDrones[i].position.x, blueDrones[i].position.y) < 80 && !blueDrones[i].freeze) {
                    blueDrones[i].freeze = true;
                    blueDrones[i].coolDown();
                }
            }
            frameCount = 0;
        }

        if (keyCode == 53 && cheat == 0) {
            cheat++;
        } else if (keyCode == 72 && cheat == 1) {
            cheat++;
        } else if (keyCode == 77 && cheat == 2) {
            cheat++;
        } else if (keyCode == 79 && cheat == 3) {
            cheat++;
        } else if (keyCode == 80 && cheat == 4) {
            cheat = 0;
            if (invincible == -1) {
                invincible = 1;
            } else {
                invincible = -1;
            }
        } else {
            cheat = 0;
        }


    }


    if (speedBoost.unlock && speedBoost.CD == 0) {
        if (keyCode == 70) {
            speedBoost.time = 0;
            speedBoost.CD = 10;
            speedBoost.activate = true;
            for (let i = 0; i < speedBoost.level.length; i++) {
                if (speedBoost.actualLevel == speedBoost.level[i]) {
                    runling.speed = runling.speed * (1 + (speedBoost.actualLevel * 0.2));
                }
            }

            speedBoost.stopWorking();
        }
    }

}
