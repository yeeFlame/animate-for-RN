/**
 * Created by SamMFFL on 2016/12/1.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    Easing,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import Header from '../Header';
import Icon from 'react-native-vector-icons/FontAwesome';

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

export default class SimplestDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
        };
        console.log(this.props);
    }

    _renderBox(animatedContent) {
        return (
            <View style={styles.box}>
                {animatedContent}
                <View style={styles.boxBtn}>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        onPress={() => {
                            alert(1)
                        }}
                    >
                        <Icon name="play" size={26} color="#666"/>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor={'transparent'}
                        onPress={() => {
                            alert(2);
                        }}
                    >
                        <Icon name="pause" size={26} color="#666"/>
                    </TouchableHighlight>
                </View>
            </View>


        )
    }

    _renderOpacity(){
        return (
            <Animated.View
                style={[styles.animateView,{opacity: this.state.fadeAnim}]}
            >
                <Text >Animate fadeIn</Text>
            </Animated.View>
        );
    }


    render() {
        const {navigator} = this.props;

        return (
            <View style={styles.container}>
                <Header
                    title="最简单的动画"
                    showArrow={Boolean(true)}
                    navigator={navigator}
                />
                <ScrollView
                    vertical={Boolean(true)}
                    directionalLockEnabled={Boolean(true)}
                    showsHorizontalScrollIndicator={Boolean(false)}
                    indicatorStyle="white"
                    style={styles.scroll}
                >
                    {this._renderBox(this._renderOpacity())}
                </ScrollView>


            </View>

        )
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear
            }
        ).start();
    }
}
