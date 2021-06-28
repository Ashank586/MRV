canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_x=10;
rover_y=10;

rover_width=100;
rover_height=90;
nasa_mars_images_array=["mars.jpg","mars2.jpg","mars3.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
background_image=nasa_mars_images_array[random_number];
console.log("The image choosen is "+background_image);
rover_image="rover.png";

function add(){
    background_img= new Image();
    background_img.onload=upload_background;
    background_img.src=background_image;

    rover_img= new Image();
    rover_img.onload=upload_rover;
    rover_img.src=rover_image;
}

function upload_background(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",anykeypressed);
function anykeypressed(e){
    ASCII_code=e.keyCode;
    console.log("ASCII code for the key pressed is "+ASCII_code);
    if(ASCII_code=="38"){
        console.log("Up key is pressed.");
        up();
    }
    if(ASCII_code=="39"){
        console.log("Right key is pressed.");
       right();
    }
    if(ASCII_code=="40"){
        console.log("Down key is pressed.");
        down();
    }
    if(ASCII_code=="37"){
        console.log("Left key is pressed.");
        left();
    }
}
function up(){
    if(rover_y>0){
    rover_y -= 10;
    console.log("(up arrow) Current y coordinate of rover is "+rover_y);
    upload_background();
    upload_rover();
    }
}
function down(){
    if(rover_y<=400){
    rover_y += 10;
    console.log("(down arrow) Current y coordinate of rover is "+rover_y);
    upload_background();
    upload_rover();
    }
}
function left(){
    if(rover_x>0){
    rover_x -= 10;
    console.log("(left arrow) Current x coordinate of rover is "+rover_x);
    upload_background();
    upload_rover();
    }
}
function right(){
    if(rover_x<=600){
    rover_x += 10;
    console.log("(right arrow) Current x coordinate of rover is "+rover_x);
    upload_background();
    upload_rover();
    }
}