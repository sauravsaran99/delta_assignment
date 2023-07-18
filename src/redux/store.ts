import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers';


const rootReducer = combineReducers({
    appReducer,
    // Add other reducers for other parts of your application if needed
  });
// Configuration for local storage persistence
const persistConfig = {
    key: 'root', // The key to use when storing the data in local storage
    storage, // Specify the storage mechanism (localStorage in this case)
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, applyMiddleware(/* Add other middlewares here if needed */));
  const persistor = persistStore(store);

  export { store, persistor };
