function Snake(x, y, size) {
    this.xspeed = 0;
    this.yspeed = 0;
    this.x = x;
    this.y = y;
    this.total = 0;
    this.tail = [];
    this.score = 0;
    this.speed = 95;
    this.size = size;
    var scl = 20;
    this.dead = false;
    this.dPos = createVector(0, 0);
    console.log("Snake Version: 3.0.000");

    this.setDeath = function (pos) {
        this.dPos = createVector(pos.x, pos.y);
    };

    this.checkFood = function (food) {
        if (food.x == 0 || food.x + scl == WD || food.y == 0 || food.y + scl == HT)
            return true;
        for (var i = 0; i < this.tail.length; i++) {
            if (this.tail[i].x == food.x && this.tail[i].y == food.y)
                return true;

        }
        return false;
    };

    this.eat = function (pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total += 3;
            this.score += ceil(random(13, 15));
            return true;
        } else {
            return false;
        }
    };

    this.getScore = function () {
        return this.score;
    };

    this.dir = function (x, y) {
        if (!(x * -1 == this.xspeed))
            this.xspeed = x;
        if (!(y * -1 == this.yspeed))
            this.yspeed = y;
    };

    this.setSpeeds = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    };

    this.getX = function () {
        return this.xspeed;
    };

    this.getY = function () {
        return this.yspeed;
    };

    this.setTimer = function (time) {
        this.speed = time;
    };

    this.subTime = function (time) {
        if (this.speed > 40)
            this.speed -= time;
    };

    this.getSpeed = function () {
        return this.speed;
    };

    this.gLength = function () {
        if (this.tail.length === 0)
            return 1;

        return this.tail.length - 1;
    };


    this.death = function () {
        for (var i = 0; i < this.tail.length - 2; i++) {
            if (typeof this.tail[i] == 'undefined')
                break;
            var pos = this.tail[i];
            var xDist = this.x - pos.x;
            var yDist = this.y - pos.y;

            if (xDist === 20 && this.xspeed === -1 && yDist === 0) {
                this.setSpeeds(0, 0);
                fill(255, 0, 0); //RED
                rect(this.x, this.y, scl, scl);
                fill(116, 255, 30); // GREEN //DEFAULT
                this.dead = true;
                return true;
            }
            if (xDist === -20 && this.xspeed === 1 && yDist === 0) {
                this.setSpeeds(0, 0);
                fill(255, 0, 0); //RED
                rect(this.x, this.y, scl, scl);
                fill(116, 255, 30); // GREEN //DEFAULT
                this.dead = true;
                return true;
            }
            if (yDist === 20 && this.yspeed === -1 && xDist === 0) {
                this.setSpeeds(0, 0);
                fill(255, 0, 0); //RED
                rect(this.x, this.y, scl, scl);
                fill(116, 255, 30); // GREEN //DEFAULT
                this.dead = true;
                return true;
            }
            if (yDist === -20 && this.yspeed === 1 && xDist === 0) {
                this.setSpeeds(0, 0);
                fill(255, 0, 0); //RED
                rect(this.x, this.y, scl, scl);
                fill(116, 255, 30); // GREEN //DEFAULT
                this.dead = true;
                return true;
            }
        }
        return false;
    };



    this.update = function () {
        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }

        this.tail[this.total - 1] = createVector(this.x, this.y);
        this.tail[this.total - 2] = createVector(this.x, this.y);
        this.tail[this.total - 3] = createVector(this.x, this.y);

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        if (this.x == this.size) {
            //console.log("Dead, XR");
            this.dead = true;
            return true;
            //    this.setDeath(this.tail[i]);
        }
        if (this.x == 0) {
            //console.log("Dead, XL");
            this.dead = true;
            return true;
            //  this.setDeath(this.tail[i]);
        }
        if (this.y == this.size - 20) {
            //console.log("Dead, YR");
            this.dead = true;
            return true;
            //  this.setDeath(this.tail[i]);
        }
        if (this.y == 0) {
            //console.log("Dead, YL");
            this.dead = true;
            return true;
        }
        //  this.setDeath(this.tail[i]);
        //this.x = constrain(this.x, 0, 600 - scl);
        //this.y = constrain(this.y, 0, 600 - scl);
    };


    this.show = function () {
        ellipseMode(CORNER);
        fill(116, 255, 30); // GREEN
        for (var i = 0; i < this.tail.length; i++) {
            if (typeof this.tail[i] != 'undefined')
                rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        fill(255, 20, 147); //PINK
        rect(this.x, this.y, scl, scl);
        //image(this.head, this.x, this.y);
        if (this.dead) {
            fill(255, 0, 0, 99); //RED
            rect(this.x, this.y, scl, scl);

        }



    }
}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
