song = "";
song2 = "";

song2_status = "";
song_status = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCature(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.lenth > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("leftWristX = "+ leftWristX + "leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX + "rightWristY = "+rightWristY);
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){

    image(video, 0, 0, 600, 500);

    song2_status = song2.isplaying();

    fill("#FF0000");
    stroke("#FF3583");

    if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);
        song2.stop();
        if(song2_status == false){
        song.play();
        document.getElementById("volume").innerHTML = "Now Playing = Chug Jug With You (Number One Victory Royal) | Song By Leviathan";	
        }
    }
    if(scoreRightWrist > 0.2)
	{
		circle(rightWristX,rightWristY,20);
        song.stop();
        if(song_status == false){
        song2.play();
        document.getElementById("volume").innerHTML = "Now Playing = Chug Jug With You MINECRAFT (Number One MINECRAFT Victory Royal) | Song By ?";	
        }
    	}
}



function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
