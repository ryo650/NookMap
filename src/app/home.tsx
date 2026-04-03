import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { HeaderBackButton } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '@/components/button/back-button';

export default function Home() {
    return (
        <View style={styles.container}>

            {/* header */}
            <View style={styles.header}>
                <BackButton />
            </View>

            {/* body */}
            <View style={styles.body}>
                <View style={styles.content}></View>
            </View>

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
        height:60,
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
    body: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        margin: 20,
        backgroundColor: 'white',
    },
    footer: {
        height: 81,
        backgroundColor: '#ffffff',
        borderTopColor: 'rgb(0, 0, 0, 0.25)',
        borderTopWidth: 1,
    },
})
