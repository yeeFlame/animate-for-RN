/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/08 16:06:58
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/13 14:40:05
*/


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
        height: 230,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#D6DCDF',
        backgroundColor: '#f5fcff',
        marginBottom: 10,
        paddingBottom: 20,
    },
    title: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6DCDF',
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
    constructor(props) {
        super(props);
    }

    render() {
        const {
            animatedContent,
            playFunc,
            pauseFunc,
            title
        } = this.props;

        return (
            <View style={styles.box}>
                <View style={styles.title}>
                    <Text style={{fontSize:16}}>{title}</Text>
                </View>
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
                        <Icon name="stop" size={26} color="#666"/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
