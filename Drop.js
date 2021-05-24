class Drop {
    constructor(x, y) {
        var options = {
            'restitution': 0.2,
            'density': 0.1,
            'friction': 0.1
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.x = x;
        this.y = y;
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,10,10);
    }
}