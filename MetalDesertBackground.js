class MetalDesertBackground {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./MetalDesertBackground.png"), 0, 0, 960, 576, 0, 100000);

    };

    update(){
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 0,0);
    };
}