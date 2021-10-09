import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/theme/theme';
import configureStore from './src/store/store';
import { Provider } from 'react-redux';
import Navigator from './src/screens/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { PersistGate } from 'redux-persist/integration/react';

Icon.loadFont();

const { store, persistor } = configureStore();

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <Navigator />
                </NavigationContainer>
            </ThemeProvider>
        </PersistGate>
    </Provider>
);

export default App;
