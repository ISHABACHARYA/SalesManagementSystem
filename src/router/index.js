import React, { Component } from 'react';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import HomeScreen from '../container';
import ReportScreen from '../container/Report';
import DrawerContent from './DrawerContent';

const DrawerScreen = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Report: { screen: ReportScreen }
  },
  {
    contentComponent: DrawerContent
  }
);
const  Router = StackNavigator({
          Home:{screen: HomeScreen},
          Drawer:{screen: DrawerScreen}
},{
          headerMode: 'none',
}
);

export default DrawerScreen;