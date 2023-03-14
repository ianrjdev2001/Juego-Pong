function Ball()
{
    this.x = width / 2;
    this.y = height / 2;
    this.vx = -4;
    this.vy = 4;

    this.show = function()
    {
        ellipse(this.x, this.y, 15, 15);
    }

    this.move = function()
    {
        if(this.y < 1) 
        {
            this.vy = 4;
        }
        if(this.y > height)
        {
            this.vy = -4;
        }
        this.x += this.vx;
        this.y += this.vy;
    }

    this.colission = function(p)
    {
        var d = dist(this.x,this.y,p.x,p.y);
        if(d < 15 + 20) 
        {
            return true;
        }
        return false;
    }
}