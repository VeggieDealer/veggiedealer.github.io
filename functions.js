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

}

function cameraControl() {
    camera(runling.position.x - width / 2, runling.position.y - height / 2, 0);
}
