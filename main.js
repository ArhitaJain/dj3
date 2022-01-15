song1 = "";
song2 = "";
song3 = "";
song4 = "";
song5 = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
    song1 = loadSound("Dhinka Chika.mp3");
    song2 = loadSound("Cham Cham .mp3");
    song3 = loadSound("Abhi Toh Party Shuru Hui Hai.mp3");
    song4 = loadSound("Raataan Lambiyan - Shershaah.mp3");
    song5 = loadSound("Lift Teri Bandh Hai.mp3");
}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video ,modelLoaded);
    poseNet.on("pose" ,gotPoses);
}

function modelLoaded()
{
    console.log("model is loaded!")
}

function draw()
{
    image(video ,0 ,0 ,500 ,400);

    song1.setVolume(0.8);
    song2.setVolume(0.8);
    song3.setVolume(0.8);
    song4.setVolume(0.8);
    song5.setVolume(0.8);
}

function gotPoses(results)
{
 if(results.length > 0)
 {
     console.log(results);
 }

 leftWristX = results[0].pose.leftWrist.x;
 leftWristY = results[0].pose.leftWrist.y;
 console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY)

 rightWristX = results[0].pose.rightWrist.x;
 rightWristY = results[0].pose.rightWrist.y;
 console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY)

}

function play()
{
    song1.play();
}