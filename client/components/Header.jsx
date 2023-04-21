import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const Header = ({ backOption, showCart = false }) => {
  const navigate = useNavigation();
  const route = useRoute();

  const emptyCartHandler = () => {};

  return (
    <React.Fragment>
      {backOption && (
        <TouchableOpacity
          style={{ position: "absolute", left: 20, top: 40, zIndex: 10 }}
          onPress={() => navigate.goBack()}
        >
          <Avatar.Icon
            icon={"arrow-left"}
            color={
              route.name === "product-details" ? colors.color2 : colors.color3
            }
            style={{ backgroundColor: colors.color4 }}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={{ position: "absolute", right: 20, top: 40, zIndex: 10 }}
        onPress={showCart ? () => navigate.navigate("cart") : emptyCartHandler}
      >
        <Avatar.Icon
          icon={showCart ? "cart-outline" : "delete-outline"}
          color={
            route.name === "product-details" ? colors.color2 : colors.color3
          }
          style={{ backgroundColor: colors.color4 }}
        />
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default Header;

const styles = StyleSheet.create({});
