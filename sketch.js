let catgif;

function preload()
{
    catgif = loadImage('bruh-meme.gif');
}

function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
    background(220, 200, 200);
    image(catgif, 0, 0);
}
