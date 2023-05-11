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
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const categories = [
    { id: 1, title: "xmen" },
    { id: 2, title: "women" },
    { id: 3, title: "kid" },
  ];

  const products = [
    {
      price: 215,
      _id: 1,
      name: "Sample",
      images: [
        {
          url: "https://source.unsplash.com/random",
        },
      ],
    },
  ];

  const [category, setCategory] = React.useState("");
  const [activeSearch, setActiveSearch] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState(" ");

  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id) => {};
  return (
    <React.Fragment>
      <SearchModal
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setActiveSearch={setActiveSearch}
        products={products}
      />
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
            {categories.map((item) => (
              <Button
                key={item.id}
                style={{
                  backgroundColor:
                    category == item.id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item.id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === id ? colors.color2 : "gray",
                  }}
                >
                  {item.title}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((product, i) => (
              <ProductCard
                key={item._id}
                stock={product.stock}
                name={product.name}
                price={product.price}
                image={product.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({});
