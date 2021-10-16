import React from 'react';
import { StyleSheet, View } from 'react-native';
import AccountsSummaryDetails from './AccountsSummaryDetails';

const Accounts = () => {
    return (
        <View style={styles.root}>
            <AccountsSummaryDetails />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 20,
    },
});

export default Accounts;
