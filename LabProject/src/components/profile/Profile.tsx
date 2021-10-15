import React from 'react';
import { View } from 'react-native';
import { profileStyles as styles } from './styles';
import UserDescription from './UserDescription';
import ManagementPanel from './ManagementPanel';
import { ProfileOptions } from '../../screens/ProfileScreen';

export interface IProfileProps {
    userName: string;
    userAvatarLink: string;
    userDateOfBirth: Date;
    selectedProfileOption: ProfileOptions;
    onPressEditProfile: () => void;
    onPressApplyUpdates: () => void;
    onPressCancelChanges: () => void;
}

const Profile: React.FC<IProfileProps> = ({
    userName,
    userAvatarLink,
    userDateOfBirth,
    selectedProfileOption,
    onPressEditProfile,
    onPressApplyUpdates,
    onPressCancelChanges,
}) => {
    return (
        <View style={styles.root}>
            <UserDescription userName={userName} userDateOfBirth={userDateOfBirth} userAvatarLink={userAvatarLink} />
            <ManagementPanel
                selectedProfileOption={selectedProfileOption}
                onPressApplyUpdates={onPressApplyUpdates}
                onPressEditProfile={onPressEditProfile}
                onPressCancelChanges={onPressCancelChanges}
            />
        </View>
    );
};

export default Profile;
