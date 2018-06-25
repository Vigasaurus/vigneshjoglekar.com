var s;
var scl = 20;
var food;
var clicked = false;
var HT = window.innerHeight;
var WD = HT;
var cheats = false;
var dead = false;
var loc = HT / 2;
var pause = false;
var justUnpaused = false;
var tempXSpeed;
var tempYSpeed;
var drawnPause = false;
var cnv;
var cheatCounter = 0;
var moveQueue = [];


function setup() {
    HT = HT - (HT % 100);
    WD = HT;
    console.log("By: Vigasaurus Rex\nVersion: 3.0.000");
    cnv = createCanvas(WD + 200, HT);
    if (loc % 20 !== 0)
        loc -= loc % 20;
    s = new Snake(loc, loc, HT);
    frameRate(1000);
    pickLocation();
    cnv.parent("p5js-container")
    
}

function pickLocation() {
    var cols = floor(WD / scl);
    var rows = floor(HT / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
    if (s.checkFood(food))
        pickLocation();
}

function draw() {
    if (dead)
        return;
    if (pause && drawnPause)
        return;
    //MOVE SNAKE
    if (moveQueue.length > 0) {
        var currentMove = moveQueue.shift();
        //console.log('currentMove', currentMove.x , ", " , currentMove.y);
        s.dir(currentMove.x, currentMove.y);
        moveQueue.shift();
    }


    background(51);
    fill(100);
    rect(19, 19, WD - 19, HT - 39);

    fill(0, 0, 0, 100);
    rect(0, 0, WD + 200, HT);
    fill(100);
    rect(WD, 19, 1, HT - 39); //TOP
    rect(19, 19, WD - 19, 1); // RIGHT
    rect(19, 19, 1, HT - 39); //LEFT
    rect(19, HT - 20, WD - 19, 1); //BOTTOM
    score();
    //console.log(s.getFramerate());

    if (s.eat(food)) {
        if (s.gLength() < 35)
            s.subTime(.75);
        else
            s.subTime(1.5);
        pickLocation();
    }
    if (s.death() || s.update()) {

        fill(244, 69, 66, 99);
        rect(19, 19, WD - 19, HT - 39);
        s.show();
        textAlign(CENTER);
        fill(244, 69, 66);
        textSize(50);
        textFont("Arial Black");
        text("Score: " + s.gLength(), HT / 2, HT / 2 - 40);
        fill(100);
        textSize(30);
        text("Press Space to Restart!", HT / 2, HT / 2);
        moveQueue.length = 0;
        moveQueue = [];
        s.dir(0, 0);
        if(document.getElementById("currentHighscore").innerText < s.gLength())
            document.getElementById("currentHighscore").innerText = "" + s.gLength();
        
        dead = true;
        return;
    }


    if (pause) {
        if (!justUnpaused) {
            tempXSpeed = s.getX();
            tempYSpeed = s.getY();
        }
        s.setSpeeds(0, 0);

        fill(66, 69, 244, 99);
        rect(19, 19, WD - 19, HT - 39);

        textAlign(CENTER);
        fill(244, 69, 66);
        textSize(50);
        textFont("Arial Black");
        text("Paused", HT / 2, HT / 2 - 40);
        fill(100);
        textSize(30);
        text("Click to Resume!", HT / 2, HT / 2);
        drawnPause = true;
        return;
    }
    
    justUnpaused = false;
    drawnPause = false;

    //console.log(s.getLength());
    s.show();
    clicked = false;

    fill(247, 97, 4);
    ellipseMode(CORNER);
    rect(food.x, food.y, scl, scl);
    wait(s.getSpeed());

}

score = function () {
    var everCheated = false;
    textAlign(CENTER);
    var locX = WD + 100;
    var locY = HT - 150;
    fill(26, 213, 242);
    textSize(25);
    textFont("Arial Black");
    text("Score: " + s.gLength(), locX, locY);
    if (cheats)
        everCheated = true;
    if (everCheated) {
        fill(200, 0, 0);
        textSize(25);
        textFont("Arial Black");
        text("YOU HAVE", locX, locY - 65);
        text("CHEATED!", locX, locY - 40);
    }


};

function keyPressed() {
    if (keyCode === UP_ARROW && clicked == false) {

        moveQueue.unshift(createVector(0, -1));
        //s.dir(0,-1);
        //console.log("UP " + cheatCounter);
        //clicked = true;
        if (cheatCounter === 0)
            cheatCounter++;
        else if (cheatCounter === 1)
            cheatCounter++;
        else
            cheatCounter = 0;

    } else if (keyCode === DOWN_ARROW && clicked == false) {

        moveQueue.unshift(createVector(0, 1));
        //s.dir(0, 1);
        //console.log("DOWN " + cheatCounter);
        //clicked = true;
        if (cheatCounter === 2)
            cheatCounter++;
        else if (cheatCounter === 3)
            cheatCounter++;
        else
            cheatCounter = 0;


    } else if (keyCode === RIGHT_ARROW && clicked == false) {


        moveQueue.unshift(createVector(1, 0));
        //s.dir(1, 0);
        //console.log("RIGHT " + cheatCounter);
        //clicked = true;

        if (cheatCounter === 5)
            cheatCounter++;
        else if (cheatCounter === 7)
            cheatCounter++;
        else
            cheatCounter = 0;

    } else if (keyCode === LEFT_ARROW && clicked == false) {

        moveQueue.unshift(createVector(-1, 0));
        //s.dir(-1, 0);
        //console.log("LEFT " + cheatCounter);
        //clicked = true;

        if (cheatCounter === 4)
            cheatCounter++;
        else if (cheatCounter === 6)
            cheatCounter++;
        else
            cheatCounter = 0;


    } else if (keyCode === ESCAPE) {
        pause = true;
    } else if (keyCode == 32) {

        if (cheats == true) {
            s.total += 3;
        }

        if (dead) {
            s = new Snake(loc, loc, HT);
            dead = false;
            cheats = false;
            moveQueue.length = 0;
            moveQueue = [];
            s.dir(0, 0);
            document.getElementById('name_sub').readOnly = false;
            document.getElementById('name_sub').value = "";
            return false;
        }
    } else if (keyCode === 65) {

        //console.log("A " + cheatCounter);

        if (cheatCounter === 9) {
            if(document.getElementById('name_sub').value == "Vigasaurus"){
            cheats = true;
            document.getElementById('name_sub').readOnly = true;
            s.total += 30;
            cheatCounter = 0;
            }
        } else
            cheatCounter = 0;

    } else if (keyCode === 66) {

        //console.log("B " + cheatCounter);

        if (cheatCounter === 8)
            cheatCounter++;
        else
            cheatCounter = 0;

    }
}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

function mouseClicked() {
    if (cheats)
        s.total++;


    if (pause) {
        pause = false;
        justUnpaused = true;
    }


}
