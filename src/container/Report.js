import React, { Component } from 'react'
import { Text, View,Image,Dimensions,TextInput,ScrollView,FlatList } from 'react-native'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Input,
  Picker,
  Item,
} from "native-base";
import ItemCard from '../components/ItemCard';
import DatePicker from 'react-native-datepicker'

const {height,width} = Dimensions.get('window');
var Data = [
  { key:'1',name: "sari", src: require("../img/sari.jpg"), qty: 2, price: 1200 },
  { key:'2', name: "Pant", src: require("../img/sari.jpg"), qty: 3, price: 600 },
  { key:'3',name: "TeeShirt", src: require("../img/sari.jpg"), qty: 1, price: 100 }
];
const total_sales=0, total_qty=0;


export default class Report extends Component {
  render() {
    return <ScrollView style={{ flex: 1, backgroundColor: "#393E46" }}>
        <Header style={{ backgroundColor: "#00ADB5" }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="more" style={{ color: "#fff" }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff", fontWeight: "bold" }}>
              Final Report
            </Title>
          </Body>
          <Right>
            <Button bordered>
              <Text style={{ color: "#fff" }}>Print</Text>
            </Button>
          </Right>
        </Header>


         <View style={{flex:.5,flexDirection:'row',alignItems:'center',justifyContent:'center',marginHorizontal: 5,}}>
          <View style={{flex:2,marginLeft:5}}>
            <Text style={{color:'#ddd',fontWeight:'bold',fontSize:14}}>Item Image</Text>
          </View>
           <View style={{flex:4,marginLeft:5}}>
            <Text style={{color:'#ddd',fontWeight:'bold',fontSize:14}}>Particulars</Text>
          </View>
           <View style={{flex:3,marginLeft:5}}>
            <Text style={{color:'#ddd',fontWeight:'bold',fontSize:14}}>Quantity</Text>
          </View>
           <View style={{flex:3,marginLeft:5}}>
            <Text style={{color:'#ddd',fontWeight:'bold',fontSize:14}}>Rate</Text>
          </View>
        </View>

        <FlatList
          data={Data}
          renderItem={({item})=><ItemCard key={item.key} name={item.name} src={item.src} qty={item.qty} price={item.price} > {total_qty=total_qty+item.qty}{ total_sales= total_sales + (item.qty * item.price)}</ItemCard>}
        />
      <View style={{flex:1,flexDirection:'row',marginHorizontal:50}}>
      <View style={{flex:1}}>
        <Text style={{fontWeight:'bold',fontSize:14,color:'#bbb'}}>
          From
        </Text>
        <DatePicker
          style={{width:100}}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          hideText
        />
      </View>

       <View style={{flex:1}}>
        <Text style={{fontWeight:'bold',fontSize:14,color:'#bbb'}}>
          To
        </Text>
        <DatePicker
          style={{width:100}}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          hideText
        />
      </View>

      </View>
        <View style={{ flex: 1, flexDirection: "row", paddingTop: 20, marginHorizontal: 5, height: 70, marginTop: 30 }}>

          <View style={{ flex: 6, height: 42, width: 42, alignItems: "center", justifyContent: "center" }}>
            <TextInput style={{ fontWeight: "bold", alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderColor: "#fff", height: 40, marginLeft: 5, color: "#fff" }} editable={false} value={"Total"} />
          </View>
          <View style={{ flex: 3, alignItems: "center" }}>
            <TextInput style={{ fontWeight: "bold", alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderColor: "#fff", height: 40, width: width / 7, marginLeft: 5, color: "#fff" }} editable={false} value={total_qty.toString()} />
          </View>
          <View style={{ flex: 3, alignItems: "center" }}>
            <TextInput style={{ fontWeight: "bold", alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderColor: "#fff", height: 40, width: width / 7, marginLeft: 5, color: "#fff" }} editable={false} value={total_sales.toString()} />
          </View>
        </View>
      </ScrollView>;
  }
}