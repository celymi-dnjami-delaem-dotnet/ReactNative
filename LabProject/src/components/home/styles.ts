import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export const homeStyles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20,
        marginBottom: 20,
    },
    greetingContainer: {
        marginBottom: 20,
    },
    greetingMessage: {
        fontSize: 18,
        color: theme.colors?.grey1,
    },
    accountsOverviewContainer: {
        marginBottom: 20,
    },
    goodnessCardContainer: {
        marginBottom: 10,
    },
});

export const goodnessCardStyles = StyleSheet.create({
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

export const accountsOverviewStyles = StyleSheet.create({
    root: {
        alignSelf: 'stretch',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 15,
        backgroundColor: theme.colors?.white,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: `rgba(${theme.colors.grey1Rgba},0.3)`,
    },
    mainHeaderTitle: {
        fontSize: 22,
        fontWeight: '600',
    },
    priceTitle: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 5,
    },
    priceHelperTitle: {
        color: theme.colors?.grey0,
        textTransform: 'capitalize',
    },
    cardRowContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    cardRowWithBorder: {
        borderBottomWidth: 1,
        borderBottomColor: `rgba(${theme.colors.grey1Rgba},0.3)`,
    },
    cardRowWithoutBorder: {
        borderBottomWidth: undefined,
    },
    cardRowLeft: {
        display: 'flex',
        flexDirection: 'column',
    },
    leftTitle: {
        fontSize: 18,
    },
    letTitleIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    leftSubtitle: {
        marginTop: 5,
        color: theme.colors?.grey0,
        fontSize: 14,
    },
    cardRowRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightTitle: {
        fontSize: 24,
        marginRight: 10,
    },
    rightIcon: {
        width: 15,
        height: 15,
        tintColor: theme.colors?.primary,
        transform: [{ rotate: '180deg' }],
    },
});
