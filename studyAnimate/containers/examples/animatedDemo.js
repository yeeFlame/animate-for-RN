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
    scroll: {
        flex: 1,
        // borderWidth: 1,
        marginBottom: 50,
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

export default class AnimatedDemo extends Component {

    fadeIn = null;

    constructor(props) {
        super(props);
        this.startAnimationOfOpacity = this.startAnimationOfOpacity.bind(this);
        this.stopAnimationOfOpacity = this.stopAnimationOfOpacity.bind(this);
        this._renderOpacity = this._renderOpacity.bind(this);
        this._renderScale = this._renderScale.bind(this);
        this.startAnimationOfScale = this.startAnimationOfScale.bind(this);
        this.stopAnimationOfScale = this.stopAnimationOfScale.bind(this);
        this._renderMove = this._renderMove.bind(this);
        this.startAnimationOfMove = this.startAnimationOfMove.bind(this);
        this.stopAnimationOfMove = this.stopAnimationOfMove.bind(this);

        this.state = {
            fadeAnim: new Animated.Value(0),
            bounceValue: new Animated.Value(0),
            movePosition: new Animated.Value(0),
        };
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

    startAnimationOfOpacity() {
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

    stopAnimationOfOpacity() {
        this.state.fadeAnim.setValue(0);
    }


    _renderScale() {
        return (
            <Animated.View
                style={{
                    flex: 1,
                    backgroundColor:'gray',
                    transform: [
                        {scale: this.state.bounceValue},
                    ]
                }}
            />
        );
    }

    startAnimationOfScale() {
        this.fadeIn = null;
        this.state.bounceValue.setValue(1.5);
        Animated.spring(
            this.state.bounceValue,
            {
                toValue: 0.8,
                friction: 1,
                tension: 20
            }
        ).start();
    }

    stopAnimationOfScale() {
        this.state.bounceValue.setValue(1.5);
    }

    _renderMove() {
        return (
            <Animated.View
                style={{
                    flex:1,
                    width:50,
                    backgroundColor:'gray',
                    // position: 'absolute',
                    marginLeft: this.state.movePosition,
                    // left:this.state.movePosition,
                }}
            />
        );
    }

    startAnimationOfMove() {
        this.state.movePosition.setValue(0)
        Animated.decay(
            this.state.movePosition,
            {
                toValue: 50,
                velocity: 1,
                deceleration: 0.997
            }
        ).start()
    }

    stopAnimationOfMove() {
        this.state.movePosition.setValue(0);
    }

    render() {
        const {navigator, title} = this.props;
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
                        title="使用timing方法处理透明度变化"
                        animatedContent={this._renderOpacity()}
                        playFunc={this.startAnimationOfOpacity}
                        pauseFunc={this.stopAnimationOfOpacity}
                    />


                    <Box
                        title="使用spring方法处理放大缩小"
                        animatedContent={this._renderScale()}
                        playFunc={this.startAnimationOfScale}
                        pauseFunc={this.stopAnimationOfScale}
                    />

                    <Box
                        title="使用decay方法处理放大缩小"
                        animatedContent={this._renderMove()}
                        playFunc={this.startAnimationOfMove}
                        pauseFunc={this.stopAnimationOfMove}
                    />
                </ScrollView>


            </View>

        )
    }

    componentDidMount() {
        // timing
        this.startAnimationOfOpacity();

        // spring
        this.startAnimationOfScale();

        // decay
        this.startAnimationOfMove();
    }

}
