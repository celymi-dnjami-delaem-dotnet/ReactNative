import React, { useState } from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { Badge } from 'react-native-elements';
import Button, { ButtonColor } from '../common/button/Button';
import Video from 'react-native-video';
import { goodnessCardStyles as styles } from './styles';

export interface IGoodnessCardProps {
    avatarLink: ImageSourcePropType;
    title: string;
    charityName: string;
    time: number;
    isVideo: boolean;
    graphLink: string | ImageSourcePropType;
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

    const handleExpandVideo = (): void => {
        setMutedVideo(!mutedVideo);
        setExpandVideo(!expandView);
    };

    const muteVideo = (): void => {
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
                        source={{ uri: graphLink as string }}
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
                <Image style={styles.image} source={graphLink as ImageSourcePropType} />
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

export default GoodnessCard;
