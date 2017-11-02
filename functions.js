function drawMap() {
    strokeWeight(10);
    stroke(0);
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

function drawCharacter() {
    stroke("blue")
    strokeWeight(1);
    fill("blue");
    ellipse(runling.position.x, runling.position.y, 4);

    // runling speeds

    for (let i = 0; i < 20; i ++) {
        if (runling.speed < runSpeed[i] && lane == i) {
            runling.speed += 0.2;
        }
    }
    
    

//    if (runling.speed < 0.8 && lane == 2) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 1 && lane == 3) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 1.2 && lane == 4) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 1.4 && lane == 5) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 1.6 && lane == 6) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 1.8 && lane == 7) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 2 && lane == 8) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 2.2 && lane == 9) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 2.4 && lane == 10) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 2.6 && lane == 11) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 2.8 && lane == 12) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 3 && lane == 13) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 3.2 && lane == 14) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 3.4 && lane == 15) {
//        runling.speed += 0.2;
//    } else if (runling.speed < 3.6 && lane == 16) {
//        runling.speed += 0.2;
//    }
}

function boundaries() {
    //checking which lane the character is in

    if (runling.position.x > 0 && runling.position.x < 1375 && runling.position.y > 0 && runling.position.y < 100) {
        lane = 1;
    } else if (runling.position.x > 1375 && runling.position.x < width && runling.position.y > 0 && runling.position.y < 1205) {
        lane = 2;
    } else if (runling.position.x < width && runling.position.x > 95 && runling.position.y > 1200 && runling.position.y < height) {
        lane = 3;
    } else if (runling.position.x < 100 && runling.position.x > 0 && runling.position.y > 200 && runling.position.y < height) {
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
    } else if (runling.position.x > 210 && runling.position.x < 290 && runling.position.y > 300 && runling.position.y < 1095) {
        lane = 12;
    } else if (runling.position.x > 210 && runling.position.x < 1150 && runling.position.y > 300 && runling.position.y < 390) {
        lane = 13;
    } else if (runling.position.x > 1050 && runling.position.x < 1150 && runling.position.y > 305 && runling.position.y < 1020) {
        lane = 14;
    } else if (runling.position.x > 300 && runling.position.x < 1145 && runling.position.y > 950 && runling.position.y < 1020) {
        lane = 15;
    } else if (runling.position.x > 300 && runling.position.x < 395 && runling.position.y > 380 && runling.position.y < 1020) {
        lane = 16;
    } else if (runling.position.x > 300 && runling.position.x < 1045 && runling.position.y > 305 && runling.position.y < 375) {
        lane = 17;       
    } else if (runling.position.x > 1050 && runling.position.x < 1145 && runling.position.y > 380 && runling.position.y < 945) {
        lane = 18;
    } else if (runling.position.x > 305 && runling.position.x < 1145 && runling.position.y > 850 && runling.position.y < 945) {
        lane = 19;
    } else if (runling.position.x > 400 && runling.position.x < 495 && runling.position.y > 580 && runling.position.y < 945) {
        lane = 20;
    } else {
        lane = 1;
        if (level == 1) {
            level ++;
        }
    }
               
               
               
    if (lane == 1) {
        runling.position.x = constrain(runling.position.x, 3, width - 3);
        runling.position.y = constrain(runling.position.y, 3, 93);
    } else if (lane == 2) {
        runling.position.x = constrain(runling.position.x, 1385, width - 3);
        runling.position.y = constrain(runling.position.y, 3, height - 3);
    } else if (lane == 3) {
        runling.position.x = constrain(runling.position.x, 0, width - 3);
        runling.position.y = constrain(runling.position.y, 1210, height - 3);
    } else if (lane == 4) {
        runling.position.x = constrain(runling.position.x, 0, 90);
        runling.position.y = constrain(runling.position.y, 100, height - 3);
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
        runling.position.x = constrain(runling.position.x, 207, 290);
        runling.position.y = constrain(runling.position.y, 310, 1095);
    } else if (lane == 13) {
        runling.position.x = constrain(runling.position.x, 210, 1137);
        runling.position.y = constrain(runling.position.y, 310, 365);
    } else if (lane == 14) {
        runling.position.x = constrain(runling.position.x, 210, 1137);
        runling.position.y = constrain(runling.position.y, 310, 365);
    } else if (lane == 15) {
        runling.position.x = constrain(runling.position.x, 1050, 1145);
        runling.position.y = constrain(runling.position.y, 305, 1020);
    } else if (lane == 16) {
        runling.position.x = constrain(runling.position.x, 300, 395);
        runling.position.y = constrain(runling.position.y, 380, 1020);
    } else if (lane == 17) {
        runling.position.x = constrain(runling.position.x, 300, 1045);
        runling.position.y = constrain(runling.position.y, 305, 375);
    } else if (lane == 18) {
        runling.position.x = constrain(runling.position.x, 1050, 1145);
        runling.position.y = constrain(runling.position.y, 380, 945);
    } else if (lane == 19) {
        runling.position.x = constrain(runling.position.x, 305, 1145);
        runling.position.y = constrain(runling.position.y, 850, 945);
    } else if (lane == 20) {
        runling.position.x = constrain(runling.position.x, 400, 495);
        runling.position.y = constrain(runling.position.y, 580, 945);
    }

}
