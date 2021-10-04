import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AccountOverlay from './AccountOverlay';

Icon.loadFont();

export interface ITopBarProps {
    accountOverlayVisible: boolean;
    pageName?: string;
    title?: string;
    toggleAccountOverlay: () => void;
    onPressSignOut: () => void;
}

const TopBar = (props: ITopBarProps) => {
    const { pageName, title, accountOverlayVisible, toggleAccountOverlay, onPressSignOut } = props;

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

                    {pageName && title ? (
                        <View style={styles.pageDescriptionContainer}>
                            <Text style={styles.pageName}>{pageName}</Text>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                    ) : (
                        <Image style={styles.logo} source={require('../../../assets/icons/app-logo-icon.png')} />
                    )}

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
        backgroundColor: '#d73374',
        paddingBottom: 5,
    },
    headerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 180,
        height: 30,
    },
    icon: {
        color: '#FFF',
        fontSize: 32,
    },
    pageDescriptionContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    pageName: {
        fontSize: 18,
        color: '#FFF',
    },
    title: {
        fontSize: 12,
        color: '#FFF',
    },
});

export default TopBar;
