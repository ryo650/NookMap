import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import { HeaderBackButton } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '@/components/button/back-button';

import IconUsername from '@/components/content/icon-username';

export default function Home() {
    return (
        <View style={styles.container}>

            {/* header */}
            <View style={styles.header}>
                <BackButton />
            </View>

            {/* body */}
            <ScrollView style={styles.contentlist}>

                {/* content */}
                <View style={styles.content}>
                    <IconUsername >
                        <Image
                            source={require('../../assets/testicon/hashimoto.png')}
                            style={{ height: '100%', width: '100%' }} />
                    </IconUsername>
                    <View style={styles.emotionaltag} >
                        <Text style={{ lineHeight: 10, fontSize: 10, fontWeight: '600', marginVertical: 3, marginLeft: 8 }}>好きなホラー映画</Text>
                    </View>
                    <Text style={styles.contenttext}>バイオRE4とレクイエムやったんだけど
                        他におすすめのやつある？
                    </Text>

                    {/* いいねとかコメントとかのアクション */}
                    <View style={styles.actionRow}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ height: 30, width: 60, flexDirection: 'row', backgroundColor: '#E5E5E5', borderRadius: 15, paddingHorizontal: 8, marginLeft: 28, borderWidth: 1, borderColor: 'rgb(0, 0, 0, 0.25)', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { }}>
                                    <Ionicons name="heart-outline" size={20} color="#60646C" />
                                </TouchableOpacity>
                                <View style={{ width: 1, backgroundColor: 'rgb(0, 0, 0, 0.25)', height:18, marginHorizontal: 4 }} />
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} onPress={() => { }}>
                                    <Text style={{ marginLeft: 4, lineHeight: 24, fontSize: 14, color: '#60646C' }}>Y</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 28, marginTop: 4, marginBottom: 14 }} onPress={() => { }}>
                                <Ionicons name="chatbubble-outline" size={20} color="#60646C" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginRight: 14 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 28, marginBottom: 14 }} onPress={() => { }}>
                                <Ionicons name="bookmark-outline" size={20} color="#60646C" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',marginLeft:4, marginBottom: 14 }} onPress={() => { }}>
                                <Ionicons name="share-social-outline" size={20} color="#60646C" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>

            {/* footer */}
            <View style={styles.footer}></View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 124,
        backgroundColor: '#ffffff',
        borderBottomColor: 'rgb(0, 0, 0, 0.25)',
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
    },
    headerBackButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: 'rgb(0, 0, 0, 0.5)',
        marginLeft: 20,
        marginTop: 52,
    },
    headerBackButtonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
    },
    contentlist: {
        backgroundColor: 'red',
        width: '100%',
    },
    content: {
        backgroundColor: 'white',
    },
    emotionaltag: {
        backgroundColor: 'rgba(176, 139, 255, 100)',
        height: 16,
        borderRadius: 4,
        marginLeft: 28,
        marginRight: 14,
        marginBottom: 11,
        justifyContent: 'center',
    },
    contenttext: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400',
        marginBottom: 9,
        marginLeft: 28,
        marginRight: 14,
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footer: {
        height: 81,
        backgroundColor: '#ffffff',
        borderTopColor: 'rgb(0, 0, 0, 0.25)',
        borderTopWidth: 1,
    },
})
