import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface ICheckingProps {
    totalAmount: number;
}

const Checking = ({ totalAmount }: ICheckingProps) => {
    return (
        <View style={styles.root}>
            <Text>{totalAmount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 20,
    },
});

export default Checking;
