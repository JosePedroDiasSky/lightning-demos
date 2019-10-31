export default class App extends lng.Application {
  static _template() {
    return {
      Message: { text: { text: "Press 's' key to show Search" } }
    };
  }

  _handleSearch() {
    this.tag('Message').text.text = 'Search';
  }
}
