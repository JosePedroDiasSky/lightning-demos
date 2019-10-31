export default class App extends lng.Application {
  static _template() {
    return {
      Enter: {
        x: 50,
        y: 50,
        text: {
          fontSize: 20,
          text: '$enter:'
        }
      },
      Exit: {
        x: 50,
        y: 180,
        text: {
          fontSize: 20,
          text: '$exit:'
        }
      }
    };
  }

  _init() {
    this._setState('FirstState');
  }

  static _states() {
    return [
      class FirstState extends this {
        $enter(event) {
          this.setMessage('Enter', 'FirstState', event);
          setTimeout(() => {
            this._setState('SecondState');
          }, 3000);
        }
        $exit(event) {
          this.setMessage('Exit', 'FirstState', event);
        }
      },
      class SecondState extends this {
        $enter(event) {
          this.setMessage('Enter', 'SecondState', event);
          setTimeout(() => {
            this._setState('FirstState');
          }, 3000);
        }
        $exit(event) {
          this.setMessage('Exit', 'SecondState', event);
        }
      }
    ];
  }

  setMessage(tag, source, event) {
    this.tag(tag).patch({
      text: {
        text:
          `$${tag.toLowerCase()} ${source}:\n \n` +
          JSON.stringify(event)
            .replace(/[,{}]/g, '\n')
            .replace(/:/g, ': ')
            .replace(/"/g, '')
      }
    });
  }
}
