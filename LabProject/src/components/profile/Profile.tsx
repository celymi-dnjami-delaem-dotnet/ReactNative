import React from 'react';
import { View } from 'react-native';
import { profileStyles as styles } from './styles';
import UserDescription from './UserDescription';

export interface IProfileProps {
    userName: string;
}

const Profile: React.FC<IProfileProps> = ({ userName }) => {
    return (
        <View style={styles.root}>
            <UserDescription userName={userName} />
        </View>
    );
};

export default Profile;
