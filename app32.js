export default class App extends lng.Application {
  static _template() {
    return {
      x: 20,
      y: 20,
      Button: {
        type: ExampleButton,
        buttonText: 'Toggle',
        //indicates the signals that your child component will send
        signals: {
          toggleText: true
        }
      },
      Message: {
        y: 80,
        alpha: 0,
        text: { text: 'Message' }
      }
    };
  }
  toggleText(alpha, color) {
    this.tag('Message').patch({ color, smooth: { alpha } });
  }
  _getFocused() {
    return this.tag('Button');
  }
}

class ExampleButton extends lng.Component {
  static _template() {
    return {
      color: 0xffffffff,
      texture: lng.Tools.getRoundRect(200, 40, 4),
      Label: {
        x: 100,
        y: 22,
        mount: 0.5,
        color: 0xff1f1f1f,
        text: { fontSize: 20 }
      }
    };
  }
  _init() {
    this.tag('Label').patch({ text: { text: this.buttonText } });
    this.toggle = false;
    this.buttonColor = 0xffff00ff;
  }
  _handleEnter() {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.buttonColor =
        this.buttonColor === 0xffff00ff ? 0xff00ffff : 0xffff00ff;
    }
    this.signal('toggleText', this.toggle, this.buttonColor);
  }
}
