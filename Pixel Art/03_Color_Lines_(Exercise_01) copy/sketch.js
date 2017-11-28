//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//03_Colorlines (Exercise 01)
//Link all circles with individual lines
//Color of the line is the mix of the circle colors

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(400, 400);

  //Size of stroke
  strokeWeight(7);

  //No stroke for shapes
  noStroke();
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background(255);

  //Top left corner shape position and color
  fill(0, 0, 0);
  rect(60, 20, 20, 20);

  fill(0, 0, 0);
  rect(80, 20, 20, 20);

  fill(0, 0, 0);
  rect(40, 40, 20, 20);

  fill(0, 0, 0);
  rect(40, 60, 20, 20);

  fill(0, 0, 0);
  rect(40, 80, 20, 20);

  fill(0, 0, 0);
  rect(40, 100, 20, 20);

  fill(0, 0, 0);
  rect(40, 120, 20, 20);

  fill(0, 0, 0);
  rect(40, 140, 20, 20);

  fill(0, 0, 0);
  rect(40, 160, 20, 20);

  fill(0, 0, 0);
  rect(40, 180, 20, 20);

  fill(0, 0, 0);
  rect(40, 200, 20, 20);

  fill(0, 0, 0);
  rect(40, 220, 20, 20);

  fill(0, 0, 0);
  rect(40, 240, 20, 20);

  fill(0, 0, 0);
  rect(40, 260, 20, 20);

  fill(0, 0, 0);
  rect(60, 280, 20, 20);

  fill(0, 0, 0);
  rect(60, 300, 20, 20);

  fill(0, 0, 0);
  rect(80, 320, 20, 20);

  fill(0, 0, 0);
  rect(100, 340, 20, 20);

  fill(0, 0, 0);
  rect(120, 340, 20, 20);

  fill(0, 0, 0);
  rect(140, 340, 20, 20);

  fill(0, 0, 0);
  rect(160, 340, 20, 20);

  fill(0, 0, 0);
  rect(180, 340, 20, 20);

  fill(0, 0, 0);
  rect(200, 340, 20, 20);

  fill(0, 0, 0);
  rect(220, 340, 20, 20);

  fill(0, 0, 0);
  rect(240, 320, 20, 20);

  fill(0, 0, 0);
  rect(260, 300, 20, 20);

  fill(0, 0, 0);
  rect(260, 280, 20, 20);

  fill(0, 0, 0);
  rect(280, 260, 20, 20);

  fill(0, 0, 0);
  rect(280, 240, 20, 20);

  fill(0, 0, 0);
  rect(280, 220, 20, 20);

  fill(0, 0, 0);
  rect(280, 200, 20, 20);

  fill(0, 0, 0);
  rect(100, 40, 20, 20);

  fill(0, 0, 0);
  rect(100, 60, 20, 20);

  fill(0, 0, 0);
  rect(100, 80, 20, 20);

  fill(0, 0, 0);
  rect(100, 100, 20, 20);

  fill(0, 0, 0);
  rect(100, 120, 20, 20);

  fill(0, 0, 0);
  rect(120, 120, 20, 20);

  fill(0, 0, 0);
  rect(140, 120, 20, 20);

  fill(0, 0, 0);
  rect(100, 140, 20, 20);

  fill(0, 0, 0);
  rect(160, 140, 20, 20);

  fill(0, 0, 0);
  rect(160, 160, 20, 20);

  fill(0, 0, 0);
  rect(160, 180, 20, 20);

  fill(0, 0, 0);
  rect(180, 120, 20, 20);

  fill(0, 0, 0);
  rect(200, 120, 20, 20);

  fill(0, 0, 0);
  rect(100, 160, 20, 20);

  fill(0, 0, 0);
  rect(100, 180, 20, 20);

  fill(0, 0, 0);
  rect(120, 200, 20, 20);

  fill(0, 0, 0);
  rect(140, 200, 20, 20);

  fill(0, 0, 0);
  rect(180, 180, 20, 20);

  fill(0, 0, 0);
  rect(200, 180, 20, 20);

  fill(0, 0, 0);
  rect(220, 180, 20, 20);

  fill(0, 0, 0);
  rect(220, 160, 20, 20);

  fill(0, 0, 0);
  rect(220, 140, 20, 20);

  fill(0, 0, 0);
  rect(220, 120, 20, 20);

  fill(0, 0, 0);
  rect(220, 100, 20, 20);

  fill(0, 0, 0);
  rect(220, 80, 20, 20);

  fill(0, 0, 0);
  rect(220, 60, 20, 20);

  fill(0, 0, 0);
  rect(220, 40, 20, 20);

  fill(0, 0, 0);
  rect(240, 20, 20, 20);

  fill(0, 0, 0);
  rect(260, 20, 20, 20);

  fill(0, 0, 0);
  rect(280, 40, 20, 20);

  fill(0, 0, 0);
  rect(280, 60, 20, 20);

  fill(0, 0, 0);
  rect(280, 80, 20, 20);

  fill(0, 0, 0);
  rect(280, 100, 20, 20);

  fill(0, 0, 0);
  rect(280, 120, 20, 20);

  fill(0, 0, 0);
  rect(280, 140, 20, 20);

  fill(0, 0, 0);
  rect(280, 160, 20, 20);

  fill(0, 0, 0);
  rect(280, 180, 20, 20);

  fill(0, 0, 0);
  rect(260, 180, 20, 20);

  fill(0, 0, 0);
  rect(240, 180, 20, 20);

  fill(0, 0, 0);
  rect(140, 220, 20, 20);

  fill(0, 0, 0);
  rect(160, 240, 20, 20);

  fill(0, 0, 0);
  rect(180, 240, 20, 20);

  fill(0, 0, 0);
  rect(200, 240, 20, 20);


}
