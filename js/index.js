'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      inputValue: ''
    };

    _this.onInputChange = _this.onInputChange.bind(_this);
    return _this;
  }

  App.prototype.onInputChange = function onInputChange(e) {
    var value = e.target.value;

    this.setState({
      inputValue: value
    });
  };

  App.prototype.render = function render() {
    var inputValue = this.state.inputValue;

    return React.createElement(
      'div',
      { className: 'input-wrapper' },
      React.createElement('input', {
        onChange: this.onInputChange,
        placeholder: 'Search...',
        value: inputValue,
        spellCheck: false
      }),
      React.createElement(
        'span',
        { className: 'input-highlight' },
        inputValue.replace(/ /g, ' ')
      )
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));