video = "";
objects = [];
status = "";
function preload(){
    video = createVideo('4.webp');
    video.hide();
}
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}
function draw(){
    image(video,0,0,480,380);
    if(status!=""){
        objectDetector.detect(video, gotresult);
        for(i = 0; i < objects.length; i++ ){
document.getElementById("status").innerHTML ="Status : Objects Detected";
document.getElementById("number_of_objects").innerHTML = "Number of Hidden Objects Are :"+objects.length;
fill("#FF0000");
percent = floor(objects[1].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[1].x + 15 + objects[1].y + 15);
nofill();
stroke("#FF0000");
rect(objects[1].x, objects[1].y, objects[1].width, objects[1].height);
        }
    }
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
}
function modelloaded(){
    console.log("Model Loaded!");
    status.true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotresult(){
    if(error){
console.log(error);
    }
    console.log(results);
    object = results;
}