import React from 'react';
import PreparationStep from './PreparationStep';
import {StyleSheet, Text, ScrollView, View} from 'react-native';

const PreparationInstruction = ({prepInstructions}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <Text style={styles.headline}>Preparation instructions:</Text>
      {prepInstructions.map(step => {
        return (
          <View>
            <PreparationStep key={step.orderNum} step={step} />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
});

export default PreparationInstruction;
