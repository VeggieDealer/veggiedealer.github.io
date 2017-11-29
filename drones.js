function sketchDrone(xMin, xMax, yMin, yMax, magSpeed) {
    if (droneNumber < 6) {
        drones.push(Object.assign({}, baseDrone));
        drones[drones.length - 1].position = createVector();
        drones[drones.length - 1].position.x = random(xMin, xMax);
        drones[drones.length - 1].position.y = random(yMin, yMax);
        drones[drones.length - 1].move = p5.Vector.random2D();
        drones[drones.length - 1].move.setMag(magSpeed);


    }
}

function sketchBlueDrone() {
    if (frameCount % 4 == 0) {
        blueDrones.push(new baseBlueDrone());
        blueDrones[blueDrones.length - 1].move.setMag(3);
    }


    for (j = 0; j < blueDrones.length; j++) {
        fill("blue");
        ellipse(blueDrones[j].position.x, blueDrones[j].position.y, blueDrones[j].r);
        blueDrones[j].position.add(blueDrones[j].move);

        if (blueDrones[j].position.x < 0 || blueDrones[j].position.x > 1500 || blueDrones[j].position.y < 0 || blueDrones[j].position.y > 1300) {
            blueDrones.splice(j, 1);
        }

        //Blue Drone Collision with runling
        if (dist(runling.position.x, runling.position.y, blueDrones[j].position.x, blueDrones[j].position.y) < blueDrones[j].r - 3 && godMode == -1 && invincible == -1) {
            runling.position.x = 10;
            runling.position.y = 10;
            runlingMove = false;
        }

    }

}

function droneBounce() {
    // Creating the drones
    for (i = 0; i < drones.length; i++) {
        fill("black");
        ellipse(drones[i].position.x, drones[i].position.y, drones[i].r);
        drones[i].position.add(drones[i].move);

        //lane one drones rebounce
        if (drones[i].position.x < 107 && drones[i].position.x > 100 && drones[i].position.y > 10 && drones[i].position.y < 88) {
            drones[i].move.x *= -1;
        } else if (drones[i].position.x > 1370 && drones[i].position.x < 1375 && drones[i].position.y > 10 && drones[i].position.y < 88) {
            drones[i].move.x *= -1;
        }
        if (drones[i].position.y < 10) {
            drones[i].move.y *= -1;
        } else if (drones[i].position.y > 88 && drones[i].position.y < 100 && drones[i].position.x > 107 && drones[i].position.y < 110) {
            drones[i].move.y *= -1;
        } else if (drones[i].position.y > 88 && drones[i].position.y < 100 && drones[i].position.x < 1370) {
            drones[i].move.y *= -1;
        }


        //lane two Drones rebounce
        if (drones[i].position.x < 1385 && drones[i].position.x > 1375 && drones[i].position.y > 100) {
            drones[i].move.x *= -1;
        } else if (drones[i].position.x > 1500 - 10 && drones[i].position.y > 100) {
            drones[i].move.x *= -1;
        }
        if (drones[i].position.y < 105 && drones[i].position.x < 1500 && drones[i].position.x > 1380) {
            drones[i].move.y *= -1;
        } else if (drones[i].position.y > 1192 && drones[i].position.x < 1500 && drones[i].position.x > 1380) {
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
        } else if (drones[i].position.y > 1300 - 10) {
            drones[i].move.y *= -1;
        }

        //lane four Drones rebounce
        if (drones[i].position.x < 10 && drones[i].position.x > 0 && drones[i].position.y > 100 && drones[i].position.y < 1212) {
            drones[i].move.x *= -1;
        } else if (drones[i].position.x < 100 && drones[i].position.x > 87 && drones[i].position.y > 100 && drones[i].position.y < 1212) {
            drones[i].move.x *= -1;
        }
        if (drones[i].position.x < 95 && drones[i].position.x > 0 && drones[i].position.y < 210 && drones[i].position.y > 205) {
            drones[i].move.y *= -1;
        } else if (drones[i].position.x < 95 && drones[i].position.x > 0 && drones[i].position.y > 1192) {
            drones[i].move.y *= -1;
        }


        //lane five Drones reb0unce 
        if (drones[i].position.x < 110 && drones[i].position.x > 105 && drones[i].position.y > 100 && drones[i].position.y < 190) {
            drones[i].move.x *= -1;
        } else if (drones[i].position.x > 1240 && drones[i].position.x < 1250 && drones[i].position.y > 110 && drones[i].position.y < 190) {
            drones[i].move.x *= -1;
        }
        if (drones[i].position.x > 110 && drones[i].position.x < 1250 && drones[i].position.y < 113 && drones[i].position.y > 108) {
            drones[i].move.y *= -1;
        } else if (drones[i].position.x > 110 && drones[i].position.x < 1250 && drones[i].position.y > 185 && drones[i].position.y < 190) {
            drones[i].move.y *= -1;
        }
        //lane six Drones rebounce
        if (drones[i].position.x < 1260 && drones[i].position.x > 1250 && drones[i].position.y < 1110 && drones[i].position.y > 200) {
            drones[i].move.x *= -1;
        } else if (drones[i].position.x > 1360 && drones[i].position.x < 1370 && drones[i].position.y < 1110 && drones[i].position.y > 200) {
            drones[i].move.x *= -1;
        }
        
        if (drones[i].position.y < 210 && drones[i].position.y > 200 && drones[i].position.x > 1255 && drones[i].position.x < 1365) {
            drones[i].move.y *= -1;
        } else if (drones[i].position.y < 1100 && drones[i].position.y > 1095 && drones[i].position.x > 1255 && drones[i].position.x < 1365) {
            drones[i].move.y *= -1;
        }
        // lane seven Drones rebounce
        if (drones[i].position.x < 205 && drones[i].position.x > 200 && drones[i].position.y > 1100 && drones[i].position.y < 1190) {
            drones[i].move.x *= -1;
        } else if (drones[i].position.x < 1250 && drones[i].position.x > 1245 && drones[i].position.y > 1100 && drones[i].position.y < 1190) {
            drones[i].move.x *= -1;
        }
        
        if (drones[i].position.y > 1105 && drones[i].position.y < 1110 && drones[i].position.x < 1250 && drones[i].position.x > 205) {
            drones[i].move.y *= -1;
        } else if (drones[i].position.y < 1190 && drones[i].position.y > 1185 && drones[i].position.x < 1250 && drones[i].position.x > 205) {
            drones[i].move.y *= -1;
        }


        //Drone Collision with runling
        if (dist(runling.position.x, runling.position.y, drones[i].position.x, drones[i].position.y) < drones[i].r - 3 && godMode == -1 && invincible == -1) {
            runling.position.x = 10;
            runling.position.y = 10;
            runlingMove = false;
        }

    }
}
