export default class App extends lng.Application {
  static _template() {
    return {
      Example: {
        texture: lng.Tools.getCanvasTexture(App._createCanvas)
      }
    };
  }

  static _createCanvas(cb, stage) {
    let canvas = stage.platform.getDrawingCanvas();
    canvas.width = 100;
    canvas.height = 100;
    let ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.fillStyle = lng.StageUtils.getRgbaString(0xffff0000);
    ctx.fillRect(10, 10, 80, 80);
    cb(null, canvas);
  }
}
