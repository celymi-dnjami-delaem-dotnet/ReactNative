import React from 'react';
import { Text, View } from 'react-native';
import { userDescriptionFieldStyles as styles } from './styles';
import { ProfileOptions } from '../../constants/profile';

export interface IUserDescriptionFieldProps {
    title: string;
    value: string;
    selectedProfileOption: ProfileOptions;
}

const UserDescriptionField: React.FC<IUserDescriptionFieldProps> = ({
    selectedProfileOption,
    title,
    value,
    children,
}) => (
    <View style={styles.root}>
        {selectedProfileOption === ProfileOptions.View ? (
            <React.Fragment>
                <Text style={styles.descriptionSubtitle}>{title}</Text>
                <Text style={styles.descriptionTitle}>{value}</Text>
            </React.Fragment>
        ) : (
            children
        )}
    </View>
);

export default UserDescriptionField;
