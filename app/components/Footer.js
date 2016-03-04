import React, {
  StyleSheet,
  Component,
  View,
  Text,
  PropTypes,
  TouchableHighlight
} from 'react-native';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return <Text style={styles.butText}>{name}</Text>
    }

    return (
      <TouchableHighlight onPress={() => this.props.onFilterChange(filter)} underlayColor='transparent'>
        <Text>{name}</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.footer}>
          <Text>Show:</Text>
          <Text>{' '}</Text>
          {this.renderFilter('SHOW_ALL', 'All')}
          <Text>{', '}</Text>
          {this.renderFilter('SHOW_COMPLETED', 'Completed')}
          <Text>{', '}</Text>
          {this.renderFilter('SHOW_ACTIVE', 'Active')}
          <Text>.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: 'row'
  },
  butText: {
    color: '#ff0000'
  }
});

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}
