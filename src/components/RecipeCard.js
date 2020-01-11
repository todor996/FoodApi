import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {faClock, faHamburger} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {lighter} from '../constants/consts';
import Tags from './TagsSection';

const RecipeCard = ({recipe}) => {
  return (
    <View style={styles.recipeBulkCardSection}>
      <View style={styles.row}>
        <Image
          style={styles.recipeImg}
          source={{
            uri: recipe.image,
          }}
        />
      </View>
      <View>
        <View style={[styles.row, styles.recipeTitle]}>
          <Text>{recipe.title}</Text>
        </View>
        <View style={[styles.row, styles.noBorder]}>
          <View style={styles.recipeFeature}>
            <FontAwesomeIcon icon={faClock} />
            <Text>{recipe.prepTime} min</Text>
          </View>
          <View style={styles.recipeFeature}>
            <FontAwesomeIcon icon={faHamburger} />
            <Text>{recipe.servings}</Text>
          </View>
        </View>
        <View style={[styles.row, styles.noBorder]}>
          <Tags recipe={recipe} />
        </View>
      </View>
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  recipeBulkCardSection: {
    backgroundColor: lighter,
    width: 300,
    height: 300,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  recipeImg: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  recipeTitle: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
    height: 75,
    padding: 10,
    textAlign: 'center',
  },
  row: {
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.2,
    flexDirection: 'row',
    width: '100%',
  },
  recipeFeature: {
    padding: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    alignSelf: 'center',
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 13,
    borderTopWidth: 0,
    borderTopColor: 'lightgray',
  },
  noBorder: {
    borderWidth: 0,
  },
});
