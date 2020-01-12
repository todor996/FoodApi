import {StyleSheet, View, Text} from 'react-native';
import {dark, light, primary} from '../constants/consts';
import React from 'react';
const Tags = ({recipe: {tags}}) => {
  // const tags = Object.keys(recipe).filter(key => {
  //   const el = recipe[key];
  //   return typeof el === 'boolean' && el;
  // });
  return tags ? (
    <View style={styles.tagsSection}>
      {tags.map(tag => {
        return (
          <Text key={tag.id} style={styles.tag}>
            {tag.name}
          </Text>
        );
      })}
    </View>
  ) : null;
};

export default Tags;

const styles = StyleSheet.create({
  tagsSection: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  tag: {
    color: dark,
    alignSelf: 'flex-start',
    backgroundColor: primary,
    fontStyle: 'italic',
    margin: 5,
    padding: 5,
    height: 30,
  },
});
