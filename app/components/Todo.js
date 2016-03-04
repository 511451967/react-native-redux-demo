import React, {
  Component,
  View,
  TouchableHighlight,
  Text,
  PropTypes
} from 'react-native';

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onClick} underlayColor='transparent'>
        <Text style={{
          textDecorationLine: this.props.completed ? 'line-through' : 'none',
          color: this.props.completed ? '#000000' : '#ff0000'
        }}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
