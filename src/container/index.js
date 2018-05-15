import React, { Component } from "react";
import { Text, View } from "react-native";
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
import {
  Image,
  Dimensions
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

var Data2 = [
  'sari',
  'pant',
  'TeeShirt',
];
var Data=[
          {name:'sari',src:require('../img/sari.jpg')},
          {name:'Pant',src:require('../img/sari.jpg')},
          {name:'TeeShirt',src:require('../img/sari.jpg')},
]
var {width,height} = Dimensions.get('window');

export default class HomeScreen extends Component {
  state={
    name:'',
    
  }
  componentWillMount = () => {

  }
  addItem(){

  }
  
  render() {
    return <View style={{flex:1,backgroundColor:'#393E46' }}>
        <Header style={{backgroundColor:'#00ADB5'}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
              <Icon name="more" style={{color:'#fff'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'#fff',fontWeight:'bold'}}>Sales Entry</Title>
          </Body>
          <Right>
            <Button bordered >
              <Text style={{color:'#fff'}}>New ITem</Text>
            </Button>
          </Right>
        </Header>

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderWidth:1,marginTop:20,borderRadius:5,borderColor:'#bbb'}}>
          <Content>
            <Image source={Data[1].src} style={{ height: 120, width: 120, borderRadius: 60, marginTop: 20 }} resizeMode={"cover"} />
            
            <ModalDropdown 
            defaultValue={'Select Item'}
            options={Data2}
            style={{alignItems:'center',justifyContent:'center',paddingHorizontal:20,width:150,height:40,borderWidth:1,borderRadius:10,borderColor:'#ccc',marginTop:20}}
            textStyle={{fontSize:18,fontWeight:'bold',color:'#fff'}}
            dropDownStyle={{width:100,height:40}}
            
            />


            <Item regular style={{marginTop:12,width:width-300,height:40}}>
              <Input placeholder="Quantity" placeholderColor={'#fff'} keyboardType={'numeric'} style={{fontSize:12,color:'#fff'}}/>
            </Item>
            <Item regular style={{marginTop:12,width:width-300,height:40}}>
              <Input placeholder="Price" placeholderColor={'#fff'} keyboardType={'numeric'} style={{fontSize:12,color:'#fff'}}/>
            </Item>
            <Button bordered success style={{width:width-100,height:42,alignItems:'center',justifyContent:'center',marginTop:40}} onPress={()=>this.addItem()}>
            <Text style={{fontSize:18,color:'#fff'}}>Make Sales</Text>
          </Button>
          </Content>
        </View>
        <View  style={{flex:.3}}/>

      </View>
  }
}
