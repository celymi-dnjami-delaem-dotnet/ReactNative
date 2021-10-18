import React from 'react';
import { View } from 'react-native';
import { profileStyles as styles } from './styles';
import UserDescription, { IUserDescriptionProps } from './UserDescription';
import ManagementPanel, { IManagementPanelProps } from './ManagementPanel';

export interface IProfileProps {
    userDescriptionProps: IUserDescriptionProps;
    managementPanelProps: IManagementPanelProps;
}

const Profile: React.FC<IProfileProps> = ({ userDescriptionProps, managementPanelProps }) => {
    return (
        <View style={styles.root}>
            <UserDescription {...userDescriptionProps} />
            <ManagementPanel {...managementPanelProps} />
        </View>
    );
};

export default Profile;
