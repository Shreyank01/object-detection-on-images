function setup() {
    canvas = createCanvas(600,400);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("result").innerHTML = "Object Detected: Detecting...";
}

function modelLoaded() {
    console.log("Model Loaded !");
    status = true;
    object_detector.detect(img , gotResult);
}

function gotResult(error , results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}

img = "";
status = "";

function preload() {
    img = loadImage("fruits.jpg")
}

function draw() {
    image(img ,0 ,0 ,600 ,400); 
}
