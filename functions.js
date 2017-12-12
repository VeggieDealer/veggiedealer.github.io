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
