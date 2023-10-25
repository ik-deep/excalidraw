const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const arrows = [];
const c = canvas.getContext("2d");
let drawingColor = "black";

let previousPosition = null;
let prevEclipsPosition = null;
let currentPosition=null;
let currentX, currentY;
let startX, startY;

// colorPicker.addEventListener("change", () => {

//     drawingColor = colorPicker.value ;
//     c.strokeStyle = drawingColor;
//     //console.log(drawingColor);
// });

function onMouseDown(e) {
  startX = e.clientX - canvas.getBoundingClientRect().left;
 startY = e.clientY - canvas.getBoundingClientRect().top;
 previousPosition = [e.clientX, e.clientY];

   if (isPencilActive) {
    c.lineWidth = 2;
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup",onMouseUp);
  } else{
    canvas.addEventListener("mouseup",onMouseUp);
  }
}

function onMouseMove(e) {
  // for the first time inside this
  currentX = e.clientX - canvas.getBoundingClientRect().left;
  currentY = e.clientY - canvas.getBoundingClientRect().top;
  currentPosition = [e.clientX, e.clientY];

  if (isPencilActive) {
    isElipsDrawing = false;
    // draw line from previous position to current position 
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition;
  } 
}

function onMouseUp(e) {
    currentX = e.clientX - canvas.getBoundingClientRect().left;
    currentY = e.clientY - canvas.getBoundingClientRect().top;
    currentPosition = [e.clientX, e.clientY];
    if (isElipsDrawing) {
        isPencilActive = false;
    
        const radiusX = Math.abs(currentX - startX) / 2;
        const radiusY = Math.abs(currentY - startY) / 2;
        const centerX =startX + radiusX;
        const centerY = startY+ radiusY;
        c.beginPath();
        c.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        c.stroke();
        c.closePath();
      } else if (isDrawingRectangle) {
        const width = currentX -startX;
        const height = currentY - startY;
        // Draw the rectangle
        c.beginPath();
        c.rect(startX,startY, width, height);
        c.stroke();
        c.closePath();
      }else if(isDrawingDiamond){
        // Draw the diamond
        c.beginPath();
        c.moveTo(startX, (startY + currentY) / 2);
        c.lineTo((startX + currentX) / 2, startY);
        c.lineTo(currentX, (startY + currentY) / 2);
        c.lineTo((startX + currentX) / 2, currentY);
        c.closePath();
        c.stroke();
      }else if (isDrawingArrow) {
        drawArrow(startX, startY, currentX, currentY, true);
    }else  if (isDrawingLine) {
        drawLine(startX, startY, currentX, currentY);
      }else if(isPencilActive){
        canvas.removeEventListener("mousemove", onMouseMove);
      }
    
}

function drawLine(x1, y1, x2, y2) {
  c.beginPath();
  c.moveTo(...previousPosition);
  c.lineTo(...currentPosition);
  c.stroke();
  c.closePath();
  previousPosition = currentPosition;
}

function drawArrow(x1, y1, x2, y2, inProgress = false) {
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);

    // Calculate the angle of the arrow
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const arrowSize = 15;

    // Arrowhead
    c.lineTo(x2 - arrowSize * Math.cos(angle - Math.PI / 6), y2 - arrowSize * Math.sin(angle - Math.PI / 6));
    c.moveTo(x2, y2);
    c.lineTo(x2 - arrowSize * Math.cos(angle + Math.PI / 6), y2 - arrowSize * Math.sin(angle + Math.PI / 6));
    
    c.stroke();
    c.closePath();
    
    if (inProgress) {
        // Draw the line of the in-progress arrow
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x2, y2);
        c.stroke();
        c.closePath();
    }
   
}
