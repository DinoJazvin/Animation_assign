class MetalDesertBackground {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./MetalDesertBackground.png"), 0, 0, 0, 0, 0, 0);
       // this.x = 0;
       // this.y = 500;
       // this.speed = 200;
    };

    update(){
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 0,0);
    };
}