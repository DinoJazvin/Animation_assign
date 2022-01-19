class sonic {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sonic.png"), 0, 0, 38, 50, 8, 0.15);
    };

    update(){

    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
    };
}