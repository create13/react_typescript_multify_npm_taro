// import { createStore } from 'redux'
// import reducer from './reducer';
// const windows:any = window;
// const store = createStore(
//   reducer,
//   windows.STATE_FROM_SERVER
// )
// export default store;
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)
export default store;