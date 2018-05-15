import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'
import {NavigationActions} from 'react-navigation';

export default class DrawerContent extends Component {
                 navigateToScreen = route => () => {
                   const navigateAction = NavigationActions.navigate(
                     {
                       routeName: route
                     }
                   );
                   this.props.navigation.dispatch(navigateAction);
                 };

                 render() {
                   return <View style={{ flex: 1, backgroundColor: "#222831", alignItems: "center", paddingVertical: 50 }}>
                       <TouchableOpacity style={{ height: 100 }}>
                         <Image source={require("../img/logo.png")} style={{ height: 80, width: 80, borderRadius: 40 }} resizeMode={"contain"} />
                       </TouchableOpacity>
                       <TouchableOpacity style={{ marginTop: 50, borderBottomWidth: 1, borderColor: "#ccc", width: 250, alignItems: "center", justifyContent: "center" }} onPress={this.navigateToScreen('Home')}>
                         <Text
                           style={{
                             fontSize: 18,
                             color: "#eee"
                           }}
                         >
                           Make New Entry
                         </Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{ marginTop: 50, borderBottomWidth: 1, borderColor: "#ccc", width: 250, alignItems: "center", justifyContent: "center" }} onPress={this.navigateToScreen('Report')}>
                         <Text
                           style={{
                             fontSize: 18,
                             color: "#eee"
                           }}
                         >
                           Final Report
                         </Text>
                       </TouchableOpacity>
                     </View>;
                 }
               }