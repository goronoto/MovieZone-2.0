import {configureStore} from '@reduxjs/toolkit'
import FilmReducer from './FilmsSlice'
import searchReducer from './SearchSlice'
import watchLaterReducer from './WatchLaterSlice'
import switchReducer from './SwitchSlice'

const store = configureStore({
    reducer:{
        movies:FilmReducer,
        search: searchReducer,
        watchLater: watchLaterReducer,
        switch: switchReducer
    }
})

export default store