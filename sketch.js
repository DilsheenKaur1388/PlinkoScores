const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Contraint = Matter.Contraint;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var particle
var count = 0;

gameState = "play"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  



    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    } 

    
}
 
function mousePressed() {
  if(gameState!=="end") {
    particle = new Particle(mouseX,10,10,10);
    count = count + 1;
  }
}

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   
   textSize(25);
   text("500",20,525);
   text("500",100,525);
   text("500",180,525);
   text("500",260,525);
   text("100",340,525);
   text("100",420,525);
   text("100",500,525);
   text("200",580,525);
   text("200",660,525);
   text("200",740,525);
   
   if (gameState==="end") {
     fill("red");
     text("GAME OVER",200,475);
   }
   
   if(particle!= null) {
     particle.display();

     if(particle.body.position.y>750) {
       if(particle.body.position.x < 350) {
         score = score + 500;
         particle = null;
         if(count>=5) {
           gameState = "end"
         }
       }

       else if(particle.body.position.x >301 && particle.body.position.x <600) {
         score = score + 100
         particle = null;
         if(count>=5) {
          gameState = "end"
        }
       }

       else if(particle.body.position.x >601 && particle.body.position.x < 800) {
         score = score + 200
         particle = null;
         if(count>=5) {
          gameState = "end"
        }
       }
     }
   }
}
