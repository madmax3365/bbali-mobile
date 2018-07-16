import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from './reducers';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, {}, applyMiddleware(thunk));
export const persistor = persistStore(store);
