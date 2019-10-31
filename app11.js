export default class App extends lng.Application {
  static _template() {
    return {
      UsingShorthand: {
        x: 250,
        y: 100,
        src: './assets/img/LngDocs_LilLightningIdle.png'
      },
      UsingTexture: {
        x: 250,
        y: 300,
        texture: {
          type: lng.textures.ImageTexture,
          src: './assets/img/LngDocs_LilLightningIdle.png'
        }
      }
    };
  }
}
