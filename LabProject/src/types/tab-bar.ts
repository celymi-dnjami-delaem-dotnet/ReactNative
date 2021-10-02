import React from 'react';
import { ImageSourcePropType } from 'react-native';

export interface ITabBarType {
    name: string;
    component: React.FunctionComponent;
    iconSource: ImageSourcePropType;
}
