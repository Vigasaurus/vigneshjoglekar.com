var grid;
var cols;
var rows;
var w = 20;
var cnv;
var totalMines = 1;
var options = [];
var dead = false;
var HT, WD;
var gameover = false;
var flagged = 0;
var winT, lose, cont;
var cnv_base;
var runTime = 0;
var f = 1;

function setup() {
    console.log("Version 4.36");
    winT = document.getElementById("win");
    lose = document.getElementById("lose");
    cont = document.getElementById("cont");
    reset();
}

function reset() {
    f = 1;
    winT.style.visibility = "hidden";
    lose.style.visibility = "hidden";
    cont.style.visibility = "hidden";
    lose.style.display = "none";
    winT.style.display = "none";
    cont.style.display = "none";
    cnv = cnv_base;
    options = [];
    totalMines = document.getElementById("mine_slider").value;
    HT = document.getElementById("height_slider").value * 20;
    WD = document.getElementById("width_slider").value * 20;
    dead = false;
    gameover = false;
    cnv = createCanvas(WD, HT);
    cnv.parent("p5js-container");
    cols = floor(WD / w);
    rows = floor(HT / w);
    grid = make2DArray(cols, rows);
    flagged = 0;

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j, w, 0);
        }
    }

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            options.push([i, j]);
        }
    }

    function make2DArray(cols, rows) {
        var arr = new Array(cols);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = new Array(rows);
        }
        return arr;
    }

    nextFrame();

    for (var n = 0; n < totalMines; n++) {
        var index = floor(random(options.length));
        var choice = options[index];
        var i = choice[0];
        var j = choice[1];
        options.splice(index, 1);
        grid[i][j].mine = true;
    }

    recount();
}

function recount() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            var cell = grid[i][j];
            cell.countMines();
        }
    }
}

function gameOver() {

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            var cell = grid[i][j];
            cell.gameover = true;
            cell.revealed = true;
        }
    }
    gameover = true;
    nextFrame();
}

function mousePressed() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {
                var cell = grid[i][j];
                if (mouseButton == LEFT) {
                    cell.question = false;
                    if (f == 1) {
                        if (cell.mine === true) {
                            cell.mine = false;
                            addMine(cell.i, cell.j);
                            recount();
                        }
                    }
                    cell.reveal(f);
                    f = 0;
                    if (cell.mine && !cell.flag) {
                        cell.killer = true;
                        dead = true;
                    }
                }
                if (mouseButton == RIGHT && !dead) {
                    if (cell.flag) {
                        cell.question = true;
                        cell.flag = false;
                    } else if (cell.question) {
                        cell.question = false;
                        cell.hide();
                    } else if (!cell.revealed) {
                        cell.flag = true;
                        cell.reveal();
                    }
                }

            }
        }
    }
    if (!dead) {

        nextFrame();
    }
}

function addMine(oldI, oldJ) {
    for (var g = 0; g < cols; g++) {
        for (var h = 0; h < rows; h++) {
            if (!grid[g][h].mine)
                if (g != oldI && h != oldJ) {
                    grid[g][h].mine = true;
                    return;
                }

        }
    }
}


function draw() {
    if (flagged == totalMines) {
        winT.style.visibility = "visible";
        cont.style.visibility = "visible";
        winT.style.display = "block";
        cont.style.display = "block";
    }
    flagged = 0;
    if (gameover) {
        lose.style.visibility = "visible";
        cont.style.visibility = "visible";
        lose.style.display = "block";
        cont.style.display = "block";
        return;
    }
    if (dead) {
        gameOver();
    }
}

function nextFrame() {
    background(175);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            var cell = grid[i][j];
            cell.show();
            if (cell.mine && cell.flag)
                flagged++;
            if (cell.flag && !cell.mine || cell.question || !cell.revealed)
                flagged = -100000000;
        }
    }

}
