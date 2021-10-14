import React, { useState } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../../theme/theme';
import { Badge } from 'react-native-elements';
import Button, { ButtonColor } from '../common/button/Button';
import Video from 'react-native-video';

export interface IGoodnessCardProps {
    avatarLink: ImageSourcePropType;
    title: string;
    charityName: string;
    time: number;
    isVideo: boolean;
    graphLink: ImageSourcePropType;
    text: string;
    onPressShare: () => void;
}

const GoodnessCard: React.FC<IGoodnessCardProps> = ({
    isVideo,
    avatarLink,
    time,
    title,
    charityName,
    graphLink,
    text,
    onPressShare,
}) => {
    const [expandView, setExpandVideo] = useState<boolean>(false);
    const [mutedVideo, setMutedVideo] = useState<boolean>(false);

    const handleExpandVideo = () => {
        setMutedVideo(!mutedVideo);
        setExpandVideo(!expandView);
    };

    const muteVideo = () => {
        setMutedVideo(!mutedVideo);
    };

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

            {isVideo ? (
                <TouchableOpacity style={styles.videoContainer} onPress={handleExpandVideo}>
                    <Video
                        resizeMode="cover"
                        style={styles.video}
                        source={graphLink as number}
                        paused={!expandView}
                        fullscreen={expandView}
                        repeat={true}
                        onFullscreenPlayerDidDismiss={handleExpandVideo}
                    />
                    <TouchableOpacity style={styles.videoSoundIconContainer} onPress={muteVideo}>
                        <Image style={styles.videoSoundIcon} source={require('../../../assets/icons/play-icon.png')} />
                    </TouchableOpacity>
                </TouchableOpacity>
            ) : (
                <Image style={styles.image} source={graphLink} />
            )}

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
    videoContainer: {
        position: 'relative',
    },
    video: {
        width: undefined,
        height: 200,
    },
    videoSoundIconContainer: {
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
    videoSoundIcon: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
});

export default GoodnessCard;
