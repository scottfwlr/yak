import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers/root_reducer';

const logger = createLogger({ diff: true });

const developmentStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunk,
      logger
    )
  )
);

const productionStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);



const configureStore = (process.env.NODE_ENV !== 'production' ? developmentStore : preloadedState)

export default configureStore;
