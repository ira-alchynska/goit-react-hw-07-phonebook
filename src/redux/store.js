import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  //persistStore,
  //persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactsReducer from './Contacts/contacts-redusers';
//import storage from 'redux-persist/lib/storage';

/* const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}; */
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

//const persistor = persistStore(store);

export { store };
