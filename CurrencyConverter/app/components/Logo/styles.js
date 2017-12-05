import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const imageWidth = Dimensions.get("window").width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: "center"
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    width: imageWidth,
    height: imageWidth
  },
  logoImage: {
    position: "absolute",
    width: imageWidth / 2,
    height: imageWidth / 2
  },
  text: {
    fontWeight: "600",
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: "$white"
  }
});
