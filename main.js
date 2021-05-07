function setup(){
    canvas = createCanvas(500, 400);
    video = createCapture(VIDEO);
    canvas.position(550, 150);
    video.size(400, 400);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotresult);
}

function draw(){
    background('lightblue');
   
    
}


function modelloaded(){
    console.log("model loaded");
}

function gotresult(result){
if(result.length > 0 ){
  console.log(result);  
}
}