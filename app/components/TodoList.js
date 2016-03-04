import React, {
  Component,
  View,
  TouchableHighlight,
  Text,
  PropTypes
} from 'react-native';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key={index}
                onClick={() => this.props.onTodoClick(index)} />
        )}
      </View>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
