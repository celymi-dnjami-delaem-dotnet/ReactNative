import React from 'react';
import { Image, View } from 'react-native';
import { userDescriptionStyles as styles } from './styles';
import UserDescriptionField from './UserDescriptionField';
import Input from '../common/input/Input';
import DatePicker from 'react-native-date-picker';
import Button, { ButtonColor } from '../common/button/Button';
import { buttonHeight, buttonRadius, ProfileEditingFields, ProfileOptions } from '../../constants/profile';

export interface IUserDescriptionProps {
    userName: string;
    userAvatarLink: string;
    userDateOfBirth: Date;
    selectedProfileOption: ProfileOptions;
    newUserName: string;
    newUserDateOfBirth: Date;
    displayDatePicker: boolean;
    onToggleDisplayDatePicker: () => void;
    onChangeProfileField: (name: ProfileEditingFields, value: string | Date) => void;
}

const UserDescription: React.FC<IUserDescriptionProps> = ({
    selectedProfileOption,
    userName,
    userAvatarLink,
    userDateOfBirth,
    newUserName,
    newUserDateOfBirth,
    displayDatePicker,
    onChangeProfileField,
    onToggleDisplayDatePicker,
}) => (
    <View style={styles.root}>
        <Image source={{ uri: userAvatarLink }} style={styles.userAvatar} />
        <UserDescriptionField selectedProfileOption={selectedProfileOption} title="Full name" value={userName}>
            <Input
                label="Full name"
                value={newUserName}
                onChange={e => {
                    onChangeProfileField(ProfileEditingFields.Name, e.nativeEvent.text);
                }}
            />
        </UserDescriptionField>
        <UserDescriptionField
            selectedProfileOption={selectedProfileOption}
            title="Date of birth"
            value={new Date(userDateOfBirth).toLocaleDateString()}
        >
            <Button
                title="Edit date of birth"
                onPress={onToggleDisplayDatePicker}
                color={ButtonColor.Primary}
                height={buttonHeight}
                borderRadius={buttonRadius}
            />
            <DatePicker
                modal={true}
                open={displayDatePicker}
                mode="date"
                date={new Date(newUserDateOfBirth)}
                onDateChange={() => {}}
                onConfirm={date => {
                    onToggleDisplayDatePicker();
                    onChangeProfileField(ProfileEditingFields.DateOfBirth, date);
                }}
                onCancel={onToggleDisplayDatePicker}
            />
        </UserDescriptionField>
    </View>
);

export default UserDescription;
