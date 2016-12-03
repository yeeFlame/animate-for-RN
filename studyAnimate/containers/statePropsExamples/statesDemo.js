/**
 * Created by SamMFFL on 2016/12/3.
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

export default class StateDemo extends Component {
    constructor(props) {
        super(props);
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
                            this.fadeIn.stop()
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
            <View></View>
        );
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
                    {this._renderBox(this._renderOpacity())}
                </ScrollView>


            </View>

        )
    }
}
