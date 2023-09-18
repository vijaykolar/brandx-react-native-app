import { useFonts as useExpoFont } from "expo-font";
export function useFonts() {
  const [loaded] = useExpoFont({
    HomenajeRegular: require("../assets/fonts/Homenaje-Regular.ttf"),
    GTWalsheimProThin: require("../assets/fonts/GTWalsheimPro-Thin.ttf"),
    GTWalsheimProRegular: require("../assets/fonts/GTWalsheimPro-Regular.ttf"),
    GTWalsheimProMedium: require("../assets/fonts/GTWalsheimPro-Medium.ttf"),
    GTWalsheimProBold: require("../assets/fonts/GTWalsheimPro-Bold.ttf"),
    GTWalsheimProBlack: require("../assets/fonts/GTWalsheimPro-Black.ttf"),
    GTWalsheimProUltraBold: require("../assets/fonts/GTWalsheimPro-UltraBold.ttf"),
  });

  return { loaded };
}
