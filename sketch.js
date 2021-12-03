let img;
let para;
let cnv;
let abstract = [];
let imageCounter = 0;
let button;

function  preload(){

  for (let i =0; i <= 5; i++){
    abstract[i] = loadImage("images/abstract" + i + ".png")
  }
  // img = loadImage('images/abstract0.png');
}
function setup() {
  // para = createP('');
  // para.parent("#instr"); 
  cnv=createCanvas(abstract[2].width, abstract[2].height);
  cnv.parent("#canvasImg");
  image(random(abstract),0,0);
}



function mouseDragged(){

  for(let col = 0;col<abstract[2].width; col+=random(50, 200)){
    for(let row = 0; row<abstract[2].height; row+=random(50, 200)){
      let xPos = col;
      let yPos = row;
      let c = random(abstract).get(xPos,yPos);
      
      
      push();
      translate(xPos, yPos);
      rotate(radians(random(360)))
      noFill();

      stroke(color(c));  
      strokeWeight(random(10))
      point(xPos,yPos);
      strokeWeight(random(3));
      //curve(x1, y1, x2, y2, x3, y3, x4, y4)
      curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * random(90), random(10), random(80), cos(yPos) * sin(yPos) * random(140), cos(xPos) * sin(xPos) * 50)

      pop();
    }
  }
}

function keyPressed(){
  for(let col = 0;col< abstract[2].width; col+=15){
    for(let row = 0; row< abstract[2].height; row+=15){
      let xPos = col;
      let yPos = row;
      let c = random(abstract).get(col,row);

  if (key === 'r'){
    push();
    translate(xPos, yPos);
    rotate(radians(random(360)))
    noFill();
    stroke(color('#FF6363 '));  
    strokeWeight(random(10))
    point(xPos,yPos);
    strokeWeight(random(3));
    //curve(x1, y1, x2, y2, x3, y3, x4, y4)
    curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * random(90), random(10), random(80), cos(yPos) * sin(yPos) * random(140), cos(xPos) * sin(xPos) * 50)

    pop();
      }
      
      if (key === 'b'){
        push();
        translate(xPos, yPos);
        rotate(radians(random(360)))
        noFill();
    
        stroke(color('#5FF4FA'));  
        strokeWeight(random(10))
        point(xPos,yPos);
        strokeWeight(random(3));
        //curve(x1, y1, x2, y2, x3, y3, x4, y4)
        curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * random(90), random(10), random(80), cos(yPos) * sin(yPos) * random(140), cos(xPos) * sin(xPos) * 50)
    
        pop();
          }

            if (key === 'w'){
              push();
              translate(xPos, yPos);
              rotate(radians(random(360)))
              noFill();
          
              stroke(color('white'));  
              strokeWeight(random(10))
              point(xPos,yPos);
              strokeWeight(random(3));
              //curve(x1, y1, x2, y2, x3, y3, x4, y4)
              curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * random(90), random(10), random(80), cos(yPos) * sin(yPos) * random(140), cos(xPos) * sin(xPos) * 50)
          
              pop();
                }
      if (key === 'j'){
        let c = abstract[0].get(col,row);
        fill(color(c)); 
        strokeWeight(random(3));
       rect(col,row, 10, 10)
       }      
       if (key === 'k'){
        let c = abstract[1].get(col,row);
        fill(color(c)); 
        strokeWeight(random(3));
       rect(col,row, 10, 10)
       }      
       if (key === 'l'){
        let c = abstract[2].get(col,row);
        fill(color(c)); 
        strokeWeight(random(3));
       rect(col,row, 10, 10)
       }      
       if (key === 'u'){
        let c = abstract[3].get(col,row);
        fill(color(c)); 
        strokeWeight(random(3));
       rect(col,row, 10, 10)
       }      
       if (key === 'p'){
        let c = abstract[4].get(col,row);
        fill(color(c)); 
        strokeWeight(random(3));
       rect(col,row, 10, 10)
       }       
       if (key === 'o'){
        let c = abstract[5].get(col,row);
        fill(color(c)); 
        strokeWeight(random(3));
       rect(col,row, 10, 10)
       }     
        if (key === 'c'){
        let c = abstract[4].get(col,row);
        fill(color(c)); 
        strokeWeight(random(3));
        circle(col, row, 20);
       } 

      }



    }

}

// #5FF4FA
// lightblue

function keyTyped(){
  if (key === 's'){
    saveCanvas('fileName', 'png');
  }  if (key === 'a'){
    image(random(abstract),0,0);
  }
}
