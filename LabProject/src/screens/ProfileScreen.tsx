import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getUserAvatarLink, getUserDateOfBirth, getUserName } from '../selectors/authSelectors';
import Profile, { IProfileProps } from '../components/profile/Profile';
import { ProfileEditingFields, ProfileOptions } from '../constants/profile';
import { updateUserProfileRequest } from '../actions/authActions';

const ProfileScreen = () => {
    const dispatch = useDispatch();

    const userName: string = useSelector(getUserName);
    const userDateOfBirth: Date = useSelector(getUserDateOfBirth);
    const userAvatarLink: string = useSelector(getUserAvatarLink);
    const isLoading: boolean = useSelector(getIsLoading);

    const [selectedProfileOption, setSelectedProfileOption] = useState<ProfileOptions>(ProfileOptions.View);
    const [newUserName, setNewUserName] = useState<string>(userName);
    const [newUserDateOfBirth, setNewUserDateOfBirth] = useState<Date>(userDateOfBirth);
    const [displayDatePicker, setDisplayDatePicker] = useState<boolean>(false);

    const onPressEditProfile = (): void => {
        setSelectedProfileOption(ProfileOptions.Edit);
    };

    const onPressApplyUpdates = (): void => {
        dispatch(updateUserProfileRequest(newUserName, newUserDateOfBirth));
    };

    const onPressCancelChanges = (): void => {
        setSelectedProfileOption(ProfileOptions.View);
        setNewUserName(userName);
        setNewUserDateOfBirth(userDateOfBirth);
    };

    const onChangeProfileField = (name: ProfileEditingFields, value: string | Date) => {
        switch (name) {
            case ProfileEditingFields.Name:
                setNewUserName(value as string);
                break;
            case ProfileEditingFields.DateOfBirth:
                setNewUserDateOfBirth(value as Date);
                break;
            default:
                break;
        }
    };

    const onToggleDisplayDatePicker = (): void => {
        setDisplayDatePicker(!displayDatePicker);
    };

    const profileProps: IProfileProps = {
        userDescriptionProps: {
            userName,
            userDateOfBirth,
            userAvatarLink,
            selectedProfileOption,
            newUserName,
            newUserDateOfBirth,
            displayDatePicker,
            onChangeProfileField,
            onToggleDisplayDatePicker,
        },
        managementPanelProps: {
            selectedProfileOption,
            isLoading,
            onPressEditProfile,
            onPressApplyUpdates,
            onPressCancelChanges,
        },
    };

    return <Profile {...profileProps} />;
};

export default ProfileScreen;
