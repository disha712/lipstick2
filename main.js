function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
}
function take_snapshot(){
    save('lipstick_filter.png');
}
function modelLoaded(){
    console.log("Model is Loaded");
}
function gotPoses(results){
if (results.length>0) {
    console.log(results);
    
}
}