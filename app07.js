export default class App extends lng.Application {
  static _template() {
    return {
      LilLightning: {
        x: 100,
        y: 100,
        src: './assets/img/LngDocs_LilLightningIdle.png'
      }
    };
  }

  _handleLeft() {
    this.tag('LilLightning').patch({ x: 100 });
  }

  _handleRight() {
    this.tag('LilLightning').patch({ x: 400 });
  }
}
