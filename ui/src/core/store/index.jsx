import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { noteReducer } from "./note/note.slice"

const reducer = combineReducers({
    note: noteReducer
})

const store = configureStore({ 
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store