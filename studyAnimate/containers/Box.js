import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import demoImg from '../imgs/demo.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    box: {
        height: 200,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#D6DCDF',
        backgroundColor: '#f5fcff',
        marginBottom: 10,
        paddingBottom: 20,
    },
    animateView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxBtn: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});

export default class Box extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {animatedContent, playFunc, pauseFunc} = this.props;

        return (
            <View style={styles.box}>
                {animatedContent}
                <View style={styles.boxBtn}>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        onPress={() => {
                            playFunc();
                        }}
                    >
                        <Icon name="play" size={26} color="#666"/>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor={'transparent'}
                        onPress={() => {
                            pauseFunc();
                        }}
                    >
                        <Icon name="pause" size={26} color="#666"/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
