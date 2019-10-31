export default class App extends lng.Application {
  static _template() {
    return {
      MyTexture: {
        x: 200,
        y: 250,
        texture: {
          type: lng.textures.ImageTexture,
          src: './assets/img/LngDocs_LilLightningIdle.png'
        },
        transitions: {
          'texture.x': { duration: 4 }
        }
      },
      Wrapper: {
        rect: true,
        w: 200,
        h: 200,
        color: 0xffaaaaaa,
        Contain: {
          x: (w) => w / 2,
          y: (h) => h / 2,
          mount: 0.5,
          texture: {
            type: lng.textures.ImageTexture,
            src: './assets/img/LngDocs_LilLightningIdle.png',
            resizeMode: { type: 'contain', w: 200, h: 200 }
          }
        }
      },
      Cover: {
        x: 200,
        y: 0,
        texture: {
          type: lng.textures.ImageTexture,
          src: './assets/img/LngDocs_LilLightningIdle.png',
          resizeMode: { type: 'cover', w: 200, h: 200, clipY: 0 }
        }
      }
    };
  }

  _init() {
    const myTexture = this.tag('MyTexture');
    myTexture.transition('texture.x').on('finish', () => {
      const current = myTexture.getSmooth('texture.x');
      myTexture.setSmooth('texture.x', current ? 0 : 50);
    });
    myTexture.setSmooth('texture.x', 50);
  }
}
