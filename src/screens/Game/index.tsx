import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context/lib/typescript/SafeAreaView';
import { styles } from './styles';

export function Game() {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}
