import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const YourAge = () => {
  const [selectedAge, setSelectedAge] = useState(5); // Default selected age
  const ageRange = Array.from({ length: 20 }, (_, index) => index + 1); // Age range from 1 to 20
  const listRef = useRef<FlatList<any>>(null);

  const renderItem = ({ item }: { item: number }) => {
    return (
      <View style={styles.ageItem}>
        <Text style={item === selectedAge ? styles.selectedAgeText : styles.ageText}>
          {item}
        </Text>
      </View>
    );
  };

  const onScroll = (event: any) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / 60); // Assuming each item width is 60
    setSelectedAge(ageRange[index]);
  };

  const scrollToAge = (age: number) => {
    const index = ageRange.indexOf(age);
    listRef.current?.scrollToIndex({ animated: true, index, viewPosition: 0.5 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Age</Text>
      <FlatList
        ref={listRef}
        data={ageRange}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        getItemLayout={(_, index) => ({
          length: 60,
          offset: 60 * index,
          index,
        })}
        onScroll={(event) => onScroll(event)}
        contentContainerStyle={styles.listContainer}
        snapToInterval={60} // This ensures snapping to each item
        snapToAlignment="center"
      />
      <TouchableOpacity style={styles.button} onPress={() => scrollToAge(selectedAge)}>
        <Text style={styles.buttonText}>Confirm Age</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  listContainer: {
    justifyContent: 'center',
  },
  ageItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    marginHorizontal: 10,
  },
  ageText: {
    fontSize: 18,
    color: 'black',
  },
  selectedAgeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default YourAge;
