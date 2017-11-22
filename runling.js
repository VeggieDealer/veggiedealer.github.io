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
    stroke("blue")
    strokeWeight(1);
    fill("blue");
    ellipse(runling.position.x, runling.position.y, 4);

    // runling speeds

    for (let i = 0; i < 20; i++) {
        if (runling.speed < runSpeed[i] && lane == i) {
            runling.speed += 0.2;
        }
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
    } else if (runling.position.x > 1250 && runling.position.x < 1375 && runling.position.y > 110 && runling.position.y < 1100) {
        lane = 6;
    } else if (runling.position.x > 200 && runling.position.x < 1375 && runling.position.y < 1190 && runling.position.y > 1105) {
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
    } else if (runling.position.x > 210 && runling.position.x < 1045 && runling.position.y > 300 && runling.position.y < 390) {
        lane = 13;
    } else if (runling.position.x > 1050 && runling.position.x < 1150 && runling.position.y > 305 && runling.position.y < 950) {
        lane = 14;
    } else if (runling.position.x > 400 && runling.position.x < 1145 && runling.position.y > 950 && runling.position.y < 1020) {
        lane = 15;
    } else if (runling.position.x > 300 && runling.position.x < 395 && runling.position.y > 380 && runling.position.y < 1020) {
        lane = 16;
    } else if (runling.position.x > 300 && runling.position.x < 1045 && runling.position.y > 305 && runling.position.y < 375) {
        lane = 17;
    } else if (runling.position.x > 1050 && runling.position.x < 1145 && runling.position.y > 380 && runling.position.y < 945) {
        lane = 18;
    } else if (runling.position.x > 405 && runling.position.x < 1045 && runling.position.y > 850 && runling.position.y < 945) {
        lane = 19;
    } else if (runling.position.x > 405 && runling.position.x < 500 && runling.position.y > 483 && runling.position.y < 945) {
        lane = 20;
    }



    if (lane == 1) {
        runling.position.x = constrain(runling.position.x, 7, 1500 - 3);
        runling.position.y = constrain(runling.position.y, 7, 93);
    } else if (lane == 2) {
        runling.position.x = constrain(runling.position.x, 1380, 1500 - 6);
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
        runling.position.x = constrain(runling.position.x, 303, 395);
        runling.position.y = constrain(runling.position.y, 380, 1020);
    } else if (lane == 17) {
        runling.position.x = constrain(runling.position.x, 300, 1045);
        runling.position.y = constrain(runling.position.y, 305, 375);
    } else if (lane == 18) {
        runling.position.x = constrain(runling.position.x, 1050, 1145);
        runling.position.y = constrain(runling.position.y, 380, 945);
    } else if (lane == 19) {
        runling.position.x = constrain(runling.position.x, 408, 1045);
        runling.position.y = constrain(runling.position.y, 850, 945);
    } else if (lane == 20) {
        runling.position.x = constrain(runling.position.x, 408, 500);
        runling.position.y = constrain(runling.position.y, 483, 945);
    }

}
