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
} from 'react-native';
import Header from '../Header';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    }
});

export default class SimplestDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
        }
        console.log(this.props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title="最简单的动画" showArrow={Boolean(true)} navigator={this.props.navigator}/>
                <Animated.View
                    style={{flex:1,opacity: this.state.fadeAnim}}
                >
                    <Text>Animate fadeIn</Text>
                </Animated.View>
            </View>

        )
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration:2500,
                easing: Easing.linear
            }
        ).start();
    }
}
