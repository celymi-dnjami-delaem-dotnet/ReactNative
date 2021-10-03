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
                <View style={styles.headerContainer}>
                    <Icon style={styles.icon} name="menu-outline" />
                    <Image style={styles.logo} source={require('../../../assets/icons/app-logo-icon.png')} />
                    <Icon onPress={toggleAccountOverlay} style={styles.icon} name="person-circle-outline" />
                </View>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    root: {
        height: 90,
        display: 'flex',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'flex-end',
        backgroundColor: 'pink',
    },
    headerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
