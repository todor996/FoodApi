import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PreparationStep = ({step}) => (
  <View>
    <View style={styles.step}>
      <Text>{step.orderNum}. step</Text>
    </View>
    <View style={styles.ingredient}>
      <Text style={styles.bold}>Ingredients: </Text>
      {step.ingredients.map((ingredient, index, array) => {
        return index < array.length - 1 ? (
          <Text>{`${ingredient.name}, `}</Text>
        ) : (
          <Text>{ingredient.name}</Text>
        );
      })}
    </View>
    <View style={styles.preparation}>
      <Text style={styles.bold}>Preparation: </Text>
      <Text>{step.preparation}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  step: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  ingredient: {
    padding: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  preparation: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});
export default PreparationStep;
