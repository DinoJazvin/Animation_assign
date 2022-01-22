class sonic {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sonic.png"), 0, 0, 38, 50, 8, 0.15);
        this.x = 0;
        this.y = 500;
        this.speed = 200;
    };

    update(){
        this.x += this.speed * this.game.clockTick;
        if(this.x > 800)
            this.x = 0;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}