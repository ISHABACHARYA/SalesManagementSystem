import React, { Component } from "react";
import { Text, View,Image,Dimensions ,TextInput} from "react-native";

const { height, width } = Dimensions.get("window");
var Data = [
  { name: "sari", src: require("../img/sari.jpg"), qty: 2, price: 1200 },
  { name: "Pant", src: require("../img/sari.jpg"), qty: 3, price: 600 },
  { name: "TeeShirt", src: require("../img/sari.jpg"), qty: 1, price: 100 }
];

export default class ItemCard extends Component {
  render() {
            const{name, src,qty,price} = this.props;

    return (
          
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginHorizontal: 5,
          height: 60,
          borderWidth: 1,
          marginTop: 20,
          borderRadius: 5,
          borderColor: "#bbb"
        }}
      >
        <View
          style={{
            flex: 2,
            height: 40,
            width: 40,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={src}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center"
            }}
            resizeMode={"cover"}
          />
        </View>

        <View style={{ flex: 4, alignItems: "center" }}>
          <TextInput
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 1,
              borderColor: "#bbb",
              height: 40,
              width: width / 4,
              marginLeft: 5,
              color: "#ccc"
            }}
            editable={false}
            placeholder={"Item Name"}
            placeholderTextColor={"#ccc"}
            value={name.toString()}
          />
        </View>

        <View style={{ flex: 3, alignItems: "center" }}>
          <TextInput
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 1,
              borderColor: "#bbb",
              height: 40,
              width: width / 7,
              marginLeft: 5,
              color: "#ccc"
            }}
            editable={false}
            placeholder={"quantity"}
            placeholderTextColor={"#ccc"}
            value={qty.toString()}
          />
        </View>

        <View style={{ flex: 3, alignItems: "center" }}>
          <TextInput
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 1,
              borderColor: "#bbb",
              height: 40,
              width: width / 7,
              marginLeft: 5,
              color: "#ccc"
            }}
            editable={false}
            placeholder={"price"}
            placeholderTextColor={"#ccc"}
            value={price.toString()}
          />
        </View>
      </View>
    );
  }
}
