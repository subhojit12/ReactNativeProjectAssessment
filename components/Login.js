import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, Image,TextInput,ImageBackground,View,Text,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen'

export default class Wallpaper extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
}
  render() {
    return (
        <ImageBackground source={require('../assets/images/wallpaper.png')} style={{width:'100%',height:'100%'}}>
            <View style={styles.container}>
                <Image source={require('../assets/images/bhillogo.png')} />
                
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Email"
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                />
                <Text/>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Password"
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                />
                <Text/>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={1} onPress={()=>this.props.navigation.navigate('Scanner')}>
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
   },
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    borderRadius: 20,
    zIndex: 100,
    width:100,
    height:40
  },
  input: {
    backgroundColor:'rgba(52,52,52,0.8)',
    width: 300,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: 'white',
    borderColor:'black'
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});