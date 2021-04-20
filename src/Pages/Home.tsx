import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window')

// styles
import colors from '../styles/colors';

// images
import wateringImg from '../assets/watering.png'

export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas {'\n'} de forma fácil
      </Text>
      <Image
        style={styles.image}
        source={wateringImg}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.{'\n'} Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.75}>
        <Text style={styles.buttonText}>{'>'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: height
  },
  title: {
    color: colors.heading,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 38
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    height: width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonText: {
    color: colors.white
  }
})