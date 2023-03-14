function Player()
{
    this.name = "jugador 1";
    this.x = 1;
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

    this.move = function()
    {   
        if(keyCode === 87)
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
        if(keyCode === 83)
        {
            this.y += this.v;
        }
    }
}