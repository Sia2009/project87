


var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 400;
block_image_height = 400;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("a.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(50);
	player_object.scaleToHeight(40);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')

{
	console.log("p and shift pressed together");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
    console.log(block_image_height);
	document.getElementById("cwidth").innerHTML = block_image_width;
	document.getElementById("cheight").innerHTML = block_image_height;
}
    
    if(e.shiftKey == true && keyPressed == '77')

{
	console.log("m and shift pressed together");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
    console.log(block_image_height);
	document.getElementById("cwidth").innerHTML = block_image_width;
	document.getElementById("cheight").innerHTML = block_image_height;
}
    if(keyPressed == "38")
        {
            up();
            
        }
    
    if(keyPressed == "40")
        {
            down();
            
        }
    
    if(keyPressed == "37")
        {
            left();
            
        }
    if(keyPressed == "39")
        {
            right();
            
        }
    
    if(keyPressed == "67")
        {
            new_image("ca.png");
            
        }
    
    
         if(keyPressed == "66")
        {
            new_image("bw.png");
            
        }
     if(keyPressed == "72")
        {
            new_image("h.png");

            
        }
    
     if(keyPressed == "73")
        {
            new_image("im.png");
            
        }
     if(keyPressed == "84")
        {
            new_image("t.png");
            
        }
     
        
}

function up()
{
    if(player_y >= 0)
        {
           player_y=player_y - block_image_height;
           canvas.remove(player_object);
           player_update();
            
        }
}

function down()
{
    if(player_y <= 500)
        {
           player_y=player_y + block_image_height;
           canvas.remove(player_object);
           player_update();
            
        }
}

function left()
{
    if(player_x >= 0)
        {
           player_x=player_x - block_image_height;
           canvas.remove(player_object);
           player_update();
            
        }
}

function right()
{
    if(player_x <= 850)
        {
           player_x=player_x + block_image_height;
           canvas.remove(player_object);
           player_update();
            
        }
}


    
  

    
