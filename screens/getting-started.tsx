import {
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../colors";

function GettingStarted() {
  return (
    <View style={styles.container}>
      {/*<Text>GettingStartedOA</Text>*/}
      <Image
        style={styles.image}
        source={require("../assets/bg-getting-started.png")}
      />
      <View style={styles.overlay} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>FASHION INSPIRED</Text>
        <Text style={styles.info}>
          Discover the best product for your fashion
        </Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",

    backgroundColor:
      "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 20.55%, rgba(0, 0, 0, 0.00) 6.98%)",
  },
  wrapper: {
    marginBottom: 50,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 54,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 56,
    letterSpacing: 3,
    color: COLORS.white,
  },
  info: {
    textAlign: "center",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 12,
    color: COLORS.white,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: "100%",
    padding: 20,
    textAlign: "center",
  },
  buttonText: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 18 /* 100% */,
  },
});

export default GettingStarted;
