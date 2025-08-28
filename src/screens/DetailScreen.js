// src/screens/DetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function DetailScreen() {
  const route = useRoute();
  const { metal } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>{metal.name} Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Current 24k Price:</Text>
        <Text style={styles.value}>$ {metal.price24k}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Previous Close:</Text>
        <Text style={styles.value}>$ {metal.previousClose}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Previous Open:</Text>
        <Text style={styles.value}>$ {metal.previousOpen}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{metal.date}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Time:</Text>
        <Text style={styles.value}>{metal.time}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecc757ff', // light background
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff4b8ff',
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 6,
  },
});
