let runlingDestination;
let runling = {
  position: 0,
  speed: 2
}
let runlingMove = false;
let moveVector = false;
drones = [];
let baseDrone = {
  x: 0,
  y: 0,
  r: 15,
  xMove: 2,
  yMove: 2
}
let lane = 0;
let rise;
let run;
let slope;
let speedComplete = false;
let godMode = -1
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
  createCanvas(1500, 1300);
  runling.position = createVector(10, 10);
  runlingDestination = createVector(0, 0);
  droneNumber = 0;
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
  background(200, 200, 200);
  fill(200, 200, 200);
  //safe zones
  fill("white");
  rect(0, 0, 100, 100);
  rect(1377, 0, 122, 96);

  drawMap();
  drawCharacter();
  boundaries();

  stroke(0);



  //angled movement?
  rise = runlingDestination.y - runling.position.y;
  run = runlingDestination.x - runling.position.x;
  slope = rise / run;

  // Assigning the drones random spots within the lane and giving them random speeds
  if (droneNumber < 15) {
    drones.push(Object.assign({}, baseDrone));
    drones[drones.length - 1].x = random(100, 1350);
    drones[drones.length - 1].y = random(10, 95);
    drones[drones.length - 1].xMove = random(-2, 2);


    while (drones[drones.length - 1].xMove < 0.2 && drones[drones.length - 1].xMove > -0.2) {
      drones[drones.length - 1].xMove = random(-2, 2);
    }
    drones[drones.length - 1].yMove = random(-2, 2);
    while (drones[drones.length - 1].yMove < 0.1 && drones[drones.length - 1].yMove > -0.1) {
      drones[drones.length - 1].yMove = random(-2, 2);
    }

    droneNumber++;

    //Drawing Drones in lane 2
  }
  if (droneNumber < 15) {
    drones.push(Object.assign({}, baseDrone));
    drones[drones.length - 1].x = random(1380, 1490);
    drones[drones.length - 1].y = random(107, 1100);
    drones[drones.length - 1].xMove = random(-1, 1);
    drones[drones.length - 1].yMove = random(-1, 1);
  }


  // Creating the drones
  for (i = 0; i < drones.length; i++) {
    fill("black");
    ellipse(drones[i].x, drones[i].y, drones[i].r);
    drones[i].x += drones[i].xMove;
    drones[i].y += drones[i].yMove;
    if (drones[i].x < 107 && drones[i].x > 100 && drones[i].y > 10 && drones[i].y < 97) {
      drones[i].xMove *= -1;
    } else if (drones[i].x > 1370 && drones[i].x < 1375 && drones[i].y > 10 && drones[i].y < 97) {
      drones[i].xMove *= -1;
    }


    if (drones[i].y < 10) {
      drones[i].yMove *= -1;
    } else if (drones[i].y > 97 && drones[i].y < 100 && drones[i].x > 107) {
      drones[i].yMove *= -1;
    } else if (drones[i].y > 97 && drones[i].y < 100 && drones[i].x < 1370) {
      drones[i].yMove *= -1;
    }

    if (drones[i].x < 1380 && drones[i].x > 1375 && drones[i].y > 100) {
      drones[i].xMove *= -1;
    } else if (drones[i].x > width && drones[i].y > 100) {
      drones[i].xMove *= -1;
    }
    if (drones[i].y < 100 && drones[i].x < width && drones[i].x > 1380) {
      drones[i].yMove *= -1;
    } else if (drones[i].y > 1200 && drones[i].x < width && drones[i].x > 1380) {
      drones[i].yMove *= -1;
    }


    //Drone Collision
    if (dist(runling.position.x, runling.position.y, drones[i].x, drones[i].y) < drones[i].r - 3 && godMode == -1) {
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
  if (keyCode == UP_ARROW) {
    runling.speed += 0.5;
  } else if (keyCode == DOWN_ARROW) {
    runling.speed -= 0.5;
  }
  if (keyCode == 71) {
    godMode *= -1
  }

}
