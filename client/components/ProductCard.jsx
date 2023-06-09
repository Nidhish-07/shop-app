import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../styles/styles";

const ProductCard = ({
  stock,
  name,
  price,
  image,
  id,
  addToCardHandler,
  i,
  navigate,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate.navigate("product-details", { id })}
      activeOpacity={1}
    >
      <View
        style={{
          elevation: 5,
          width: 220,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 20,
          height: 400,
          backgroundColor: i % 2 == 0 ? colors.color1 : colors.color2,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            position: "absolute",
            left: 50,
            top: 105,
          }}
        ></Image>
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 == 0 ? colors.color2 : colors.color3,
              fontSize: 25,
              fontWeight: "700",
            }}
          >
            ₹{price}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: i % 2 == 0 ? colors.color2 : colors.color3,
            borderRadius: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: "100%",
          }}
        >
          <Button
            onPress={() => addToCardHandler(id, stock)}
            textColor={i % 2 == 0 ? colors.color1 : colors.color2}
          >
            Add to cart
          </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
