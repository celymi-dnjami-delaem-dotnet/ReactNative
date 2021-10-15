import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserAvatarLink, getUserDateOfBirth, getUserName } from '../selectors/authSelectors';
import Profile, { IProfileProps } from '../components/profile/Profile';

export enum ProfileOptions {
    View = 'View',
    Edit = 'Edit',
}

const ProfileScreen = () => {
    const userName: string = useSelector(getUserName);
    const userDateOfBirth: Date = useSelector(getUserDateOfBirth);
    const userAvatarLink: string = useSelector(getUserAvatarLink);

    const [selectedProfileOption, setSelectedProfileOption] = useState<ProfileOptions>(ProfileOptions.View);

    const onPressEditProfile = (): void => {
        setSelectedProfileOption(ProfileOptions.Edit);
    };

    const onPressApplyUpdates = (): void => {};

    const onPressCancelChanges = (): void => {
        setSelectedProfileOption(ProfileOptions.View);
    };

    const profileProps: IProfileProps = {
        userName,
        userDateOfBirth,
        userAvatarLink,
        selectedProfileOption,
        onPressEditProfile,
        onPressApplyUpdates,
        onPressCancelChanges,
    };

    return <Profile {...profileProps} />;
};

export default ProfileScreen;
