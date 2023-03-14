var player;
var player2;
var b;
var bals = [];
function setup()
{
    createCanvas(windowWidth,windowHeight);
    player = new Player();
    b = new Ball();
    player2 = new Player2();
    for(var i = 0; i < 11; i++)
    {
        bals.push(new Ball());
    }
}

function draw()
{
    background("black");
    player.move();
    player.show();
    b.move();
    b.show();
    player2.show();
    player2.move(b);

    if(b.colission(player)) 
    {
        b.vx = 4;
    }
    if(b.colission(player2)) 
    {
        b.vx = -4;
    }
    if(b.x < 0) 
    {
        player2.points++;
        alert("El jugador "+player2.name+" lleva "+player2.points+" de puntuacion");
        throwNewBall();
    }
    if(b.x > width) 
    {
        player.points++;
        alert("El jugador "+player.name+" lleva "+player.points+" de puntuacion");
        throwNewBall();
    }
}

function throwNewBall()
{
    if(bals.length > 0) 
    {
        b = bals.pop();

        if(player.points || player2.points == 5)
        {
            if(player.points == 5) 
            {
                alert("Gano el jugador 1");    
                alert("Game Over");
                window.location.reload();
            }
            else if(player2.points == 5) 
            {
                alert("Gano el jugador 2");    
                alert("Game Over");
                window.location.reload();
            }
        }
    }
}