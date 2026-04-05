import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { JSX } from 'react';


export default function UserAction() {
    return (
        <View style={styles.actionRow}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 30, width: 60, flexDirection: 'row', backgroundColor: '#E5E5E5', borderRadius: 15, paddingHorizontal: 8, marginLeft: 28, borderWidth: 1, borderColor: 'rgb(0, 0, 0, 0.25)', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { }}>
                        <Ionicons name="heart-outline" size={20} color="#60646C" />
                    </TouchableOpacity>
                    <View style={{ width: 1, backgroundColor: 'rgb(0, 0, 0, 0.25)', height: 18, marginHorizontal: 4 }} />
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
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 4, marginBottom: 14 }} onPress={() => { }}>
                    <Ionicons name="share-social-outline" size={20} color="#60646C" />
                </TouchableOpacity>
            </View>
        </View>
    );
}  

const styles = StyleSheet.create({
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
