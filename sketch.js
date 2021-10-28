let img;
let cnv;
function  preload(){
  img = loadImage('images/port.jpg');
}
function setup() {
  cnv = createCanvas(img.width, img.height);
    image(img,0,0);  
  //let newCanvasX = (windowWidth - img.width)/2;
  //let newCanvasY= (windowHeight - img.height)/2;
  //cnv.position(newCanvasX, newCanvasY);
}



function keyPressed(){
  
  // let newCanvasX = (windowWidth - img.width);
  // let newCanvasY= (windowHeight - img.height);
  //cnv.position(newCanvasX, newCanvasY);
  for(let col = 0;col< img.width; col+=35){
    for(let row = 0; row<img.height; row+=35){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos,yPos);
      
      
      push();
      translate(xPos, yPos);
      rotate(radians(random(360)))
      noFill();
      if (key === 'r'){
        stroke(color('red'));
      }else{
        stroke(color(c));
      }
      strokeWeight(random(5))
      point(xPos,yPos);
      strokeWeight(random(3));
      
      //curve(x1, y1, x2, y2, x3, y3, x4, y4)
      
      curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * random(90), random(10), random(80), cos(yPos) * sin(yPos) * random(140), cos(xPos) * sin(xPos) * 50)
      pop();
    }
  }
}

function mouseMoved(){
  if (mouseX < img.width){
  
  let newCanvasX = (windowWidth - img.width);
  let newCanvasY= (windowHeight - img.height);
  //cnv.position(newCanvasX, newCanvasY);
  for(let col = 0;col< img.width; col+=35){
    for(let row = 0; row<img.height; row+=35){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos,yPos);
      
      
      push();
      translate(xPos, yPos);
      rotate(radians(random(360)))
      noFill();
      stroke(color(c));
      strokeWeight(random(5))
      point(xPos,yPos);
      strokeWeight(random(3));
      
      //curve(x1, y1, x2, y2, x3, y3, x4, y4)
      
      curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * random(90), random(10), random(80), cos(yPos) * sin(yPos) * random(140), cos(xPos) * sin(xPos) * 50)
      pop();
      }
    }
  } else{
   }
    if (mouseY > img.height){
  
  let newCanvasX = (windowWidth - img.width);
  let newCanvasY= (windowHeight - img.height);
  //cnv.position(newCanvasX, newCanvasY);
  for(let col = 0;col< img.width; col+=35){
    for(let row = 0; row<img.height; row+=35){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos,yPos);
      
      
      push();
      translate(xPos, yPos);
      rotate(radians(random(360)))
      noFill();
      stroke(color(c));
      strokeWeight(random(5))
      point(xPos,yPos);
      strokeWeight(random(3));
      
      //curve(x1, y1, x2, y2, x3, y3, x4, y4)
      
      curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * random(90), random(10), random(80), cos(yPos) * sin(yPos) * random(140), cos(xPos) * sin(xPos) * 50)
      pop();
      }
    }
  } else{
  }

}

function mousePressed(){
  image(img,0,0);
}
