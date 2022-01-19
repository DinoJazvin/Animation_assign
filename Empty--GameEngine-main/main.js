const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sonic.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imaageSmoothingEnabled = false;

	gameEngine.addEntity(new sonic(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
