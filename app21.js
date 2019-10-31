export default class App extends lng.Application {
  static _template() {
    return {
      LilLightning: {
        x: 300,
        y: 300,
        src: './assets/img/LngDocs_LilLightningFlying.png',
        transitions: {
          x: { duration: 1 },
          y: { duration: 1, timingFunction: 'linear' }
        }
      },
      Message: {
        x: 50,
        y: 50,
        text: { fontSize: 32 }
      }
    };
  }

  _handleLeft() {
    const subject = this.tag('LilLightning');
    const targetX = subject.getSmooth('x') - 100;
    subject.setSmooth('x', targetX);
  }

  _handleRight() {
    const subject = this.tag('LilLightning');
    const targetX = subject.getSmooth('x') + 100;
    subject.setSmooth('x', targetX);
  }

  _handleUp() {
    const subject = this.tag('LilLightning');
    const targetY = subject.getSmooth('y') - 100;
    subject.setSmooth('y', targetY);
  }

  _handleDown() {
    const subject = this.tag('LilLightning');
    const targetY = subject.getSmooth('y') + 100;
    subject.setSmooth('y', targetY);
  }

  _init() {
    this.tag('LilLightning')
      .transition('x')
      .on('start', () => {
        this.tag('Message').text.text =
          'Started X transition to ' + this.tag('LilLightning').getSmooth('x');
      });
    this.tag('LilLightning')
      .transition('x')
      .on('finish', () => {
        this.tag('Message').text.text = 'Finished X transition';
      });
    this.tag('LilLightning')
      .transition('y')
      .on('start', () => {
        this.tag('Message').text.text =
          'Started Y transition to ' + this.tag('LilLightning').getSmooth('y');
      });
    this.tag('LilLightning')
      .transition('y')
      .on('finish', () => {
        this.tag('Message').text.text = 'Finished Y transition';
      });
  }
}
