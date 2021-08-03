import { createStore } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistCombineReducers} from 'redux-persist';

// Values to save 
import { Task } from "./task";
import { CompleteTask } from "./CompleteTask";


export const ConfigureStore = () => {
    const config = {
        key: 'root',
        storage: AsyncStorage,
        debug: true
    }

    const store = createStore(
        persistCombineReducers(config, {
            // data
            task: Task,
            completeTask: CompleteTask
        })
    );

    const persistor = persistStore(store)
    return {store, persistor}
}
