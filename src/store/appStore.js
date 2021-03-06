import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers/reducer';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewares.push(logger);
}

let finalCreateStore = compose(
    applyMiddleware(...middlewares)
)(createStore);

export default function appStore(initialState) {
    const store = finalCreateStore(reducer, initialState);

    return store;
}
