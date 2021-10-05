import React from 'react';
import { Button, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Routes from '../constants/routes';

export interface ISignInProps extends NativeStackScreenProps<never> {}

const SignIn: React.FC<ISignInProps> = ({ navigation }) => {
    const onPressSignIn = () => {
        navigation.reset({ index: 0, routes: [{ name: Routes.main }] });
    };

    return (
        <View>
            <Button title="SignIn" onPress={onPressSignIn} />
        </View>
    );
};

export default SignIn;
