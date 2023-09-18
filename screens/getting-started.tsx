import { Image, View, StyleSheet } from "react-native";
import { COLORS } from "../conts/colors";
import { useFonts } from "../hooks/useFonts";
import { FONT_FAMILY } from "../conts/fonts";
import { Button, Box, ButtonText, Text } from "../components/nativebase";

function GettingStarted() {
  const { loaded } = useFonts();
  if (!loaded) return null;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/bg-getting-started.png")}
      />
      <View style={styles.overlay} />
      <Box style={styles.logoContainer}>
        <Text style={styles.logo}>Brandx</Text>
      </Box>
      <View style={styles.wrapper}>
        <Text style={styles.title}>FASHION INSPIRED</Text>
        <Text style={styles.info}>
          Discover the best product for your fashion
        </Text>
      </View>
      <Box>
        <Button style={styles.button}>
          <ButtonText style={styles.buttonText}>get started</ButtonText>
        </Button>
      </Box>
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
  logoContainer: {
    flex: 1,
    paddingTop: 40,
    textAlign: "center",
    alignSelf: "center",
  },
  logo: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.HomenajeRegular,
    fontSize: 22,
    lineHeight: 22,
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
    fontFamily: FONT_FAMILY.GTWalsheimProBlack,
  },
  info: {
    textAlign: "center",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 12,
    color: COLORS.white,
    fontFamily: FONT_FAMILY.GTWalsheimProMedium,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 4,
    height: 70,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: FONT_FAMILY.GTWalsheimProMedium,
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 18 /* 100% */,
    letterSpacing: 1,
  },
});

export default GettingStarted;
