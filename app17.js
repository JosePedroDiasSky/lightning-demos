export default class App extends lng.Application {
  static _template() {
    return {
      Image: {
        x: 20,
        y: 20,
        alpha: 0.01,
        src: '/invalid/path.png'
      }
    };
  }

  _init() {
    this.tag('Image').on('txLoaded', () => {
      console.log('texture loaded: ' + this.tag('Image').src);
      this.tag('Image').setSmooth('alpha', 1);
    });

    this.tag('Image').on('txError', () => {
      console.error('texture failed to load: ' + this.tag('Image').src);
      this.showPlaceholder();
    });
  }

  showPlaceholder() {
    this.tag('Image').src = './assets/img/LngDocs_LilLightningIdle.png';
  }
}
