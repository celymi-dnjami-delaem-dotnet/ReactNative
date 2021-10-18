import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Button, { ButtonColor, ButtonType } from '../common/button/Button';
import Input, { InputType } from '../common/input/Input';

const SearchPanel = () => {
    return (
        <View style={styles.root}>
            <View style={styles.inputContainer}>
                <Input placeholder="Search transactions" inputType={InputType.Outline} />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    disabled={true}
                    title="Filter by"
                    color={ButtonColor.Primary}
                    type={ButtonType.Outline}
                    height={38}
                    borderRadius={50}
                    fontSize={14}
                />
            </View>
        </View>
    );
};

export default SearchPanel;
