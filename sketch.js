function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	// clear the background
	background(38, 34, 52);

	fill(0, 80, 56);
	rect(0, 270, 640, 300);
	triangle(-50, 300, 0, 200, 50, 300);
	triangle(0, 300, 50, 200, 100, 300);
	triangle(50, 300, 100, 200, 150, 300);
	triangle(100, 300, 150, 200, 200, 300);
	triangle(150, 300, 200, 200, 250, 300);

	// draw UFO
	fill(128, 130, 133);
	ellipse(mouseX, mouseY, 100, 50);
	ellipse(mouseX, mouseY - 30, 50, 50);
	// draw windows
	fill(88, 89, 91);
	ellipse(mouseX - 50, mouseY, 10, 10);
	ellipse(mouseX - 25, mouseY, 10, 10);
	ellipse(mouseX, mouseY, 10, 10);
	ellipse(mouseX + 25, mouseY, 10, 10);
	ellipse(mouseX + 50, mouseY, 10, 10);
	fill(88, 89, 91);
	ellipse(mouseX, mouseY + 20, 30, 6);
	if(mouseIsPressed) {
		background(random(255), random(255), random(255));
		fill(random(255), random(255), random(255));
	ellipse(mouseX - 50, mouseY, 10, 10);
	ellipse(mouseX - 25, mouseY, 10, 10);
	ellipse(mouseX, mouseY, 10, 10);
	ellipse(mouseX + 25, mouseY, 10, 10);
	ellipse(mouseX + 50, mouseY, 10, 10);
	}
}
