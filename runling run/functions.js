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
  line(500, 550, 850, 550);
  line(850, 550, 850, 775);
  line(850, 775, 600, 775);
  line(600, 775, 600, 650)
}

function drawCharacter() {
  stroke("blue")
  strokeWeight(1);
  fill("blue");
  ellipse(runling.position.x, runling.position.y, 4);

}

function boundaries() {
  //checking which lane the character is in

  if (runling.position.x > 0 && runling.position.x < 1375 && runling.position.y > 0 && runling.position.y < 107) {
    lane = 1;
  } else if (runling.position.x > 1370 && runling.position.x < width && runling.position.y > 0 && runling.position.y < height) {
    lane = 2;
  } else if (runling.position.x < 1375 && runling.position.x > 0 && runling.position.y > 1200 && runling.position.y < height) {
    lane = 3;
  } else if (runling.position.x < 100 && runling.position.x > 0 && runling.position.y > 95 && runling.position.y < height) {
    lane = 4;
  }


  //boundaries
  if (runling.position.x <= 5) {
    runling.position.x = 5;
  }
  if (runling.position.y <= 5) {
    runling.position.y = 5;
  }
  if (runling.position.y > 93 && lane == 1) {
    runling.position.y = 90;
  } else if (runling.position.x > 1370 && runling.position.x < 1380 && runling.position.y > 107 && runling.position.y < 1200 && lane == 2) {
    runling.position.x = 1381;
  }
}
