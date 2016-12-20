/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/08 10:17:49
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/13 14:39:53
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

export default class SetStatesDemo extends Component {
    count = 0;
    degree = 0;
    constructor(props) {
        super(props);
        this.startAnimationOfSize = this.startAnimationOfSize.bind(this);
        this.stopAnimationOfSize = this.stopAnimationOfSize.bind(this);
        this._renderSize = this._renderSize.bind(this);
        this.animateSizeFunc = this.animateSizeFunc.bind(this);

        this._renderRotate = this._renderRotate.bind(this);
        this.animateRotateFunc = this.animateRotateFunc.bind(this);
        this.startAnimationOfRotate = this.startAnimationOfRotate.bind(this);
        this.stopAnimationOfRotate = this.stopAnimationOfRotate.bind(this);

        this.state = {
            width: 50,
            height: 50,
            rotateValue: '0deg',
        }
    }

    _renderSize() {
        return (
            <View style={[styles.animateView,{ opacity:1 }]}>
                <Image
                    source = { demoImg }
                    style={{
                        width: this.state.width,
                        height: this.state.height
                    }}
                />
            </View>
        );
    }
    animateSizeFunc(){
        requestAnimationFrame(() =>{

            if(this.count<25){
                ++this.count;

                this.setState({
                    width: this.state.width+2 ,
                    height: this.state.height+2
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
        this.count = 100;
        setTimeout(()=>{
            this.count = 0;
        },100)

    }

    _renderRotate(){
        return (
            <View style={[styles.animateView,{
                transform:[
                    {rotate:this.state.rotateValue}
                ]
            }]}>
                <Text style={{fontSize:20}}>requestAnimationFrame rotate</Text>
            </View>
        );
    }
    animateRotateFunc(){
        requestAnimationFrame(()=>{
            if(this.degree < 360){
                this.degree+=30;
                this.setState({
                    rotateValue: `${this.degree}deg`
                });
                this.animateRotateFunc();
            }
        });
    }

    startAnimationOfRotate(){

        this.setState({
            rotateValue: '0deg',
        });
        this.degree = 0;
        this.animateRotateFunc();

    }

    stopAnimationOfRotate(){
        this.setState({
            rotateValue: '0deg',
        });
        this.degree = 0;
    }





    render() {
        const {navigator, title} = this.props;
        const boxes = [
            {
                title: '放大动画处理',
                animatedContent: this._renderSize(),
                playFunc: this.startAnimationOfSize,
                pauseFunc: this.stopAnimationOfSize
            },
            {
                title: '旋转动画处理',
                animatedContent: this._renderRotate(),
                playFunc: this.startAnimationOfRotate,
                pauseFunc: this.stopAnimationOfRotate
            }
        ]

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
                        boxes.map((item, index) => (
                            <Box
                                key={`box_setState_${index}`}
                                title={item.title}
                                playFunc={item.playFunc}
                                pauseFunc={item.pauseFunc}
                            />
                        ))
                    }
                </ScrollView>


            </View>

        )
    }

    componentDidMount(){
        // width height
        this.startAnimationOfSize();
        // rotate
        this.startAnimationOfRotate();
    }

}
