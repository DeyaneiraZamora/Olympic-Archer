function setup()
{
    createCanvas(1000, 1000);   
}


function draw()
{
    drawArcher();
    drawShooter();
}

function drawArcher()
{ 
    
//head
 ellipse (200,100,50);
 
//body
rect(175,140,50,130);

// right arm
rect(215,140,80,30,20);

// Legs
push();
strokeWeight(20);
line(190,255,130,370);
line(215,255,250,370);
pop();

//arc
push();
noFill();
strokeWeight(4);
arc(250,170,200,220,3*PI/2,HALF_PI);
pop();

// left arm 
rect(125,140,80,30,20);
push();
strokeWeight(20);
line(136,149,150,95);
pop();


    // TODO: complete archer   
}

function drawShooter(){
    //head
 ellipse (200,500,50);
 
//body
rect(175,540,50,130);

// right arm
rect(215,540,80,30,20);

// Legs
push();
strokeWeight(20);
line(190,650,130,750);
line(215,650,250,750);
pop();

// left arm 
push();
strokeWeight(30);
line(130,580,200,620);
line (130,580,175,557);
pop();

// Gun
push();
strokeWeight(5);
line(130,580,175,557);
}
