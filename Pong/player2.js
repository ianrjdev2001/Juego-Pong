function Player2()
{
    this.name = "jugador 2";
    this.x = width - 20;
    this.y = height / 2;
    this.v = 4;
    this.w = 20;
    this.h = 80;
    this.points = 0;

    this.show = function()
    {
        rectMode(CENTER);
        rect(this.x,this.y,this.w,this.h);
    }
    
    this.move = function(b)
    {
        if(keyCode === UP_ARROW)
        {
            if(this.y < 42) 
            {
                this.y += this.v;   
            }
            else
            {
                this.y -= this.v;
            }
        }
        if(keyCode === DOWN_ARROW)
        {
            this.y += this.v;
        }
    }
}