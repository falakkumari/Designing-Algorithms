function setup() {
    createCanvas(1200, 800);
    fixedRect = createSprite(400, 400, 20, 30);
    fixedRect.shapeColor = "lightblue"
    movingRect = createSprite(500, 100, 20, 30)
    movingRect.shapeColor = "lightblue"
}

function draw() {
    background(0);
    movingRect.x = mouseX
    movingRect.y = mouseY



    drawSprites();
}