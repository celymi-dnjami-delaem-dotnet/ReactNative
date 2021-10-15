import React, { useState } from 'react';
import AccountOverlay from './AccountOverlay';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { signOut } from '../../actions/authActions';
import { headerRightStyles as styles } from './styles';
import { Image, TouchableOpacity } from 'react-native';
import { AwesomeUserImageUrl } from '../../constants';

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
            <TouchableOpacity style={styles.icon} onPress={toggleAccountOverlay}>
                <Image
                    source={{
                        uri: AwesomeUserImageUrl,
                    }}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </React.Fragment>
    );
};

export default HeaderRight;
