var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         Hello World! React training
//       </div>
//     )
//   }
// }

class Badge extends React.Component {
  render () {
    return (
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username} </h3>
      </div>
    )
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

ReactDOM.render(
  <Badge
    name="Some name"
    username="someusername"
    img="https://avatars2.githubusercontent.com/u/5829095?v=4&s=460"
  />,
  document.getElementById('app')
);
