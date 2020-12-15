class Roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
			this.body=Bodies.rectangle(x, y, w, h , options);
		this.w=w
		this.h=h
		
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos=this.body.position;		

			rectMode(CENTER)
			fill("blue")
			rect(Pos.x,Pos.y,this.w, this.h);
			
			
    }
}