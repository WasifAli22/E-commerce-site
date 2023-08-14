import { configureStore  } from '@reduxjs/toolkit'
import cartSlice, { cartActions } from './slice/cartSlice';
// import myCustomApiService from './';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineReducers } from '@reduxjs/toolkit';

// persist actions here
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  cart:cartSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools : true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// ( ( ( (  persister setting is here  ) ) ) )
export const persister = persistStore(store);


