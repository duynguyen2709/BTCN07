import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import WrappedNormalLoginForm from './components/LoginForm';

import rootReducer from './reducers/RootReducer';
import GameContainer from './containers/GameContainer';

// const store = createStore(rootReducer);
//
// ReactDOM.render(<Provider store={store}>
//                   <GameContainer />
//                 </Provider>,
//                 document.getElementById('root'));
ReactDOM.render(<WrappedNormalLoginForm />,
                document.getElementById('root'));