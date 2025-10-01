let cowgif;

function preload()
{
    cowgif = loadImage('assets/cow.gif');
}

function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
    background(220, 200, 200);
    image(cowgif, 0, 0);
}
