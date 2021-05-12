nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

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
    document.getElementById("hw_s").innerHTML = "Width and Height of square will be = "+ difference +"px" ;
    fill('red');
   stroke('green');
   square(nosex, nosey, difference);
       
}


function modelloaded(){
    console.log("model loaded");
}

function gotresult(result){
if(result.length > 0 ){
  console.log(result); 
  nosex = result[0].pose.nose.x; 
  nosey = result[0].pose.nose.y; 
  console.log("nosex = "+nosex);
  console.log("nosey = "+nosey);
  leftwristx= result[0].pose.nose.leftWrist.x;
  rightwristx= result[0].pose.nose.rightWrist.x;

  difference = floor(leftwristx - rightwristx);
}
}