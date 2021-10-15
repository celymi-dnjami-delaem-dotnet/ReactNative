import React from 'react';
import { Image, Text, View } from 'react-native';
import { userDescriptionStyles as styles } from './styles';
import { AwesomeUserImageUrl } from '../../constants';

export interface IUserDescriptionProps {
    userName: string;
}

const UserDescription: React.FC<IUserDescriptionProps> = ({ userName }) => {
    return (
        <View style={styles.root}>
            <Image source={{ uri: AwesomeUserImageUrl }} style={styles.userAvatar} />
            <View style={styles.userDescriptionContainer}>
                <Text style={styles.descriptionSubtitle}>Name</Text>
                <Text style={styles.descriptionTitle}>{userName}</Text>
            </View>
            <View style={styles.userDescriptionContainer}>
                <Text style={styles.descriptionSubtitle}>Date of birth</Text>
                <Text style={styles.descriptionTitle}>20.20.2020</Text>
            </View>
        </View>
    );
};

export default UserDescription;
