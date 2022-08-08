import {
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";

import { SoundCard } from "../components";
import { SoundCardJSONData } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.09 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={""}
          ></FlatList>
        </View>

        <View style={{ flex: 0.84 }}>
          <ScrollView>
            {SoundCardJSONData.map((data) => (
              <SoundCard
                key={data.id}
                name={data.name}
                image={data.image}
                nav={data.nav}
              />
            ))}
          </ScrollView>
        </View>

        <View style={{ flex: 0.07 }}>
          <FlatList
            ListFooterComponentStyle={{ flex: 1, justifyContent: "flex-end" }}
            ListFooterComponent={""}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-around",
    width: "100%",
    height: "100%",
  },
  card: {
    width: "45%",
    height: 150,
    backgroundColor: "blue",
    margin: 5,
    alignContent: "stretch",
    borderRadius: 10,
  },
});

/* flexDirection: "row",
flexWrap: "wrap",
justifyContent: "space-evenly",
alignContent: "stretch",
alignSelf: "stretch",
backgroundColor: "red",
width: "100%",
height: "100%" */
