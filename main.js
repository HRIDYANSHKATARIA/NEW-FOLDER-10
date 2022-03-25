

img = "" ;
status = "";
objects = []; 

function setup()
{
   canvas = createCanvas(640,420);
   canvas.center(); 

   objectDetector = ml5.objectDetector('cocossd',modelloaded);
   document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function preload()
{
   img = loadImage('https://www.pixelstalk.net/wp-content/uploads/2016/07/Sunrise-Image-Photo-Free-Download.jpg'); 
}

function draw()
{
    image(img,0,0,640,420);
    
    if(status != "")
    {
       for(i = 0; i < objects.length; i++)
       {
       document.getElementById("status").innerHTML = "Status = Object Detected";
       fill("red");
       percent = floor(objects[i].confidence * 100);
       text(objects[i].label + " " + percent + "%",objects[i].x,objects[i].y); 
       noFill();
       stroke("red");
       rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
   }
}

function modelloaded()
{
   console.log("modelloaded");
   status = true ; 
   objectDetector.detect(img,gotresults);
}

function gotresults(error,results)
{
if (error)
{
   console.log(error);
}
console.log(results);
objects = results;
}