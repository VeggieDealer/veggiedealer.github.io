function drawMap() {
    strokeWeight(10);
    stroke(0);
    line(0, 0, 1500, 0);
    line(1500, 0, 1500, 1300);
    line(0, 0, 0, 1300);
    line(0, 1300, 1500, 1300);

    line(0, 100, 1375, 100);
    line(1375, 100, 1375, 1200);
    line(1375, 1200, 100, 1200);
    line(100, 1200, 100, 200);
    line(100, 200, 1250, 200);
    line(1250, 200, 1250, 1100);
    line(1250, 1100, 200, 1100);
    line(200, 1100, 200, 300);
    line(200, 300, 1150, 300);
    line(1150, 300, 1150, 1025);
    line(1150, 1025, 300, 1025);
    line(300, 1025, 300, 375);
    line(300, 375, 1050, 375);
    line(1050, 375, 1050, 950);
    line(1050, 950, 400, 950);
    line(400, 950, 400, 475);
    line(400, 475, 950, 475);
    line(950, 475, 950, 850);
    line(950, 850, 500, 850);
    line(500, 850, 500, 550);

}




function safeZones() {
    fill(255);
    stroke(0);
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
    rect(305, 380, 94, 90);
    //safe zone 18
    rect(950, 380, 94, 90);
    //safe zone 19
    rect(950, 850, 94, 93);



    if (runling.position.x > 0 && runling.position.x < 100 && runling.position.y > 0 && runling.position.y < 100) {
        godMode = 1;
    } else if (runling.position.x > 1377 && runling.position.x < 1500 && runling.position.y > 0 && runling.position.y < 96) {
        godMode = 1;
        if (tiles[0]) {
            runling.exp += level;
            tiles[0] = false;
        }
    } else if (runling.position.x > 1377 && runling.position.x < 1500 && runling.position.y > 1200 && runling.position.y < 1300) {
        godMode = 1;
        if (tiles[1]) {
            runling.exp += level;
            tiles[1] = false;
        }
    } else if (runling.position.x > 0 && runling.position.x < 100 && runling.position.y > 1200 && runling.position.y < 1300) {
        godMode = 1;
        if (tiles[2]) {
            runling.exp += level;
            tiles[2] = false;
        }
    } else if (runling.position.x > 0 && runling.position.x < 100 && runling.position.y > 105 && runling.position.y < 200) {
        godMode = 1;
        if (tiles[3]) {
            runling.exp += level;
            tiles[3] = false;
        }
    } else if (runling.position.x > 1250 && runling.position.x < 1370 && runling.position.y > 105 && runling.position.y < 200) {
        godMode = 1;
        if (tiles[4]) {
            runling.exp += level;
            tiles[4] = false;
        }
    } else if (runling.position.x > 1250 && runling.position.x < 1370 && runling.position.y > 1100 && runling.position.y < 1200) {
        godMode = 1;
        if (tiles[5]) {
            runling.exp += level;
            tiles[5] = false;
        }
    } else if (runling.position.x > 105 && runling.position.x < 200 && runling.position.y > 1100 && runling.position.y < 1200) {
        godMode = 1;
        if (tiles[6]) {
            runling.exp += level;
            tiles[6] = false;
        }
    } else if (runling.position.x > 105 && runling.position.x < 200 && runling.position.y > 205 && runling.position.y < 300) {
        godMode = 1;
        if (tiles[7]) {
            runling.exp += level;
            tiles[7] = false;
        }
    } else if (runling.position.x > 1150 && runling.position.x < 1245 && runling.position.y > 205 && runling.position.y < 300) {
        godMode = 1;
        if (tiles[8]) {
            runling.exp += level;
            tiles[8] = false;
        }
    } else if (runling.position.x > 1150 && runling.position.x < 1245 && runling.position.y > 1025 && runling.position.y < 1100) {
        godMode = 1;
        if (tiles[9]) {
            runling.exp += level;
            tiles[9] = false;
        }
    } else if (runling.position.x > 205 && runling.position.x < 300 && runling.position.y > 1025 && runling.position.y < 1100) {
        godMode = 1;
        if (tiles[10]) {
            runling.exp += level;
            tiles[10] = false;
        }
    } else if (runling.position.x > 205 && runling.position.x < 300 && runling.position.y > 305 && runling.position.y < 375) {
        godMode = 1;
        if (tiles[11]) {
            runling.exp += level;
            tiles[11] = false;
        }
    } else if (runling.position.x > 1050 && runling.position.x < 1150 && runling.position.y > 305 && runling.position.y < 375) {
        godMode = 1;
        if (tiles[12]) {
            runling.exp += level;
            tiles[12] = false;
        }
    } else if (runling.position.x > 1050 && runling.position.x < 1150 && runling.position.y > 950 && runling.position.y < 1025) {
        godMode = 1;
        if (tiles[13]) {
            runling.exp += level;
            tiles[13] = false;
        }
    } else if (runling.position.x > 305 && runling.position.x < 400 && runling.position.y > 950 && runling.position.y < 1020) {
        godMode = 1;
        if (tiles[14]) {
            runling.exp += level;
            tiles[14] = false;
        }
    } else if (runling.position.x > 305 && runling.position.x < 400 && runling.position.y > 380 && runling.position.y < 470) {
        godMode = 1;
        if (tiles[15]) {
            runling.exp += level;
            tiles[15] = false;
        }
    } else if (runling.position.x > 950 && runling.position.x < 1040 && runling.position.y > 380 && runling.position.y < 470) {
        godMode = 1;
        if (tiles[16]) {
            runling.exp += level;
            tiles[16] = false;
        }
    } else if (runling.position.x > 950 && runling.position.x < 1040 && runling.position.y > 850 && runling.position.y < 940) {
        godMode = 1;
        if (tiles[17]) {
            runling.exp += level;
            tiles[17] = false;
        }
    } else {
        godMode = -1;
    }
}

