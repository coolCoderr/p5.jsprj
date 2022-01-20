function preload(){

}
function setup(){
    
    canvas = createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0,0, 640, 480);
    fill("red");
    stroke("orange");
    rect(20,20, 590,30);
    rect(20,430, 590,30);
    rect(20,40, 30,400);
    rect(580,40, 30,400);
    fill("yellow");
    stroke("yellow");
    circle(35, 35, 50);
    circle(590, 35, 50);
    circle(35, 440, 50);
    circle(590, 445, 50);
}
function take_snapshot(){
    save("yourphoto.png");
}