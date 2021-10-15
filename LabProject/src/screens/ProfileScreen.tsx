import React from 'react';
import { useSelector } from 'react-redux';
import { getUserName } from '../selectors/authSelectors';
import Profile, { IProfileProps } from '../components/profile/Profile';

const ProfileScreen = () => {
    const userName: string = useSelector(getUserName);

    const profileProps: IProfileProps = {
        userName,
    };

    return <Profile {...profileProps} />;
};

export default ProfileScreen;
