import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Button from "../../../components/Button";
import ImageCarusel from "../../../components/ImageCarusel";

const ProductDetails = ({ navigation, route }) => {
  console.log("navigation => ", navigation);
  console.log("route => ", route);

  const onBackPress = () => {
    navigation.goBack();
  };

  const onContact = () => {
    // phone call
    let phone = "real phone number";
    Linking.openURL(`tel:${phone}`);
    let email = "real email";
    Linking.openURL(`mailto:${email}`);
  };

  const { product } = route.params || {};
  return (
    <SafeAreaView style={styles.save}>
      <ScrollView>
        {product?.images?.length ? (
          <ImageCarusel images={product?.images} />
        ) : (
          <Image style={styles.image} source={{ uri: product?.image }} />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image
            style={styles.backIcon}
            source={require("../../../assets/tabs/back.png")}
          />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image
            style={styles.bookmarkIcon}
            source={require("../../../assets/tabs/bookmark.png")}
          />
        </Pressable>
        <Button onPress={onContact} style="button" title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);
