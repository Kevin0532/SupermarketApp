import React from "react";
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';



const categorieData = [
  { emoji: '🥦', text: 'Groente', backgroundColor: '#76D33D' },
  { emoji: '🥛', text: 'Zuivel', backgroundColor: '#CCF1FD' },
  { emoji: '🍎', text: 'Fruit', backgroundColor: '#EEC1C6' },
  { emoji: '🍞', text: 'Brood', backgroundColor: '#DCC1A8' },
  { emoji: '🥩', text: 'Vlees', backgroundColor: '#CE9090' },
  { emoji: '🐟', text: 'Vis', backgroundColor: '#B2D3E5' },
  { emoji: '🌱', text: 'Vega', backgroundColor: '#5AE34A' },
  { emoji: '🥤', text: 'Drinken', backgroundColor: '#3DA6D3' },
  { emoji: '🍖', text: 'BBQ', backgroundColor: '#E3A24A' },
  { emoji: '⚕️', text: 'Gezondheid', backgroundColor: '#DEE34A' },
];

const favoriteProducts = [
  { title: 'Calve Pindakaas', price: 3.19, amount: 500 },
  { title: 'Nutella', price: 5.39, amount: 750 },
  { title: 'Kaas', price: 7.65, amount: 500 },
  { title: 'Calve Pindakaas', price: 3.19, amount: 500 },
  { title: 'Calve Pindakaas', price: 3.19, amount: 500 },

]


export default function App() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.welcomeBar}>
        <Text style={styles.welcomeText}>Welkom! 👋</Text>
        <View style={styles.profilePicture}></View>
      </View>

      <View style={styles.textInputContainer}>
        <TextInput placeholder="Zoek een item" style={styles.textInputBar} />
      </View>

      <View style={styles.topicButtonContainer}>
        <View style={styles.topicButtonDalers}>
          <Text style={styles.topicText}>Dalers</Text>
        </View>
    
        <View style={styles.topicButtonStijgers}>
            <Text style={styles.topicText}>Stijgers</Text>
        </View>

      </View>

      <View style={styles.discountContainerParent}>
        <Text></Text>
        <View style={styles.discountContainer}></View>
      </View>

      <View style={styles.categorieenSection}>
        <Text style={styles.categorieenText}>Categorieën</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categorieenButtonSection}>
          {categorieData.map((categorie, index) => (
            <View style={styles.categorieItem} key={index}>
              <View style={[styles.catogrieButton, { backgroundColor: categorie.backgroundColor }]} key={index}>
                <Text style={styles.catogrieText}>{categorie.emoji}</Text>
              </View>
              <Text style={styles.catogrieButtonText}>{categorie.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      
      <View style={styles.favoritesSection}>
        <Text style={styles.favoriteText}>Favorieten</Text>

        <View style={styles.favoriteButtonSection}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categorieenButtonSection}>
            <View>
              <View style={styles.favoriteButton}></View>
              <Text style={styles.favoriteButtonText}>Calvé Pindakaas</Text>
              <Text style={styles.priceTagItem}>€ 3.19 </Text>
              <Text style={styles.favoriteContentText}>500g</Text>
            </View>
            
            <View>
              <View style={styles.favoriteButton}></View>
              <Text style={styles.favoriteButtonText}>Nutella</Text>
              <Text style={styles.priceTagItem}>€ 5.34 </Text>
              <Text style={styles.favoriteContentText}>750g</Text>
            </View>

            <View>
              <View style={styles.favoriteButton}></View>
              <Text style={styles.favoriteButtonText}>Nutella</Text>
              <Text style={styles.priceTagItem}>€ 5.34 </Text>
              <Text style={styles.favoriteContentText}>750g</Text>
            </View>

            <View style={styles.favoriteButton}></View>
            <View style={styles.favoriteButton}></View>
            <View style={styles.favoriteButton}></View>
          </ScrollView>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  welcomeBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'System',
  },
  profilePicture: {
    backgroundColor: 'grey',
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderColor: '#ccc',
  },
  textInputBar: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 10,
  },
  topicButtonContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topicButtonDalers: {
    height: 70,
    width: 175,
    backgroundColor: '#76D33D',
    marginRight: 10,
    borderRadius: 10,
  },
  topicButtonStijgers: {
    height: 70,
    width: 175,
    backgroundColor: '#D3463D',
    borderRadius: 10,
  },
  topicText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    left: 15,
    top: 20,
  },
  categorieenSection: {
    top: 15,
  },
  categorieenText: {
    fontWeight: '700',
    fontSize: 18,
    left: 18,
    marginBottom: 5,
  },
  categorieenButtonSection: {
    flexDirection: 'row',
  },
  categorieItem: {
    alignItems: 'center',
    margin: 5,
  },
  catogrieButton: {
    height: 70,
    width: 70,
    borderRadius: 75,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  catogrieText: {
    fontSize: 28,
  },
  catogrieButtonText: {
    marginTop: 5,
    fontWeight: '500',
    fontSize: 14
  },
  favoritesSection: {
    top: 25,
  },
  favoriteText: {
    fontWeight: '700',
    fontSize: 18,
    left: 18,
    marginBottom: 5,
  },
  favoriteButtonSection: {
    flexDirection: 'row',
  },
  favoriteButton: {
    height: 175,
    width: 175,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    margin: 5,
  },
  favoriteButtonText: {
    left: 7,
    fontSize: 16,
    fontWeight: '700',
  },
  favoriteContentText: {
    left: 7,
    fontSize: 12,
    color: '#939393',
    fontWeight: '600',
  },
  priceTagItem: {
    left: 7,
    fontSize: 20,
    fontWeight: '700',
  },
  discountContainerParent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountContainer: {
    backgroundColor: '#C8CD91',
    height: 125,
    width: 360,
    borderRadius: 10,
  }
});
