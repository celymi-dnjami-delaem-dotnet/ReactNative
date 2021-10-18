import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/theme/theme';
import configureStore from './src/store/store';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Navigator from './src/screens/Navigator';

Icon.loadFont();

const { store, persistor } = configureStore();

const App = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        SplashScreen.hide();

        // set timeout to display animation
        setTimeout(() => setIsLoaded(true), 10);
    }, []);

    const logoSize: number = 175;

    return (
        <AnimatedSplash
            translucent={true}
            isLoaded={isLoaded}
            backgroundColor={theme.colors?.primary}
            logoImage={require('./assets/icons/app-logo-icon.png')}
            logoHeight={logoSize}
            logoWidth={logoSize}
        >
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ThemeProvider theme={theme}>
                        <NavigationContainer>
                            <Navigator />
                        </NavigationContainer>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </AnimatedSplash>
    );
};

export default App;
