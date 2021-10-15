import React from 'react';
import { View } from 'react-native';
import Button, { ButtonColor, ButtonType } from '../common/button/Button';
import { managementPanelStyles as styles } from './styles';
import { ProfileOptions } from '../../screens/ProfileScreen';

export interface IManagementPanelProps {
    selectedProfileOption: ProfileOptions;
    onPressEditProfile: () => void;
    onPressApplyUpdates: () => void;
    onPressCancelChanges: () => void;
}

const ManagementPanel: React.FC<IManagementPanelProps> = ({
    selectedProfileOption,
    onPressEditProfile,
    onPressApplyUpdates,
    onPressCancelChanges,
}) => {
    const buttonHeight: number = 50;
    const buttonRadius: number = 10;

    return (
        <View style={styles.root}>
            {selectedProfileOption === ProfileOptions.View ? (
                <Button
                    title="Edit Profile"
                    onPress={onPressEditProfile}
                    color={ButtonColor.Primary}
                    height={buttonHeight}
                    borderRadius={buttonRadius}
                />
            ) : (
                <>
                    <Button
                        title="Apply Updates"
                        onPress={onPressApplyUpdates}
                        color={ButtonColor.Primary}
                        height={buttonHeight}
                        borderRadius={buttonRadius}
                        customStyle={styles.applyChangesButton}
                    />
                    <Button
                        title="Cancel"
                        onPress={onPressCancelChanges}
                        color={ButtonColor.Primary}
                        type={ButtonType.Outline}
                        height={buttonHeight}
                        borderRadius={buttonRadius}
                    />
                </>
            )}
        </View>
    );
};

export default ManagementPanel;
