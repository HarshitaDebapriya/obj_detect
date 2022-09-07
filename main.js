function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : DEtecting Objects";


}
img = "";
status = "";
function preload(){
    img= loadImage('cat.jpeg');


}
function draw(){
    image(img, 0,0, 640,420);
    fill("#FF0000");
    
    text("cat", 45,75);
noFill();
stroke("#FF0000");
rect(30, 60, 550, 350);

}
function modelLoaded(){
    console.log("Model Loaded");

status = true;
obejectDetector.detect(img,gotResult);

}
function gotResult(error,results) {
    if (error){
        console.log(error);   
    }
    console.log(results);
}

function draw()
{

    Image(img,0, 0, 640, 420);
    if(status != "")
    {
        for(i=0; i< objects.lenght; i++)
        {

         
        document.getElementById("status").innerHTML = "Status : Object Detected";
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent +"%", objects[i].x, objects[i].y );
        noFill();
        stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
