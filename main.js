    noseX = 0
    noseY = 0
    rightwristX = 0
    leftwristX = 0
    difference = 0
function preload(){

}
function setup(){

    video = createCapture(VIDEO)
    video.position(70,220)

    canvas = createCanvas(500,500)
    canvas.position(800,200)
    posenet = ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotPoses)
}

function modelloaded(){
    console.log("model loaded")
}
function gotPoses(results){

    if(results.length>0){
        console.log(results)
        noseY = results[0].pose.nose.y
        noseX = results[0].pose.nose.x
        console.log(noseX)
        console.log(noseY)
        rightwristX = results[0].pose.rightWrist.x
        leftwristX = results[0].pose.leftWrist.x
        console.log(rightwristX)
        console.log(leftwristX)
        difference = leftwristX - rightwristX

    }

}
function draw(){     
    background("grey")   
    stroke("red")
    fill("red")
    textSize(difference/5);
    text('bean' ,noseX,noseY)
    document.getElementById("words").innerHTML = "distance between your right wrist and your left wrist is "+floor(difference)+"PX"
}