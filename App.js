import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    text: '',
    messages: []
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 40}}>Test of chatbot</Text>
        </View>
        <View style={styles.content}>
          <ScrollView>
              {this.state.messages.forEach(element => {
                console.log(element);
                return <Text>element</Text>
              })}
          </ScrollView>
          <View style={styles.footer}>
            <TextInput value={this.state.text}
              onChangeText = {this.handleMessage}
              placeholder="Type a message here"/>
            <Button onPress={this._onPressButton} title="Try an easter egg" />
          </View>
        </View>
      </View>
    );
  }

  handleMessage = text => {
    this.setState({text: text});
  };

  _onPressButton = () => {
    this.setState({messages: [...this.state.messages, this.state.text]});
    this.setState({text: ''});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue'
  },
  content: {
    flex: 3,
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'flex-end',
    marginBottom: 20
  }
});
