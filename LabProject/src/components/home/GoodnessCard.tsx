import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import theme from '../../theme/theme';
import { Badge } from 'react-native-elements';
import Button, { ButtonColor } from '../common/Button';

export interface IGoodnessCardProps {
    avatarLink: ImageSourcePropType;
    title: string;
    charityName: string;
    time: number;
    imageLink: ImageSourcePropType;
    text: string;
    onPressShare: () => void;
}

const GoodnessCard = ({ avatarLink, time, title, charityName, imageLink, text, onPressShare }: IGoodnessCardProps) => {
    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <Image style={styles.avatarIcon} source={avatarLink} />
                <View style={styles.headerTitlesSummaryContainer}>
                    <View style={styles.headerTitleContainer}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.headerTitleContainer}>
                        <Text style={styles.subtitle}>{charityName}</Text>
                        <Badge badgeStyle={styles.badge} />
                        <Text style={styles.subtitle}>{time} hrs ago</Text>
                    </View>
                </View>
            </View>

            <Image style={styles.image} source={imageLink} />

            <View style={styles.body}>
                <Text style={styles.mainText}>{text}</Text>
                <Button
                    title="Share to spread the word"
                    onPress={onPressShare}
                    color={ButtonColor.Primary}
                    borderRadius={30}
                    height={60}
                    fontSize={14}
                    icon={
                        <Image
                            style={styles.buttonIcon}
                            source={require('../../../assets/icons/share-arrow-icon.png')}
                        />
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: theme.colors?.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: `rgba(${theme.colors.grey1Rgba},0.3)`,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    headerTitlesSummaryContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 15,
        height: 50,
    },
    headerTitleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 19,
        color: theme.colors.black,
    },
    subtitle: {
        fontSize: 15,
        color: theme.colors.grey0,
    },
    badge: {
        backgroundColor: theme.colors.primary,
        marginHorizontal: 5,
    },
    avatarIcon: {
        width: 50,
        height: 50,
    },
    image: {
        width: undefined,
        height: 175,
        resizeMode: 'cover',
    },
    body: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    mainText: {
        marginBottom: 20,
        fontSize: 15,
        color: theme.colors.black,
    },
    buttonIcon: {
        width: 14,
        height: 14,
        marginRight: 10,
    },
});

export default GoodnessCard;
