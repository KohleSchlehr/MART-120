// x and y for my character
var characterX = 100;
var characterY = 100;

// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape 1
var shape1X = 500;
var shape1Y = 500;
var shape1XSpeed;
var shape1YSpeed;

// x and y for a shape 2
var shape2X = 30;
var shape2Y = 50;
var shape2XSpeed;
var shape2YSpeed;

// x and y for a shape 3
var shape3X = 700;
var shape3Y = 750;
var shape3XSpeed;
var shape3YSpeed;

// x and y for shape 4
var shape4X = 10;
var shape4Y = 10;
var shape4XSpeed;
var shape4YSpeed;

// x and y for shape 5
var shape5X = 0
var shape5Y = 500

// x and y for shape 6
var shape6X = 1500
var shape6Y = 200

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(1500, 700);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
}

function draw()
{
    background(128, 128, 128);
    stroke(0);
    fill(0);
    
    // call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // potential enemy
    fill(255,68,51);
    // draw the shape
    circle(shape1X, shape1Y, 100);

     // get a random speed when the it first starts
     shape1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shape1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shape1X += shape1XSpeed;
    shape1Y += shape1YSpeed;
    // check to see if the shape has gone out of bounds
    if(shape1X > width)
    {
        shape1X = 0;
    }
    if(shape1X < 0)
    {
        shape1X = width;
    }
    if(shape1Y > height)
    {
        shape1Y = 0;
    }
    if(shape1Y < 0)
    {
        shape1Y = height;
    }

    // potential enemy 
    fill(0,0,0);
    // draw the shape
    circle(shape2X, shape2Y, 10);

     // get a random speed when the it first starts
     shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;
    // check to see if the shape has gone out of bounds
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }

    // potential enemy
    fill(0,0,0);
    // draw the shape
    circle(shape3X, shape3Y, 10);

     // get a random speed when the it first starts
     shape3XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shape3YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shape3X += shape3XSpeed;
    shape3Y += shape3YSpeed;
    // check to see if the shape has gone out of bounds
    if(shape3X > width)
    {
        shape3X = 0;
    }
    if(shape3X < 0)
    {
        shape3X = width;
    }
    if(shape3Y > height)
    {
        shape3Y = 0;
    }
    if(shape3Y < 0)
    {
        shape3Y = height;
    }

    // potential enemy
    fill(255,68,51);
    // draw the shape
    circle(shape4X, shape4Y, 100);

     // get a random speed when the it first starts
     shape4XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shape4YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shape4X += shape4XSpeed;
    shape4Y += shape4YSpeed;
    // check to see if the shape has gone out of bounds
    if(shape4X > width)
    {
        shape4X = 0;
    }
    if(shape4X < 0)
    {
        shape4X = width;
    }
    if(shape4Y > height)
    {
        shape4Y = 0;
    }
    if(shape4Y < 0)
    {
        shape4Y = height;
    }

    fill(0,0,0);
    circle(shape5X,shape5Y,10);
    if(shape5X <= 1500)
        {
            shape5X+=5;
        }
        else
        {
            shape5X = 0;
        }

        fill(255,68,51);
        circle(shape6X,shape6Y,100);
        if (shape6X <= 0) {
            shape6X = 1500;
        }
        else if (shape6X <= 750) {
            shape6X-=5;
        }
        else if (shape6X > 0) {
            shape6X-=10;
        } 

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-5)
    {
        fill(0);
        stroke(5);
        textSize(50);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(0,0,0);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    //character
    
   // circle(characterX,characterY,25);
}

function drawCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,25);
}

function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}