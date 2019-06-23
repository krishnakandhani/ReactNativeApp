/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import { throwStatement } from '@babel/types';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    //this.state = { isLoading: true };
    this.state = { webviewLoaded: false , webview:null};
  }

  // performTimeConsumingTask = async() => {
  //   return new Promise((resolve) =>
  //     setTimeout(
  //       () => { resolve('result') },
  //       2000
  //     )
  //   );
  // }
  // async componentDidMount() {
  //   // Preload data from an external API
  //   // Preload data using AsyncStorage
  //   const data = await this.performTimeConsumingTask();
  
  //   if (data !== null) {
  //     this.setState({ isLoading: false });
  //   }
  // }
//   _onLoadEnd() {
//     this.setState({ webviewLoaded: true });
// }

_onLoadEnd() {
  this.setState({ webviewLoaded: true });
}

  render() {
  // if (this.state.isLoading) {
  //   return <SplashScreen />;
  // }

  return (

      // <WebView
        // source={{uri: 'https://iskconsiliconvalley.com'}}
        // style={{marginTop: 20}}

      // />
//<SplashScreen />
      <View>

            {(this.state.webviewLoaded) ? this.state.webview : <SplashScreen />}
            this.state.webview= <WebView source={{uri: 'https://iskconsiliconvalley.com'}} style={{marginTop: 20}} onLoadEnd={this._onLoadEnd.bind(this)} />
            {(this.state.webviewLoaded) ? null:
            <WebView source={{uri: 'https://iskconsiliconvalley.com'}} style={{marginTop: 20}} onLoadEnd={this._onLoadEnd.bind(this)} />
}

       </View>

    // <View>
    //         {(this.state.webviewLoaded) ? null : <SplashScreen />}
    //         <WebView onLoadEnd={this._onLoadEnd.bind(this)} 
    //                             source={{uri: 'https://iskconsiliconvalley.com'}}
    //                 style={{marginTop: 20}} />
    //     </View>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class SplashScreen extends React.Component {
  render() {
    const viewStyles = [
      styles.container,
      { backgroundColor: 'orange' }
    ];
    const textStyles = {
      color: 'black',
      fontSize: 40,
      fontWeight: 'bold'
    };

    return (
      //<View style={viewStyles}>
        <Text style={textStyles}>
          Splash Screen
        </Text>
      //</View>
    );
  }
}
