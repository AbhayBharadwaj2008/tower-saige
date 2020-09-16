class Ground {
    constructor(x, y, width, height, angle) {
      var ground_options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(650,300,50,20,ground_options)
      this.width = width;
      this.height = height;
      World.add(world, this.ground);
    }
    display(){
      var pos =this.ground.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, 900, 20);
    }
  };
