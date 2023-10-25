const pencil = document.getElementById("pencil");
const pencilDiv = document.getElementById("pencilDiv");
const ellipseButton = document.getElementById("elipsDiv");
const squareBtn = document.getElementById("squareBtn");
const linebtn = document.getElementById("lineBtn");
const dimondBtn = document.getElementById("dimondBtn");
const arrowLineBtn = document.getElementById("arrowLineBtn");
const eraserBtn = document.getElementById("eraserBtn");
const colorPicker = document.getElementById("color-picker");

// colorPicker.addEventListener("change", () => {

//     drawingColor = colorPicker.value ;
//     c.strokeStyle = drawingColor;
//     //console.log(drawingColor);
// });

// drawing line with pen
let isPencilActive = false; // initially pencil is inactive
pencilDiv.addEventListener("click", (e) => {
  isElipsDrawing = false;
  isDrawingLine = false;
  isDrawingRectangle=false;
  isDrawingDiamond=false;
  isDrawingArrow=false;
  let activeButton = document.getElementsByClassName("active");
  if (activeButton.length > 0 && activeButton[0] != e.currentTarget) {
    for (let i = 0; i < activeButton.length; i++) {
      activeButton[i].classList.remove("active");
    }
  }
  pencilDiv.classList.toggle("active");

  isPencilActive = !isPencilActive;

  if (isPencilActive) {
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", onMouseDown);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", onMouseDown);
  }
});

// eclips drawing

let isElipsDrawing = false;
ellipseButton.addEventListener("click", (e) => {
  isPencilActive = false;
  isDrawingLine = false;
  isDrawingRectangle=false;
  isDrawingDiamond=false;
  isDrawingArrow=false;
  let activeButton = document.getElementsByClassName("active");
  if (activeButton.length > 0 && activeButton[0] != e.currentTarget) {
    for (let i = 0; i < activeButton.length; i++) {
      activeButton[i].classList.remove("active");
    }
  }
  ellipseButton.classList.toggle("active");

  isElipsDrawing = !isElipsDrawing;
  if (isElipsDrawing) {
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", onMouseDown);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", onMouseDown);
  }
});

// Arrow Line drawing
let isDrawingLine = false;
linebtn.addEventListener("click", (e) => {
  isPencilActive = false;
  isElipsDrawing = false;
  isDrawingRectangle=false;
  isDrawingDiamond=false;
  isDrawingArrow = false;
  let activeButton = document.getElementsByClassName("active");
  if (activeButton.length > 0 && activeButton[0] != e.currentTarget) {
    for (let i = 0; i < activeButton.length; i++) {
      activeButton[i].classList.remove("active");
    }
  }
  linebtn.classList.toggle("active");

  isDrawingLine = !isDrawingLine;
  if (isDrawingLine) {
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", onMouseDown);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", onMouseDown);
  }
});

let isDrawingRectangle = false;
squareBtn.addEventListener("click", (e) => {
  isPencilActive = false;
  isDrawingLine = false;
  isElipsDrawing=false;
  isDrawingDiamond=false;
  isDrawingArrow=false;
  let activeButton = document.getElementsByClassName("active");
  if (activeButton.length > 0 && activeButton[0] != e.currentTarget) {
    for (let i = 0; i < activeButton.length; i++) {
      activeButton[i].classList.remove("active");
    }
  }
  squareBtn.classList.toggle("active");

  isDrawingRectangle = !isDrawingRectangle;
  if (isDrawingRectangle) {
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", onMouseDown);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", onMouseDown);
  }
});

let isDrawingDiamond = false;
dimondBtn.addEventListener("click", (e) => {
  isPencilActive = false;
  isDrawingLine = false;
  isElipsDrawing=false;
  isDrawingRectangle=false;
  isDrawingArrow=false;
  let activeButton = document.getElementsByClassName("active");
  if (activeButton.length > 0 && activeButton[0] != e.currentTarget) {
    for (let i = 0; i < activeButton.length; i++) {
      activeButton[i].classList.remove("active");
    }
  }
  dimondBtn.classList.toggle("active");

  isDrawingDiamond = !isDrawingDiamond;
  if (isDrawingDiamond) {
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", onMouseDown);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", onMouseDown);
  }
});


let isDrawingArrow = false;
arrowLineBtn.addEventListener("click", (e) => {
  isPencilActive = false;
  isDrawingLine = false;
  isElipsDrawing=false;
  isDrawingRectangle=false;
  isDrawingDiamond=false;
  let activeButton = document.getElementsByClassName("active");
  if (activeButton.length > 0 && activeButton[0] != e.currentTarget) {
    for (let i = 0; i < activeButton.length; i++) {
      activeButton[i].classList.remove("active");
    }
  }
  arrowLineBtn.classList.toggle("active");

  isDrawingArrow = !isDrawingArrow;
  if (isDrawingArrow) {
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", onMouseDown);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", onMouseDown);
  }
});


let isEraser = false;
eraserBtn.addEventListener("click", (e) => {
  isPencilActive = false;
  isDrawingLine = false;
  isElipsDrawing=false;
  isDrawingRectangle=false;
  isDrawingDiamond=false;
  isDrawingArrow = false;
  let activeButton = document.getElementsByClassName("active");
  if (activeButton.length > 0 && activeButton[0] != e.currentTarget) {
    for (let i = 0; i < activeButton.length; i++) {
      activeButton[i].classList.remove("active");
    }
  }
  eraserBtn.classList.toggle("active");

  isEraser = !isEraser;
  if (isEraser) {
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", onMouseDown);
  } else {
    canvas.style.cursor = "auto";
    canvas.removeEventListener("mousedown", onMouseDown);
  }
});
