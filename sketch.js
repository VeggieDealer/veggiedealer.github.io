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



// SETUP FUNCTION - Runs once at beginning of program
function setup() {
  createCanvas(1500, 1300);
  runling.position = createVector(10, 10);
  runlingDestination = createVector(0, 0);
  droneNumber = 0;
  baseDrone.move = p5.Vector.random2D(-1,1);
  baseDrone.position = createVector(0,0);
  //Calling localStorage
  runling.speed = parseFloat(localStorage.getItem("speed"));    

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
  background(200, 200, 200);
  fill(200, 200, 200);

  if (runling.speed == NaN) {
      runling.speed = 0.7;
  }
  fill("white");
  //safe zone 1
  rect(0, 0, 100, 100);
  //safe zone 2
  rect(1377, 0, 122, 96);
  //safe zone 3
  rect(1377, 1200, 120, 99);
  //safe zone 4
  rect(0, 1200, 100, 99);
  drawMap();
  drawCharacter();
  boundaries();

  stroke(0);


  // Assigning the drones random spots within the lane and giving them random speeds
  //lane 1 drone draw
  if (droneNumber < 11) {
    drones.push(Object.assign({}, baseDrone));
    drones[drones.length - 1].position = createVector();
    drones[drones.length - 1].position.x = random(100, 1300);
    drones[drones.length - 1].position.y = random(10, 95);
    drones[drones.length - 1].move = p5.Vector.random2D();
    drones[drones.length - 1].move.setMag(1.5);


    droneNumber++;

    //Drawing Drones in lane 2
  }



  if (droneNumber < 11) {
    drones.push(Object.assign({}, baseDrone));
    drones[drones.length - 1].position = createVector();
    drones[drones.length - 1].position.x = random(1380, 1490);
    drones[drones.length - 1].position.y = random(110, 1100);
    drones[drones.length - 1].move = p5.Vector.random2D();
    drones[drones.length - 1].move.setMag(1.5);


  }
  //Drawing drones in lane 3
  if (droneNumber < 11) {
    drones.push(Object.assign({}, baseDrone));
    drones[drones.length - 1].position = createVector();
    drones[drones.length - 1].position.x = random(160, 1300);
    drones[drones.length - 1].position.y = random(1220, height - 11);
    drones[drones.length - 1].move = p5.Vector.random2D();
    drones[drones.length - 1].move.setMag(1.5);
  }

  //

  // Creating the drones
  for (i = 0; i < drones.length; i++) {
    fill("black");
    ellipse(drones[i].position.x, drones[i].position.y, drones[i].r);
    drones[i].position.add(drones[i].move);
    //lane one drones rebounce
    if (drones[i].position.x < 107 && drones[i].position.x > 100 && drones[i].position.y > 10 && drones[i].position.y < 97) {
      drones[i].move.x *= -1;
    } else if (drones[i].position.x > 1370 && drones[i].position.x < 1375 && drones[i].position.y > 10 && drones[i].position.y < 97) {
      drones[i].move.x *= -1;
    }
    if (drones[i].position.y < 10) {
      drones[i].move.y *= -1;
    } else if (drones[i].position.y > 97 && drones[i].position.y < 100 && drones[i].position.x > 107) {
      drones[i].move.y *= -1;
    } else if (drones[i].position.y > 97 && drones[i].position.y < 100 && drones[i].position.x < 1370) {
      drones[i].move.y *= -1;
    }


    //lane two Drones rebounce
    if (drones[i].position.x < 1380 && drones[i].position.x > 1375 && drones[i].position.y > 100) {
      drones[i].move.x *= -1;
    } else if (drones[i].position.x > width && drones[i].position.y > 100) {
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
    } else if (drones[i].position.y > height) {
      drones[i].move.y *= -1;
    }


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
  if (keyCode == UP_ARROW) {
    runling.speed += 0.2;
  } else if (keyCode == DOWN_ARROW) {
    runling.speed -= 0.2;
  }
  if (keyCode == 71) {
    godMode *= -1
  }

}
