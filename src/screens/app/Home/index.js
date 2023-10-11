import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { styles } from "./styles";
import { categories } from "../../../data/categories";
import { FlatList } from "react-native";
import CategoryBox from "../../../components/CategoryBox";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedProducts, setSelectedProducts] = useState(products);
  const [keyword, setKeyword] = useState();

  useEffect(() => {
    if (selectedCategory) {
      const updatedSelectedProducts = products.filter(
        (product) => product?.category === selectedCategory
      );
      setSelectedProducts(updatedSelectedProducts);
    } else if (selectedCategory && keyword) {
      const updatedSelectedProducts = products.filter(
        (product) =>
          product?.category === selectedCategory &&
          product?.title?.toLowerCase().includes(keyword.toLowerCase())
      );
      setSelectedProducts(updatedSelectedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedSelectedProducts = products.filter((product) =>
        product?.title?.toLowerCase().includes(keyword.toLowerCase())
      );
      setSelectedProducts(updatedSelectedProducts);
    } else if (!keyword && !selectedCategory) {
      setSelectedProducts(products);
    }
  }, [selectedCategory, keyword]);
  const renderCategoryItem = ({ item }) => {
    console.log("item => ", item);
    return (
      <CategoryBox
        title={item?.title}
        image={item?.image}
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item.id === selectedCategory}
      />
    );
  };

  const renderProductItem = ({ item }) => {
    console.log("item => ", item);
    return <ProductHomeItem {...item} />;
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          showSearch={true}
          onSearchKeyword={setKeyword}
          keyword={keyword}
          title="Find All You Need"
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          horizontal
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
        />
        <FlatList
          numColumns={2}
          data={selectedProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => String(item.id)}
          ListFooterComponent={<View style={{ height: 250 }} />}
        />
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
