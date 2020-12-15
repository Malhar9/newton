class Rope{
  constructor(bodyA,bodyB,offsetX,offsetY){
    this.offsetX=this.offsetX
    this.offsetY=this.offsetY  
    var options = {
          bodyA: bodyA,
          bodyB:bodyB,
          pointB:{x:this.offsetX,y:this.offsetY} ,
          
      }
      this.Rope = Constraint.create(options);
     
      World.add(world, this.Rope);
  }

  display(){
     
      var pointA = this.Rope.bodyA.position;
      var pointB = this.Rope.bodyB.position;
      var Anchor1X = pointA.x
        var Anchor1Y = pointA.y
        
        var Anchor2X = pointB.x+this.offsetX
        var Anchor2Y = pointB.y+this.offsetY
      strokeWeight(4);
      line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    
  }
  
}