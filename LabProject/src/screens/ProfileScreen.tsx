import React from 'react';
import { useSelector } from 'react-redux';
import { getUserAvatarLink, getUserDateOfBirth, getUserName } from '../selectors/authSelectors';
import Profile, { IProfileProps } from '../components/profile/Profile';

const ProfileScreen = () => {
    const userName: string = useSelector(getUserName);
    const userDateOfBirth: Date = useSelector(getUserDateOfBirth);
    const userAvatarLink: string = useSelector(getUserAvatarLink);

    const profileProps: IProfileProps = {
        userName,
        userDateOfBirth,
        userAvatarLink,
    };

    return <Profile {...profileProps} />;
};

export default ProfileScreen;
