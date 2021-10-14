import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AccountOverlay from './AccountOverlay';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { signOut } from '../../actions/authActions';
import { headerRightStyles as styles } from './styles';

export interface IHeaderRightProps extends NativeStackScreenProps<Record<string, object | undefined>> {}

const HeaderRight: React.FC<IHeaderRightProps> = () => {
    const dispatch = useDispatch();
    const [accountOverlayVisible, setAccountOverlayVisible] = useState(false);

    const onPressSignOut = (): void => {
        dispatch(signOut());
    };

    const toggleAccountOverlay = (): void => {
        setAccountOverlayVisible(!accountOverlayVisible);
    };

    return (
        <React.Fragment>
            <AccountOverlay
                accountOverlayVisible={accountOverlayVisible}
                toggleAccountOverlay={toggleAccountOverlay}
                onPressSignOut={onPressSignOut}
            />
            <Icon onPress={toggleAccountOverlay} style={styles.icon} name="person-circle-outline" />
        </React.Fragment>
    );
};

export default HeaderRight;
