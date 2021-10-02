import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AccountOverlay from './AccountOverlay';

Icon.loadFont();

export interface ITopBarProps {
    accountOverlayVisible: boolean;
    toggleAccountOverlay: () => void;
    onPressSignOut: () => void;
}

const TopBar = (props: ITopBarProps) => {
    const { accountOverlayVisible, toggleAccountOverlay, onPressSignOut } = props;

    return (
        <React.Fragment>
            <AccountOverlay
                accountOverlayVisible={accountOverlayVisible}
                toggleAccountOverlay={toggleAccountOverlay}
                onPressSignOut={onPressSignOut}
            />
            <View style={styles.root}>
                <Icon style={styles.icon} name="menu-outline" />
                <Image style={styles.logo} source={require('../../../assets/icons/app-logo-icon.png')} />
                <Icon onPress={toggleAccountOverlay} style={styles.icon} name="person-circle-outline" />
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: 50,
        display: 'flex',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    logo: {
        width: 200,
        height: 50,
    },
    icon: {
        color: '#FFF',
        fontSize: 32,
    },
});

export default TopBar;
