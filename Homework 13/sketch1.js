// x and y for my character
var characterX = 100;
var characterY = 100;

// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var myXs = [];
var myYs = [];
var myDiameters = [];

function setup()
{
    createCanvas(1500, 700);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);

    var x = getRandomNumber;
        var y = getRandomNumber;
        var diameter = 25;
        for(var i = 0; i < 5; i++)
        {
            myXs[i] = x;
            myYs[i] = y;
            myDiameters[i] = diameter;
            x += getRandomNumber;
            y += getRandomNumber;
            diameter += getRandomNumber;
        }

        myXs[i] = getRandomNumber(1500);
        myYs[i] = getRandomNumber(700);
        myDiameters[i] = getRandomNumber(100);
}

function draw()
{
    background(128, 128, 128);
    stroke(0);
    fill(0);

    for(var i = 0; i < myXs.length; i++)
        {
            fill(255,68,51);
            circle(myXs[i],myYs[i],myDiameters[i]);
        }    

    // call createBorders function
    createBorders(10);

    // exit message
    createExitMessage();
    
    //createCharacter(200,350);
    drawCharacter();
    characterMovement();

    // create "You Win" message and check character
    createYouWinMessage();

    // create mouse object on click
    createMouseObject();
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
    fill(0,0,0)
    rect(0,0,width,thickness);
    // left border
    fill(0,0,0)
    rect(0,0,thickness,height);
    // bottom border
    fill(0,0,0)
    rect(0, height-thickness,width, thickness);
    // right upper border
    fill(0,0,0)
    rect(width-thickness,0,thickness,height-50);
}

function createExitMessage()
{
    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)
}

function createYouWinMessage()
{
    // check to see if the character has left the exit
    if(characterX > width && characterY > height-50)
        {
            fill(0);
            stroke(5);
            textSize(50);
            text("You Win!", width/2-50, height/2-50);
        }
}

function createMouseObject()
{
    // create object on mouse click
    addEventListener("click", (event) => {});

    onclick = (event) => {
        fill(0,0,0);
    circle(mouseShapeX, mouseShapeY, 25);
    };
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number)
    {
        return Math.floor(Math.random()*number)+10;
    }

    function enemy1()
{
     // get a random speed when the it first starts
     shape1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shape1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    myXs += shape1XSpeed;
    myYs += shape1YSpeed;
    // check to see if the shape has gone out of bounds
    if(myXs > width)
    {
        myXs = 0;
    }
    if(myXs < 0)
    {
        myXs = width;
    }
    if(myYs > height)
    {
        myYs = 0;
    }
    if(myYs < 0)
    {
        myYs = height;
    }
}