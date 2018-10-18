import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert, Text, Modal } from 'react-native';
import Voice from 'react-native-voice';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recognized: 'not recognize',
            started: 'stopped',
            results: [],
            count: 0
        };

        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        //Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechResults.bind(this);
        Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
        //Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    }

    // shouldComponentUpdate() {
    //     return false;
    // }


    async press() {
        try {
            await Voice.start('en-US');
        } catch (err) {

        }
        
    }

    onSpeechStart(e)  {
        this.setState({
            started: 'started',
        });
    }

      onSpeechResults(e) {
          this.setState({
              results: e.value
          })
      }

      onSpeechEnd(e) {
        this.setState({
            started: 'end',
        });

        // C этой хренью работает 2-4 раза подряд, ьез нее всего 1 =(
        this.stop();
        this.press();
      }

      async stop() {
          try {
              await Voice.stop();
          } catch (err) {

        }
      }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>{this.state.started}</Text>
                <Text>{this.state.count}</Text>
                <Button title="Press to record" onPress={this.press.bind(this)} />
                
                {/* <Button title="stop to record" onPress={this.stop} /> */}
                { this.state.results.map((result, index) => <Text key={index}>{result}</Text>) }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        zIndex: 500
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    container3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        opacity: 0.8
    },
    nonTransparent: {
        opacity: 1
    }
});

