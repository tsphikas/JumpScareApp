import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

const SoundCard = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.nav, {})}>
      <View
        style={{
          backgroundColor: COLORS.black,
          borderRadius: SIZES.font,
          marginBottom: SIZES.extraLarge,
          margin: SIZES.title,
          ...SHADOWS.dark,
        }}
      >
        <View style={{ width: "100%", height: 200 }}>
          <Image
            source={props.image}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font,
            }}
          />
        </View>

        <View style={{ width: "100%", padding: SIZES.font }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.title,
                fontFamily: FONTS.scary,
                color: COLORS.white,
                letterSpacing: 3,
              }}
            >
              {props.name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SoundCard;

const styles = StyleSheet.create({
  card: {
    width: "45%",
    height: 150,
    backgroundColor: "blue",
    margin: 5,
    alignContent: "stretch",
    borderRadius: 10,
  },
});
