import { FunctionComponent } from 'react';
import { ImageSourcePropType } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface ITabBarType {
    name: string;
    title: string;
    component: FunctionComponent<NativeStackScreenProps<Record<string, never>>>;
    iconSource: ImageSourcePropType;
}
