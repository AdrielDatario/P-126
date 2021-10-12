song = "";

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCature(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function play(){
    song.play();
}

function stop(){
    song.stop();
}

function play2(){
    song2.play();
}

function stop2(){
    song2.stop();
}