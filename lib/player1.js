class Player
{

    constructor(x,y,w,h)
    {
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true})
        this.width = w
        this.height = h
        this.image = loadImage("assets/player.png");        
        World.add(engine.world,this.body)
    }

    display()
    {
       var pos = this.body.position;
       var angle = this.body.angle;
        push ()
    translate (pos.x,pos.y)
    rotate (angle)
    imageMode (CENTER)
        image(this.image, 0, 0, this.width, this.height);
        pop ()
    }
}