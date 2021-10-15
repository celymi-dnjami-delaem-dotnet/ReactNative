import React from 'react';
import { Image, Text, View } from 'react-native';
import { userDescriptionStyles as styles } from './styles';

export interface IUserDescriptionProps {
    userName: string;
    userAvatarLink: string;
    userDateOfBirth: Date;
}

const UserDescription: React.FC<IUserDescriptionProps> = ({ userName, userAvatarLink, userDateOfBirth }) => {
    console.log(userDateOfBirth);

    return (
        <View style={styles.root}>
            <Image source={{ uri: userAvatarLink }} style={styles.userAvatar} />
            <View style={styles.userDescriptionContainer}>
                <Text style={styles.descriptionSubtitle}>Name</Text>
                <Text style={styles.descriptionTitle}>{userName}</Text>
            </View>
            <View style={styles.userDescriptionContainer}>
                <Text style={styles.descriptionSubtitle}>Date of birth</Text>
                <Text style={styles.descriptionTitle}>{new Date(userDateOfBirth).toLocaleDateString()}</Text>
            </View>
        </View>
    );
};

export default UserDescription;
