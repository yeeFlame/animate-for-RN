/**
 * @Author: shenyu <SamMFFL>
 * @Date:   2016/12/09 10:59:33
 * @Email:  samfec@163.com
 * @Last modified by:   SamMFFL
 * @Last modified time: 2016/12/13 14:39:39
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

        this._renderRotate = this._renderRotate.bind(this);
        this.startAnimationOfRotate = this.startAnimationOfRotate.bind(this);
        this.stopAnimationOfRotate = this.stopAnimationOfRotate.bind(this);
        this.state = {
            fadeAnim: new Animated.Value(0),
            bounceValue: new Animated.Value(0),
            movePosition: new Animated.Value(0),
            rotateValue: new Animated.Value(0),
        };
    }

    //--透明度线性变换--start
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

    //--透明度线性变换--end

    //--放大缩小弹性变化--start
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

    //--放大缩小弹性变化--end

    //--移动减速变换--start
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

    //--移动减速变换--end

    //--旋转线性变换--start
    _renderRotate() {
        return (
            <Animated.View
                style={[styles.animateView,{
                    transform: [
                        {
                            rotate: this.state.rotateValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '360deg']
                            })
                        }
                    ]
                }]}
            >
                <Text style={{fontSize:20}}>Animate rotate</Text>
            </Animated.View>
        );
    }

    startAnimationOfRotate() {
        this.state.rotateValue.setValue(0);
        Animated.timing(
            this.state.rotateValue, {
                toValue: 1,
                duration: 1200,
                easing: Easing.linear,
                delay: 0,
            }).start(() => this.startAnimationOfRotate());
    }

    stopAnimationOfRotate() {
        this.state.rotateValue.setValue(0);
    }


    render() {
        const {navigator, title} = this.props;
        console.log(1)

        const boxs = [
            {
                title: '使用timing方法处理透明度变化',
                animatedContent: this._renderOpacity(),
                playFunc: this.startAnimationOfOpacity,
                pauseFunc: this.stopAnimationOfOpacity
            },
            {
                title: '使用spring方法处理放大缩小',
                animatedContent: this._renderScale(),
                playFunc: this.startAnimationOfScale,
                pauseFunc: this.stopAnimationOfScale
            },
            {
                title: '使用decay方法处理移动',
                animatedContent: this._renderMove(),
                playFunc: this.startAnimationOfMove,
                pauseFunc: this.stopAnimationOfMove,
            },
            {
                title: '使用timing处理旋转',
                animatedContent: this._renderRotate(),
                playFunc: this.startAnimationOfRotate,
                pauseFunc: this.stopAnimationOfRotate,
            }
        ];

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

                    {
                        boxs.map((box, index) => (
                                <Box
                                    key={`box_animated_${index}`}
                                    title={box.title}
                                    animatedContent={box.animatedContent}
                                    playFunc={box.playFunc}
                                    pauseFunc={box.pauseFunc}
                                />
                        ))
                    }
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

        // transfrom rotate
        this.startAnimationOfRotate();
    }

}
