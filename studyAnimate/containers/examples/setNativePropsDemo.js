/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/08 10:18:06
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/13 14:39:33
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

export default class setNativePropsDemo extends Component {
    count = 0;

    constructor(props) {
        super(props);
        this.startAnimationOfSize = this.startAnimationOfSize.bind(this);
        this.stopAnimationOfSize = this.stopAnimationOfSize.bind(this);
        this._renderSize = this._renderSize.bind(this);
        this.animateSizeFunc = this.animateSizeFunc.bind(this);

        this.state = {
            width: 50,
            height: 50,
        }
    }

    _renderSize() {
        return (
            <View style={[styles.animateView,{ opacity:1 }]}>
                <Image
                    ref="img"
                    source = { demoImg }
                    style={{
                        width: this.state.width,
                        height: this.state.height,
                    }}
                />
            </View>
        );
    }

    animateSizeFunc(){
        requestAnimationFrame(() =>{

            if(this.count<50){
                ++this.count;

                // this.setState({
                //     width: this.state.width+10 ,
                //     height: this.state.height+10
                // });
                this.refs.img.setNativeProps({
                    style: {
                        width: this.state.width++,
                        height: this.state.height++,
                    }
                });
                // console.log('count',this.count)
                this.animateSizeFunc();
            }
        });
    }

    startAnimationOfSize(){

        this.setState({
            width: 50,
            height: 50
        });
        this.count = 0;

        this.animateSizeFunc();
    }

    stopAnimationOfSize(){
        this.setState({
            width: 50,
            height: 50
        });
        this.refs.img.setNativeProps({
            style: {
                width: 50,
                height: 50,
            }
        });
        this.count = 100;
        setTimeout(()=>{
            this.count = 0;
        },100)

    }

    startAnimation(){
        var count = 0;
        var width=50, height=50;
        while (++count < 10000) {
            requestAnimationFrame(() =>{
                // console.log(12)
                this.refs.img.setNativeProps({
                    style: {
                        width: width,
                        height: height,
                    }
                });
            });
            width += 0.01;
            height += 0.01;
        }


        // LayoutAnimation.configureNext({
        //     duration: 700, //持续时间
        //     create: { // 视图创建
        //         type: LayoutAnimation.Types.spring,
        //         property: LayoutAnimation.Properties.scaleXY,// opacity、scaleXY
        //     },
        //     update: { // 视图更新
        //         type: LayoutAnimation.Types.spring,
        //     },
        // });
        // this.setState({
        //     width: this.state.width + 100,
        //     height: this.state.height + 100
        // });

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
                    <Box
                        title="放大动画处理"
                        animatedContent={this._renderSize()}
                        playFunc={this.startAnimationOfSize}
                        pauseFunc={this.stopAnimationOfSize}
                    />
                </ScrollView>


            </View>

        )
    }

    componentDidMount(){
        // this.startAnimation();
    }

}
