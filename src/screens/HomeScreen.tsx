import { ScrollView, StatusBar, StyleSheet, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Section from "../components/Section";
import { Colors, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import CustomIcon from "../utils/CustomIcon";

function HomeScreen(){
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

  return (
    <View>
      <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white, }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits <CustomIcon name='search' size={17} style={{ color: "red"}} />
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});


export default HomeScreen;