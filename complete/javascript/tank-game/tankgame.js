// Global variables
var gameEnded = false;

let explosionImage = new Image();
explosionImage.src = "./image/boom.png"; // replace with the path to your image

// Create canvas
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
let bullet = null;

// Constants for physics
const gravity = 0.2; // The force of gravity
const airResistance = 0.01; // The force of air resistance

document.body.appendChild(canvas);
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 21;

// Load and draw the background image
let img = new Image();
img.src = "./image/background.png"; // Update the file path of the background image
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

// Tank and target details
let tank = { x: 50, y: 550, angle: Math.PI / 4, power: 10 };
let target = {
  x: Math.random() * (canvas.width * 0.3) + canvas.width * 0.7,
  y: Math.random() * (canvas.height - 50),
  width: 50,
  height: 50,
};

// Draw function
function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the background image
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Draw boundary
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.stroke();

  // Draw reset button
  ctx.fillRect(10, canvas.height - 40, 80, 30);
  ctx.fillStyle = "white";
  ctx.fillText("Reset", 20, canvas.height - 20);
  ctx.fillStyle = "black";

  // Set the font color to white and increase the font size
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";

  // Draw angle and power meter
  ctx.fillText(
    "Angle: " + Math.round(tank.angle * (180 / Math.PI)),
    canvas.width - 100,
    canvas.height - 50
  ); // Convert radian to degree
  ctx.fillText(
    "Power: " + Math.round(tank.power),
    canvas.width - 100,
    canvas.height - 30
  );
  // Draw bullet count
  ctx.fillText(
    "Bullets: " + tank.bulletCount,
    canvas.width - 100,
    canvas.height - 10
  );

  // Reset the font color and size for other drawings
  ctx.fillStyle = "black";
  ctx.font = "10px Arial";

  // Draw tank as a circle inside a rectangle
  ctx.beginPath();
  ctx.rect(tank.x - 30, canvas.height / 2 - 20, 60, 40); // Draw wider rectangle for the tank body
  ctx.fillStyle = "green"; // Set the fill color to green
  ctx.fill(); // Fill the rectangle
  ctx.lineWidth = 5; // Make the line thicker
  ctx.strokeStyle = "green"; // Change the line color to green
  ctx.stroke();

  ctx.beginPath(); // Start a new path for the circle
  ctx.arc(tank.x + 10, canvas.height / 2, 20, 0, 2 * Math.PI); // Draw circle inside the rectangle closer to the right edge
  ctx.fillStyle = "darkgrey"; // Set the fill color to dark grey
  ctx.fill(); // Fill the circle
  ctx.moveTo(tank.x + 10, canvas.height / 2); // Move to center of circle
  ctx.lineTo(
    tank.x + 10 + 50 * Math.cos(tank.angle),
    canvas.height / 2 - 50 * Math.sin(tank.angle)
  );

  // Draw line for the tank gun
  ctx.stroke();

  ctx.lineWidth = 1; // Reset the line width for other drawings
  ctx.strokeStyle = "black"; // Reset the line color for other drawings
  ctx.fillStyle = "black"; // Reset the fill color for other drawings

  if (target.hit) {
    // Draw explosion image
    let explosionWidth = target.width * 2; // double the target's width
    let explosionHeight = target.height * 2; // double the target's height
    ctx.drawImage(
      explosionImage,
      target.x,
      target.y,
      explosionWidth,
      explosionHeight
    );
    gameEnded = true;
  } else {
    // Draw rectangle
    ctx.fillRect(target.x, target.y, target.width, target.height);
  }

  // Draw bullet
  if (bullet) {
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "red"; // Change the bullet color to red
    ctx.fill();
    ctx.fillStyle = "black"; // Reset the fill color for other
  }

  // Draw success message
  if (target.hit) {
    var oldFont = ctx.font; // Save current font
    ctx.font = "30px Arial"; // Change font size
    ctx.fillText("Victory!", canvas.width / 2, canvas.height / 2); // Draw text
    ctx.font = oldFont; // Restore old font
  } // Draw game over message
  else if (gameEnded && !target.hit && bulletHitEdge()) {
    var oldFont = ctx.font; // Save current font
    ctx.font = "30px Arial"; // Change font size
    ctx.fillText("Try again", canvas.width / 2, canvas.height / 2); // Draw text
    ctx.font = oldFont; // Restore old font
  }
}

// Update function
function update() {
  // Update bullet
  if (bullet) {
    // Apply physics
    bullet.vx -= bullet.vx * airResistance;
    bullet.vy += gravity - bullet.vy * airResistance;

    // Update position
    bullet.x += bullet.vx;
    bullet.y += bullet.vy;

    // Check if hit target
    if (
      bullet.x > target.x &&
      bullet.x < target.x + target.width &&
      bullet.y > target.y &&
      bullet.y < target.y + target.height
    ) {
      // Mark target as hit
      target.hit = true;
    }
  }

  // Listen for arrow keys
  document.onkeydown = function (e) {
    switch (e.code) {
      case "ArrowLeft": // left arrow
        tank.power--;
        break;
      case "ArrowUp": // up arrow
        tank.angle += 0.05;
        break;
      case "ArrowRight": // right arrow
        tank.power++;
        break;
      case "ArrowDown": // down arrow
        tank.angle -= 0.05;
        break;
      case "Space": // spacebar
        if (!gameEnded) {
          shoot();
        }
        break;
    }
  };

  // Check if game is over
  if (tank.bulletCount === 0 && !target.hit) {
    gameEnded = true;
  }
}

// Shoot function
function shoot() {
  console.log("Shoot function called");

  // Decrement bullet count
  tank.bulletCount--;

  // Create bullet
  bullet = {
    x: tank.x + 50 * Math.cos(tank.angle),
    y: canvas.height / 2 - 50 * Math.sin(tank.angle),
    vx: tank.power * Math.cos(tank.angle),
    vy: -tank.power * Math.sin(tank.angle),
  };
}

// Game loop
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

// Reset game function
function resetGame() {
  // Reset tank and target
  tank = {
    x: 50,
    y: canvas.height / 2,
    power: 10,
    angle: Math.PI / 4,
    bulletCount: 3,
  };
  target = {
    x: Math.random() * (canvas.width * 0.3) + canvas.width * 0.7,
    y: Math.random() * (canvas.height - 50),
    width: 50,
    height: 50,
    hit: false,
  };
  gameEnded = false;
}

function bulletHitEdge() {
  if (bullet) {
    if (bullet.x < 0 || bullet.x > canvas.width || bullet.y > canvas.height) {
      return true;
    }
  }
  return false;
}

// Event listener for clicks
canvas.addEventListener("click", function (event) {
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  // Check if click is within reset button
  if (x > 10 && x < 90 && y > canvas.height - 40 && y < canvas.height - 10) {
    resetGame();
  }
});

// Event listener for window resize
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  resetGame(); // Reset the game to adjust the tank and target positions
});

// Start game
resetGame();
loop();
