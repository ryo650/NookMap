import { Ionicons } from '@expo/vector-icons';
import { GlassView } from 'expo-glass-effect';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function BackButton() {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={() => router.back()} activeOpacity={0.8}>
      <GlassView style={styles.glass}>
        <Ionicons name="chevron-back" size={24} color="#111111" />
      </GlassView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 60,
    height: 60,
    marginTop: 52,
    marginLeft: 20,
  },
  glass: {
    flex: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
