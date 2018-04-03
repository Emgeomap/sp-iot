import { createStore } from 'redux';
import RootReducer from '../reducer';
export const MyStore = createStore(RootReducer);