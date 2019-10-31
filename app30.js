export default class App extends lng.Application {
  static _template() {
    return {
      ExamplanationText: {
        x: 50,
        y: 28,
        w: 590,
        text: {
          text: '',
          fontSize: 22,
          wordWrap: true,
          wordWrapWidth: 590,
          lineHeight: 30
        }
      },
      MyBlueCube: {
        x: 100,
        y: 200,
        w: 100,
        h: 100,
        rect: true,
        color: 0xff0034dd
      },
      MyGreenCube: {
        x: 400,
        y: 200,
        w: 100,
        h: 100,
        rect: true,
        color: 0xff24dd00
      }
    };
  }

  _init() {
    this._blueCubeAnimation = this.tag('MyBlueCube').animation({
      duration: 3,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [
        {
          p: 'rotation',
          v: { 0: { v: 0, sm: 0 }, 1: { v: -Math.PI * 2, sm: 0 } }
        }
      ]
    });
    this._greenCubeAnimation = this.tag('MyGreenCube').animation({
      duration: 3,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [
        {
          p: 'rotation',
          v: { 0: { v: 0, sm: 0 }, 1: { v: Math.PI * 2, sm: 0 } }
        }
      ]
    });
    this._setState('MyIdleState');
  }

  static _states() {
    return [
      class MyBlueState extends this {
        $enter() {
          this.tag('ExamplanationText').patch({
            text: {
              text: 'I am in my Blue state now! \n (Press Left or Right)'
            }
          });
          this._blueCubeAnimation.play();
        }
        $exit() {
          this._blueCubeAnimation.pause();
        }
        _handleLeft() {
          this._setState('MyIdleState');
        }
        _handleRight() {
          this._setState('MyBlueState.MyNestedGreenState');
        }
        static _states() {
          return [
            class MyNestedGreenState extends MyBlueState {
              $enter() {
                this.tag('ExamplanationText').patch({
                  text: {
                    text:
                      "I am in Blue's nested Green state now! \n (Press Left)"
                  }
                });
                this._greenCubeAnimation.play();
              }
              $exit() {
                this.tag('ExamplanationText').patch({
                  text: {
                    text:
                      'I am back in my Blue state now, \nbut did not $enter(), because I was there all along! \n (Press Left or Right)'
                  }
                });
                this._greenCubeAnimation.pause();
              }
              _handleLeft() {
                this._setState('MyBlueState');
              }
            }
          ];
        }
      },
      class MyIdleState extends this {
        $enter() {
          this.tag('ExamplanationText').patch({
            text: { text: 'I am in my Idle state now! \n (Press Right)' }
          });
          this._blueCubeAnimation.pause();
          this._greenCubeAnimation.pause();
        }
        _handleRight() {
          this._setState('MyBlueState');
        }
      }
    ];
  }
}
