import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import BackButton from '@/components/button/back-button';
import PostCard from '@/components/PostCard/PostCard';

export default function Home() {
    return (
        <View style={styles.container}>

            {/* header */}
            <View style={styles.header}>
                <BackButton />
            </View>

            {/* body */}
            <ScrollView style={styles.contentlist}>

                {/* post cards */}
                <PostCard hasTopBorder />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />

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
    contentlist: {
        width: '100%',
        backgroundColor: '#ffffff',
    },
    footer: {
        height: 81,
        backgroundColor: '#ffffff',
        borderTopColor: 'rgb(0, 0, 0, 0.25)',
        borderTopWidth: 1,
    },
})