function cameraControl() {
    camera(runling.position.x - width / 2, runling.position.y - height / 2, 0);
}

function resetLevel() {
    tiles.fill(true);
}

function local() {
    if (isNaN(runling.speed)) {
        runling.speed = runSpeed[1];
    }
    if (isNaN(runling.level)) {
        runling.level = 1;
    }
    if (isNaN(runling.exp)) {
        runling.exp = 0;
    }
    if (isNaN(runling.skillPoint)) {
        runling.skillPoint = 4;
    }

    if (runling.speed > 8.8) {
        runling.speed = 8.8;
    }
    if (isNaN(speedPoints)) {
        speedPoints = 0;
    }
    if (isNaN(freeze.unlock)) {
        freeze.unlock = false;;
    }
    if (isNaN(freeze.level)) {
        freeze.level = 0;
    }

    if (freeze.level > 0) {
        freeze.unlock = true;
    }

    if (isNaN(speedBoost.actualLevel)) {
        speedBoost.actualLevel = 0;
    }

    if (isNaN(speedBoost.unlock)) {
        speedBoost.unlock = false;
    } else if (!isNaN(speedBoost.unlock) && speedBoost.actualLevel > 0) {
        speedBoost.unlock = true;
    }

    if (isNaN(CDR.points)) {
        CDR.points = 0;
    }


    //LOCAL SAVE
    localStorage.setItem('speed', runling.speed);
    localStorage.setItem("level", runling.level);
    localStorage.setItem('exp', runling.exp);
    localStorage.setItem('sp', runling.skillPoint);
    localStorage.setItem('speedPoint', speedPoints);
    localStorage.setItem('freezeUnlock', freeze.unlock);
    localStorage.setItem('freezeLevel', freeze.level);
    localStorage.setItem('speedUnlock', speedBoost.unlock);
    localStorage.setItem('speedLevel', speedBoost.actualLevel);
    localStorage.setItem('CDR', CDR.points);


}

function localSetup() {
    runling.speed = parseFloat(localStorage.getItem("speed"));
    runling.level = parseFloat(localStorage.getItem("level"));
    runling.exp = parseFloat(localStorage.getItem("exp"));
    runling.skillPoint = parseFloat(localStorage.getItem("sp"));
    speedPoints = parseFloat(localStorage.getItem("speedPoint"));
    freeze.level = parseFloat(localStorage.getItem("freezeLevel"));
    freeze.unlock = parseFloat(localStorage.getItem("freezeUnlock"));
    speedBoost.unlock = parseFloat(localStorage.getItem("speedUnlock"));
    speedBoost.actualLevel = parseFloat(localStorage.getItem("speedLevel"));
    CDR.points = parseFloat(localStorage.getItem("CDR"));

}

function levelSetup() {
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
        for (let i = 0; i < drones.length; i++) {
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
}

function HUD() {
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
    rect(rectangle.x + 580, rectangle.y + 80, 390, 50);
    fill("white");

    noStroke();
    text("LEVEL UP SPEED (68 POINTS MAX):" + speedPoints, rectangle.x + 590, rectangle.y + 50);

    text("LEVEL UP CDR (24 POINTS MAX):" + CDR.points, rectangle.x + 590, rectangle.y + 110);

//    image(freeze.img, rectangle.x + 230, rectangle.y + 20);
    textSize(15)
    if (!freeze.unlock) {
        text("TIME FREEZE: YET TO UNLOCK", rectangle.x + 160, rectangle.y + 115);
    } else {
        text("TIME FREEZE: " + freeze.CD, rectangle.x + 210, rectangle.y + 115);
        text("Press the D key ", rectangle.x + 210, rectangle.y + 130);
    }

//    image(speedBoost.img, rectangle.x + 370, rectangle.y + 20);
    if (!speedBoost.unlock) {
        text("SPEED BOOST: YET TO UNLOCK", rectangle.x + 300, rectangle.y + 130);
    } else {
        text("SPEED BOOST: " + speedBoost.CD, rectangle.x + 350, rectangle.y + 115);
        text("Press the F key", rectangle.x + 350, rectangle.y + 130);
    }


}
