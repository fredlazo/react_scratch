var React = require('react');
var ReactDOM = require('react-dom');

var ToDoComponent = React.createClass({
  render: function(){
      return (
        <h1>Gametime: Sell your tickets here!</h1>
      );
  }
});

ReactDOM.render(<ToDoComponent />, document.getElementById('put-it-here'));
