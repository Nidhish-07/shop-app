import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Headline } from "react-native-paper";

const SearchItem = ({ price, name, imgSrc, handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: colors.color2,
          elevation: 5,
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "row",
          marginVertical: 30,
        }}
      >
        <Image
          source={{ uri: imgSrc }}
          style={{
            width: 80,
            height: 80,
            position: "absolute",
            resizeMode: "contain",
            top: -15,
            left: 10,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        ></Image>
        <View style={{ width: "80%", paddingHorizontal: 30 }}>
          <Text numberOfLines={1}>{name}</Text>
          <Headline style={{ fontWeight: "900" }} numberOfLines={1}>
            ₹{price}
          </Headline>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchItem;

const styles = StyleSheet.create({});
