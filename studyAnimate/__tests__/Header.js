/**
 * Created by SamMFFL on 2016/12/1.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingBottom: 12,
        backgroundColor: '#ee735c',
    },
    title: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
    },
    leftArrow: {
        position: 'absolute',
        left: 10,
        top: 20,
    }
});
export default class Header extends Component {


    constructor(props) {
        super(props);
    }

    _leftArrow() {
        let {navigator} = this.props;
        return (
            <View style={styles.leftArrow}>
                <TouchableHighlight
                    underlayColor={'transparent'}
                    onPress={() => {
                        navigator.pop();
                    }}
                >
                    <Icon name="arrow-left" size={26} color="#fff"/>
                </TouchableHighlight>
            </View>
        );
    }

    render() {
        const {showArrow} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                { showArrow && this._leftArrow()}
            </View>
        );
    }
} 