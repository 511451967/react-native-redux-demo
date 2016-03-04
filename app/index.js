import React, {
  Component,
  StatusBarIOS,
  Platform
} from 'react-native';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import App from './containers/App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
//const reducer = combineReducers(reducers); 多个减速器使用
const store = createStoreWithMiddleware(reducers);

// 打印初始状态
console.log(store.getState());

// 监听 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

export default class Index extends Component {

  componentDidMount () {
    if (Platform.OS === 'ios') {
      StatusBarIOS.setHidden(true)
    }
  }

  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
