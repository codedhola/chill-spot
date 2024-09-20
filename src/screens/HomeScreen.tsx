import { ScrollView, StatusBar, StyleSheet, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Section from "../components/Section";
import { Colors, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import CustomIcon from "../utils/CustomIcon";
import { useEffect, useState } from "react";
import { fetchGenre, fetchNowPlaying } from "../services/api";
import { SearchBar } from "react-native-screens";
import SearchInput from "../components/SearchInput";

function HomeScreen({ navigation }: any){
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData] = useState([])

  useEffect(() => {
    (async function(){
      const res = await fetchNowPlaying()
      setData(res)
    })() 
  }, [])

  console.log("Home screen Data => ", data)

  const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

  return (
    <View>
      <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
      />
      <SearchInput />
    </View>
  )
}


const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});


export default HomeScreen;