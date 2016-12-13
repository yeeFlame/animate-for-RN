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
    LayoutAnimation
} from 'react-native';
import Header from '../Header';
import Box from '../Box';
import Icon from 'react-native-vector-icons/FontAwesome';
import demoImg from '../imgs/demo.png';

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

export default class LayoutAnimationDemo extends Component {
    constructor(props) {
        super(props);
        this.startAnimation = this.startAnimation.bind(this);
        this.stopAnimation = this.stopAnimation.bind(this);
        this._renderOpacity = this._renderOpacity.bind(this);
        this.state = {
            width: 50,
            height: 50,
        }
    }

    startAnimation() {
        LayoutAnimation.configureNext(
            {
                duration: 700, //持续时间
                create: { // 视图创建
                    type: LayoutAnimation.Types.spring,
                    property: LayoutAnimation.Properties.scaleXY,// opacity、scaleXY
                },
                update: { // 视图更新
                    type: LayoutAnimation.Types.spring,
                },
            },
            function(){
                alert(1)
            }
        );

        // LayoutAnimation.easeInEaseOut();

        this.setState({
            width: this.state.width + 50,
            height: this.state.height + 50
        });
    }

    stopAnimation() {
        this.setState({
            width: 50,
            height: 50,
        });
    }

    _renderOpacity() {
        return (
            <View style={[styles.animateView,{ opacity:1 }]}>
                <Image
                    ref="img"
                    source={ demoImg }
                    style={{
                        width: this.state.width,
                        height: this.state.height,
                    }}
                />
            </View>
        );
    }

    render() {
        const {navigator, title} = this.props;
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
        // this.startAnimation();
    }

}
