class Box{
    constructor(x,y,width,height){
       
        var options={
          restitution:0.8,
          friction:1.0,
          density:1.0
        }
       
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body)
    }
     
    display(){
      var pos=this.body.position
      push();
      translate(pos.x,pos.y)
      rectMode(CENTER)
      fill("brown")
      rect(pos.x,pos.y,this.width,this.height)
      pop();

    }






}
