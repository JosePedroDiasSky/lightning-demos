export default class App extends lng.Application {
  static _template() {
    return {
      ExamplanationText: {
        x: 50,
        y: 28,
        text: {
          text: 'Press left or right to swap transitions.',
          fontSize: 22,
          wordWrap: true,
          wordWrapWidth: 450,
          lineHeight: 30
        }
      },
      LilLightning: {
        x: 100,
        y: 50,
        src: './assets/img/LngDocs_LilLightningIdle.png'
      }
    };
  }

  _handleLeft() {
    if (this._index > 0) {
      this._index--;
      this._currentTransition = this._transitions[this._index];
      this.changeSmoothing();
    }
  }

  _handleRight() {
    if (this._index < 6) {
      this._index++;
      this._currentTransition = this._transitions[this._index];
      this.changeSmoothing();
    }
  }

  changeSmoothing() {
    this.tag('ExamplanationText').patch({
      text: { text: `This is the "${this._currentTransition}" transition.` }
    });
    this.tag('LilLightning').patch({ x: 100 }); // Reset to start position;
    //Try to change the parameters of the line below, like duration and delay to see what they change.
    this.tag('LilLightning').patch({
      smooth: {
        x: [
          400,
          { duration: 2, delay: 0, timingFunction: this._currentTransition }
        ]
      }
    });
  }

  _init() {
    this._index = 0;
    this._transitions = [
      'linear',
      'ease',
      'ease-in',
      'ease-out',
      'ease-in-out',
      'step-start',
      'step-end'
    ];
    this._currentTransition = 'linear';
  }
}
