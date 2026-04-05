import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { JSX } from 'react';

import IconUsername from '@/components/PostCard/icon-username';
import UserAction from '@/components/PostCard/useraction';

interface Props {
    hasTopBorder?: boolean;
}

export default function PostCard(props: Props) {
    const { hasTopBorder } = props;
    return (
        <View style={styles.PostCard}>
            <View style={hasTopBorder ? styles.borderline : undefined} />

            <IconUsername >
                <Image
                    source={require('../../../assets/testicon/hashimoto.png')}
                    style={{ height: '100%', width: '100%' }} />
            </IconUsername>
            <View style={styles.emotionaltag} >
                <Text style={{ lineHeight: 10, fontSize: 10, fontWeight: '600', marginVertical: 3, marginLeft: 8 }}>好きなホラー映画</Text>
            </View>
            <Text style={styles.contenttext}>バイオRE4とレクイエムやったんだけど
                他におすすめのやつある？
            </Text>

            {/* いいねとかコメントとかのアクション */}
            <UserAction />

            <View style={styles.borderline} />
        </View>
    );
}

const styles = StyleSheet.create({
    PostCard: {
        backgroundColor: '#ffffff',
        paddingBottom: 14,
    },
    emotionaltag: {
        alignSelf: 'flex-start',
        backgroundColor: '#a085d6',
        borderRadius: 15,
        paddingHorizontal: 8,
        marginLeft: 28,
        borderWidth: 1,
        borderColor: 'rgb(0, 0, 0, 0.25)',
        justifyContent: 'center',
    },
    contenttext: {
        fontSize: 14,
        lineHeight: 20,
        marginTop: 8,
        marginHorizontal: 28,
    },
    borderline: {
        height: 0.3,
        backgroundColor: 'rgb(0, 0, 0, 0.25)',
        marginHorizontal: 28,
    }
}); 
