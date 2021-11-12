let img;
let para;
let cnv;
function  preload(){
  img = loadImage('images/port.jpg');
}
function setup() {
  para = createP('');
  para.parent("#instr"); 
  cnv=createCanvas(img.width, img.height);
  cnv.parent("#canvasImg");

  image(img,0,0);  
}



function keyPressed(){

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

function mouseDragged(){
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

}

function keyTyped(){
  if (key === 's'){
    saveCanvas('fileName', 'png');
  }  if (key === 'i'){
    image(img,0,0);
  }
}
