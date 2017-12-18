function runMove() {

    if (runlingMove) {
        moveVector = p5.Vector.sub(runlingDestination, runling.position);
        moveVector.setMag(runling.speed);
        runling.position.add(moveVector);
        boundaries();
        if (dist(runling.position.x, runling.position.y, runlingDestination.x, runlingDestination.y) < 5) {
            runlingMove = false;
        }
    }
}

function drawCharacter() {
    stroke("green")
    strokeWeight(1);
    fill("purple");
    ellipse(runling.position.x, runling.position.y, 8);
    
    noFill();
stroke(0, 0, 55);
    ellipse(runling.position.x, runling.position.y, 150)

    // runling speeds
    if (!speedBoost.activate) {
    runling.speed = speedPoints * 0.05 + 1;
    }



    if (runling.level < 75) {
        if (runling.exp >= runling.needExp) {
            runling.level++;
            runling.skillPoint += 4;
        }
    } else if (runling.level >= 75) {
        runling.exp = 0;
    }



}

function boundaries() {
    //checking which lane the character is in

    if (runling.position.x > 0 && runling.position.x < 1375 && runling.position.y > 0 && runling.position.y < 95) {
        lane = 1;
    } else if (runling.position.x > 1375 && runling.position.x < 1500 && runling.position.y > 0 && runling.position.y < 1205) {
        lane = 2;
    } else if (runling.position.x < 1500 && runling.position.x > 95 && runling.position.y > 1200 && runling.position.y < 1300) {
        lane = 3;
    } else if (runling.position.x < 100 && runling.position.x > 0 && runling.position.y > 200 && runling.position.y < 1300) {
        lane = 4;
    } else if (runling.position.x > 0 && runling.position.x < 1245 && runling.position.y > 110 && runling.position.y < 200) {
        lane = 5;
    } else if (runling.position.x > 1250 && runling.position.x < 1370 && runling.position.y > 110 && runling.position.y < 1100) {
        lane = 6;
    } else if (runling.position.x > 200 && runling.position.x < 1370 && runling.position.y < 1190 && runling.position.y > 1105) {
        lane = 7;
    } else if (runling.position.x > 100 && runling.position.x < 200 && runling.position.y > 310 && runling.position.y < 1190) {
        lane = 8;
    } else if (runling.position.x > 100 && runling.position.x < 1140 && runling.position.y > 200 && runling.position.y < 290) {
        lane = 9;
    } else if (runling.position.x > 1160 && runling.position.x < 1245 && runling.position.y > 200 && runling.position.y < 1000) {
        lane = 10;
    } else if (runling.position.x > 310 && runling.position.x < 1245 && runling.position.y > 1030 && runling.position.y < 1095) {
        lane = 11;
    } else if (runling.position.x > 210 && runling.position.x < 290 && runling.position.y > 375 && runling.position.y < 1095) {
        lane = 12;
    } else if (runling.position.x > 210 && runling.position.x < 1045 && runling.position.y > 300 && runling.position.y < 365) {
        lane = 13;
    } else if (runling.position.x > 1050 && runling.position.x < 1150 && runling.position.y > 305 && runling.position.y < 950) {
        lane = 14;
    } else if (runling.position.x > 400 && runling.position.x < 1145 && runling.position.y > 950 && runling.position.y < 1020) {
        lane = 15;
    } else if (runling.position.x > 300 && runling.position.x < 395 && runling.position.y > 475 && runling.position.y < 1020) {
        lane = 16;
    } else if (runling.position.x > 300 && runling.position.x < 949 && runling.position.y < 475 && runling.position.y > 375) {
        lane = 17;
    } else if (runling.position.x > 951 && runling.position.x < 1045 && runling.position.y > 380 && runling.position.y < 845) {
        lane = 18;
    } else if (runling.position.x > 505 && runling.position.x < 1045 && runling.position.y > 850 && runling.position.y < 945) {
        lane = 19;
    } else if (runling.position.x > 405 && runling.position.x < 495 && runling.position.y > 483 && runling.position.y < 945) {
        lane = 20;
    } else if (runling.position.x > 495 && runling.position.x < 940 && runling.position.y > 482 && runling.position.y < 545) {
        lane = 21;
        level++;
        runling.exp += 10;
        resetLevel();
    }



    if (lane == 1) {
        runling.position.x = constrain(runling.position.x, 7, 1500 - 3);
        runling.position.y = constrain(runling.position.y, 7, 93);
    } else if (lane == 2) {
        runling.position.x = constrain(runling.position.x, 1385, 1500 - 6);
        runling.position.y = constrain(runling.position.y, 7, 1300 - 6);
    } else if (lane == 3) {
        runling.position.x = constrain(runling.position.x, 6, 1500 - 6);
        runling.position.y = constrain(runling.position.y, 1207, 1300 - 6);
    } else if (lane == 4) {
        runling.position.x = constrain(runling.position.x, 5, 90);
        runling.position.y = constrain(runling.position.y, 100, 1300 - 3);
    } else if (lane == 5) {
        runling.position.x = constrain(runling.position.x, 3, 1365);
        runling.position.y = constrain(runling.position.y, 110, 193);
    } else if (lane == 6) {
        runling.position.x = constrain(runling.position.x, 1258, 1365);
        runling.position.y = constrain(runling.position.y, 110, 1190);
    } else if (lane == 7) {
        runling.position.x = constrain(runling.position.x, 110, 1365);
        runling.position.y = constrain(runling.position.y, 1110, 1190);
    } else if (lane == 8) {
        runling.position.x = constrain(runling.position.x, 110, 190);
        runling.position.y = constrain(runling.position.y, 210, 1190);
    } else if (lane == 9) {
        runling.position.x = constrain(runling.position.x, 110, 1240);
        runling.position.y = constrain(runling.position.y, 210, 290);
    } else if (lane == 10) {
        runling.position.x = constrain(runling.position.x, 1160, 1240);
        runling.position.y = constrain(runling.position.y, 210, 1090);
    } else if (lane == 11) {
        runling.position.x = constrain(runling.position.x, 205, 1240);
        runling.position.y = constrain(runling.position.y, 1035, 1090);
    } else if (lane == 12) {
        runling.position.x = constrain(runling.position.x, 210, 290);
        runling.position.y = constrain(runling.position.y, 310, 1095);
    } else if (lane == 13) {
        runling.position.x = constrain(runling.position.x, 210, 1137);
        runling.position.y = constrain(runling.position.y, 310, 365);
    } else if (lane == 14) {
        runling.position.x = constrain(runling.position.x, 1060, 1143);
        runling.position.y = constrain(runling.position.y, 310, 1018);
    } else if (lane == 15) {
        runling.position.x = constrain(runling.position.x, 305, 1143);
        runling.position.y = constrain(runling.position.y, 955, 1018);
    } else if (lane == 16) {
        runling.position.x = constrain(runling.position.x, 307, 395);
        runling.position.y = constrain(runling.position.y, 380, 1020);
    } else if (lane == 17) {
        runling.position.x = constrain(runling.position.x, 307, 1045);
        runling.position.y = constrain(runling.position.y, 385, 470);
    } else if (lane == 18) {
        runling.position.x = constrain(runling.position.x, 955, 1040);
        runling.position.y = constrain(runling.position.y, 385, 945);
    } else if (lane == 19) {
        runling.position.x = constrain(runling.position.x, 410, 1045);
        runling.position.y = constrain(runling.position.y, 855, 943);
    } else if (lane == 20) {
        runling.position.x = constrain(runling.position.x, 408, 495);
        runling.position.y = constrain(runling.position.y, 483, 943);
    } else if (lane == 21) {
        runling.position.x = 10;
        runling.position.y = 10;
        runlingMove = false;
    }

}
