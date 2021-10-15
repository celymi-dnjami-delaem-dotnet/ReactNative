import React from 'react';
import { View } from 'react-native';
import { profileStyles as styles } from './styles';
import UserDescription from './UserDescription';

export interface IProfileProps {
    userName: string;
    userAvatarLink: string;
    userDateOfBirth: Date;
}

const Profile: React.FC<IProfileProps> = ({ userName, userAvatarLink, userDateOfBirth }) => {
    return (
        <View style={styles.root}>
            <UserDescription userName={userName} userDateOfBirth={userDateOfBirth} userAvatarLink={userAvatarLink} />
        </View>
    );
};

export default Profile;
