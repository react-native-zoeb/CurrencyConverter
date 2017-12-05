import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.backgroundImage}
        resizeMode="contain"
        source={require("./images/background.png")}
      />
      <Image
        style={styles.logoImage}
        resizeMode="contain"
        source={require("./images/logo.png")}
      />
    </View>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
