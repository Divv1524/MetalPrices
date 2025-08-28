// src/screens/HomeScreen.js
import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  StatusBar,
  RefreshControl,
  Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMetalsRequest } from '../redux/slices/metalsSlice';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { data: metals, loading, error } = useSelector((state) => state.metals);

  const METAL_NAMES = ["gold", "silver", "platinum", "palladium"];
  const [refreshing, setRefreshing] = useState(false);

  // Initial fetch
  useEffect(() => {
    METAL_NAMES.forEach(name => dispatch(fetchMetalsRequest(name)));
  }, [dispatch]);

  // Refresh logic
  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    METAL_NAMES.forEach(name => dispatch(fetchMetalsRequest(name)));
    setTimeout(() => setRefreshing(false), 1200);
  }, [dispatch]);

  const renderItem = (metalName) => {
    const metal = metals.find(m => m.name.toLowerCase() === metalName);
    return (
      <TouchableOpacity
        key={metalName}
        style={styles.cardContainer}
        onPress={() => metal && navigation.navigate("Detail", { metal })}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#fefcea', '#f1da36']} // subtle gradient background
          style={styles.card}
        >
          <Text style={styles.title}>
            {metalName.charAt(0).toUpperCase() + metalName.slice(1)}
          </Text>

          {loading[metalName] && <ActivityIndicator color="#b8860b" size="small" />}
          {error[metalName] && <Text style={styles.errorText}>{error[metalName]}</Text>}
          {!loading[metalName] && metal && (
            <>
              <Text style={styles.price}>$ {metal.price24k}</Text>
              <Text style={styles.timestamp}>{metal.time}</Text>
            </>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      <FlatList
        data={METAL_NAMES}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
      {/* 🔹 Refresh button at top */}
      <View style={styles.refreshButton}>
        <Button title="Refresh Prices" onPress={handleRefresh} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecc757ff',
  },
  listContainer: {
    padding: 16,
  },
  cardContainer: {
    marginBottom: 16,
  },
  card: {
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    backgroundColor: '#c6b76aff',
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
    color: "#333",
  },
  price: {
    fontSize: 18,
    color: "#228B22",
    fontWeight: "600",
    marginTop: 4,
  },
  timestamp: {
    fontSize: 14,
    color: "#555",
    marginTop: 6,
  },
  errorText: {
    fontSize: 14,
    color: "red",
    marginTop: 6,
  },
  refreshButton: {
    paddingHorizontal: 16,
    paddingVertical: 100,
  },
});
