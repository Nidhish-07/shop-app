import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";

const Home = () => {
  const categories = ["men", "women", "kid"];

  const [category, setCategory] = React.useState("");
  const [activeSearch, setActiveSearch] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState(" ");

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };
  return (
    <View style={defaultStyle}>
      <Header />

      <View
        style={{
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
            <Avatar.Icon
              icon={"magnify"}
              color="gray"
              style={{ backgroundColor: colors.color2, elevation: 10 }}
              size={50}
            ></Avatar.Icon>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", height: 80 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {categories.map((item, id) => (
            <Button
              key={id}
              style={{
                backgroundColor: category == id ? colors.color1 : colors.color5,
                borderRadius: 100,
                margin: 5,
              }}
              onPress={() => categoryButtonHandler(id)}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: category === id ? colors.color2 : "gray",
                }}
              >
                {item}
              </Text>
            </Button>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
