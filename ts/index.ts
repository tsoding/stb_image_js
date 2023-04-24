async function start() {
    const tsodinPog = await stbi_load_from_url("img/tsodinPog.png");
    const tsodinThink = await stbi_load_from_url("img/tsodinThink.png");

    const appId = "app";
    const app = document.getElementById(appId) as HTMLCanvasElement;
    if (app === null) {
        throw new Error(`Could not find canvas with id ${appId}`);
    }
    app.width = tsodinPog.width + tsodinThink.width;
    app.height = Math.max(tsodinPog.height, tsodinThink.height);
    const ctx = app.getContext("2d");
    if (ctx === null) {
        throw new Error("Could not create 2d context");
    }
    ctx.putImageData(tsodinPog, 0, 0);
    ctx.putImageData(tsodinThink, tsodinPog.width, 0);
}
start();

