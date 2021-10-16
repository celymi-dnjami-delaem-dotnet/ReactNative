import React from 'react';
import { View } from 'react-native';
import Button, { ButtonColor, ButtonType } from '../common/button/Button';
import { managementPanelStyles as styles } from './styles';
import { buttonHeight, buttonRadius, ProfileOptions } from '../../constants/profile';

export interface IManagementPanelProps {
    selectedProfileOption: ProfileOptions;
    isLoading: boolean;
    onPressEditProfile: () => void;
    onPressApplyUpdates: () => void;
    onPressCancelChanges: () => void;
}

const ManagementPanel: React.FC<IManagementPanelProps> = ({
    selectedProfileOption,
    isLoading,
    onPressEditProfile,
    onPressApplyUpdates,
    onPressCancelChanges,
}) => (
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
                    isLoading={isLoading}
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

export default ManagementPanel;
