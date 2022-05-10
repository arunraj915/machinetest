import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux';



console.disableYellowBox =  true


const App = () => {
   
    return (
    <Provider >
        <PersistGate loading={null} >
            <AppNavigator />
        </PersistGate>
    </Provider>
    )
}

export default App;