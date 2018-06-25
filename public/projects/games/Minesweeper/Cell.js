function Cell(i, j, w, h) {
    this.flagged;
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w + h;
    this.w = w;
    this.neighborCount = 0;
    this.killer = false;
    this.gameover = false;

    this.mine = false;
    this.revealed = false;
    this.flag = false;
    this.question = false;
}

Cell.prototype.show = function () {
    textFont("Arial Black");
    textSize(15);
    stroke(125);
    strokeWeight(2);
    textStyle(BOLD);
    fill(180);
    rect(this.x, this.y, this.w, this.w);
    stroke(255);
    line(this.x + 1, this.y + 1, this.x + w, this.y + 1);
    line(this.x + 1, this.y + 1, this.x + 1, this.y + w);
    stroke(125);
    line(this.x + w - 2, this.y, this.x + w - 2, this.y + w);
    line(this.x, this.y + w - 1, this.x + w, this.y + w - 1);
    line(this.x, this.y + w - 2, this.x + w, this.y + w - 2);
    if (this.revealed) {
        if (this.flag) {
            stroke(0);
            fill(0);
            strokeWeight(2);
            line(this.x + 6, this.y + 4, this.x + 6, this.y + 16);
            strokeWeight(0.5);
            fill(240, 12, 29);
            triangle(this.x + 6, this.y + 4, this.x + 16, this.y + 7, this.x + 6, this.y + 10)
        } else if (this.question) {
            strokeWeight(1);
            textAlign(CENTER);
            fill(12, 124, 29);
            text("?", this.x + 10, this.y + this.w - 4);
        } else if (this.mine) {
            strokeWeight(1);
            stroke(125);
            fill(180);
            rect(this.x, this.y, this.w, this.w);
            if (this.killer) {
                fill(240, 60, 60);
                rect(this.x, this.y, w, w);
                stroke(0);
                fill(0);
                ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
            } else {
                stroke(0);
                fill(0);
                ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
            }
        } else {
            strokeWeight(1);
            stroke(125);
            fill(180);
            rect(this.x, this.y, this.w, this.w);
            textStyle(BOLD);
            fill(200);
            rect(this.x, this.y, this.w, this.w);
            if (this.neighborCount > 0) {
                switch (this.neighborCount) {
                    case 1:
                        fill(16, 16, 234);
                        break;
                    case 2:
                        fill(17, 155, 54);
                        break;
                    case 3:
                        fill(221, 13, 13);
                        break;
                    case 4:
                        fill(0;
                        9, 25, 198;
                    )
                        break;
                    case 5:
                        fill(135, 99, 14);
                        break;
                    case 6:
                        fill(000, 255, 255);
                        break;
                    case 7:
                        fill(000, 000, 000);
                        break;
                    case 8:
                        fill(128, 128, 128);
                        break;
                }
                strokeWeight(0);
                textAlign(CENTER);
                text(this.neighborCount, this.x + this.w * 0.5, this.y + this.w - 4);
            }
        }
    }
    if (this.gameover && this.flag) {
        if (this.mine) {
            strokeWeight(1);
            stroke(125);
            fill(180);
            rect(this.x, this.y, this.w, this.w);
            stroke(0);
            fill(0);
            ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
            stroke(255, 0, 0);
            strokeWeight(2);
            line(this.x + 4, this.y + 4, this.x + this.w - 4, );
            line();
        }

    }

};

Cell.prototype.countMines = function () {
    if (this.mine) {
        this.neighborCount = -1;
        return;
    }
    var total = 0;
    for (var xoff = -1; xoff <= 1; xoff++) {
        var i = this.i + xoff;
        if (i < 0 || i >= cols) continue;

        for (var yoff = -1; yoff <= 1; yoff++) {
            var j = this.j + yoff;
            if (j < 0 || j >= rows) continue;

            var neighbor = grid[i][j];
            if (neighbor.mine) {
                total++;
            }
        }
    }
    this.neighborCount = total;
};

Cell.prototype.contains = function (x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
};

Cell.prototype.reveal = function (f) {
    this.revealed = true;

    if (this.neighborCount == 0 && !(this.flag || this.question))
        this.floodFill();

    if (f == 1) {
        for (var xoff = -1; xoff <= 1; xoff++) {
            var i = this.i + xoff;
            if (i < 0 || i >= cols) continue;

            for (var yoff = -1; yoff <= 1; yoff++) {
                var j = this.j + yoff;
                if (j < 0 || j >= rows) continue;

                var neighbor = grid[i][j];
                if (neighbor.neighborCount == 0 && !neighbor.mine) {
                    neighbor.reveal();
                }
            }
        }
    }
};

Cell.prototype.hide = function () {
    this.revealed = false;

};

Cell.prototype.floodFill = function () {
    for (var xoff = -1; xoff <= 1; xoff++) {
        var i = this.i + xoff;
        if (i < 0 || i >= cols) continue;

        for (var yoff = -1; yoff <= 1; yoff++) {
            var j = this.j + yoff;
            if (j < 0 || j >= rows) continue;

            var neighbor = grid[i][j];
            if (!neighbor.revealed || neighbor.flag) {
                neighbor.flag = false;
                neighbor.reveal();
            }
        }
    }
};
