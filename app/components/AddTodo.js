import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  PropTypes
} from 'react-native';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  onInput (text) {
    this.setState({
      text
    });
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
        <TextInput
          style={{width: 200, height: 20}}
          underlineColorAndroid="transparent"
          placeholder="标题"
          onChangeText={(text) => this.onInput(text)}
          value = {this.state.text}
        />
        <TouchableHighlight onPress={() => this.handleClick()} underlayColor='transparent'>
          <Text>添加</Text>
        </TouchableHighlight>
      </View>
    );
  }

  handleClick() {
    const value = this.state.text;
    this.props.onAddClick(value);
    this.setState({
      text: ''
    });
    //node.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};