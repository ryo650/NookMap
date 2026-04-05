import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { JSX } from 'react';

interface Props {
    children: JSX.Element;
}

export default function IconUsername(props: Props) {
    const { children } = props;
    return (
        <View style={styles.headerRow}>

            <View style={styles.user}>
                <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8} style={styles.icon} >
                    {children}
                </TouchableOpacity>
                <Text style={styles.username}>どんぱっちん</Text>
            </View>

            <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8} style={styles.icon} >
                <Ionicons name="ellipsis-horizontal" size={24} color="#111111" />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    headerRow: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:28,
        paddingBottom: 7,
        paddingTop: 13,

    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        marginRight: 6,
        overflow: 'hidden',
    },
    username: {
        fontWeight: '600',
    }
});
