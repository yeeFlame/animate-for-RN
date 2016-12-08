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
import Box from '../Box';
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

    fadeIn = null;

    constructor(props) {
        super(props);
        this.startAnimation = this.startAnimation.bind(this);
        this.stopAnimation = this.stopAnimation.bind(this);
        this.state = {
            fadeAnim: new Animated.Value(0),
        };
    }

    _renderBox(animatedContent) {
        return (
            <View style={styles.box}>
                {animatedContent}
                <View style={styles.boxBtn}>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        onPress={() => {
                            this.fadeIn = null;
                            this.state.fadeAnim.setValue(0)
                            this.fadeIn = Animated.timing(
                                this.state.fadeAnim,
                                {
                                    toValue: 1,
                                    duration: 3000,
                                    easing: Easing.linear,
                                }
                            ).start();
                        }}
                    >
                        <Icon name="play" size={26} color="#666"/>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor={'transparent'}
                        onPress={() => {

                        }}
                    >
                        <Icon name="pause" size={26} color="#666"/>
                    </TouchableHighlight>
                </View>
            </View>


        )
    }

    _renderOpacity() {
        return (
            <Animated.View
                style={[styles.animateView,{opacity: this.state.fadeAnim}]}
            >
                <Text style={{fontSize:20}}>Animate fadeIn</Text>
            </Animated.View>
        );
    }

    startAnimation(){
        this.fadeIn = null;
        this.state.fadeAnim.setValue(0)
        this.fadeIn = Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
            }
        ).start();
    }
    stopAnimation(){
        this.state.fadeAnim.setValue(0);
    }



    render() {
        const {navigator,title} = this.props;
        console.log(1)
        return (
            <View style={styles.container}>
                <Header
                    title={title}
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
                    {/* {this._renderBox(this._renderOpacity())} */}
                    <Box
                        animatedContent={this._renderOpacity()}
                        playFunc={this.startAnimation}
                        pauseFunc={this.stopAnimation}
                    />

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

    componentWillUnmount(){
        console.log('distory')
    }
}
