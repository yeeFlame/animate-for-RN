/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/22 10:35:43
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/22 10:35:58
*/


import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Animated,
    Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    tabContainer:{
        height: 42,
        width: width,
        backgroundColor: 'white',
        // flexDirection: 'row',
    },
    tabView:{
        flex: 1,
        height: 26,
        // backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarUnderLine:{
        height: 10,
        backgroundColor:'#ee735c',
        width: 60,
        borderRadius: 10,
    },
    txtPadding: {
        paddingLeft: 20,
        paddingRight: 20,
    }
})

export default class TabBar extends Component {
    tabNum = 0
    _inputRange = []
    _outputRange = []
    currentIndex = 0;
    constructor(props) {
        super(props);
        this.setPosition = this.setPosition.bind(this);
        this.moveToPosition = this.moveToPosition.bind(this);
        this.state = {
            tarBarPosition: new Animated.Value(0),
        }
        this.tabNum = props.tabLabels.length;
        this.setPosition();
        this.currentIndex = 0;
        this.props.syncGoToFunc(this.moveToPosition,'tab');
    }

    setPosition(){
        let underlineWidth = 60;
        let tabBarWidth = width / this.tabNum;
        let pLeft = (tabBarWidth - underlineWidth) / 2;

        for(let i = 0; i < this.tabNum; i++){
            this._inputRange.push(i);
            this._outputRange.push(pLeft + i*tabBarWidth);
        }
        console.log(this._inputRange,this._outputRange)
        this.state.tarBarPosition.setValue(0);
    }

    moveToPosition(position){
        // console.log(position,this.currentIndex)
        if(this.currentIndex === position){

            return false;
        }
        Animated.timing(
             this.state.tarBarPosition,
            {
                toValue: position,
                duration: 300,
                easing: Easing.easeIneaseOut,
            }
        ).start();
        this.currentIndex = position;

        // console.log(typeof this.props.goToPage)
        this.props.goToPage(position)
    }


    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }

    render(){
        const { tabLabels } = this.props;
        return(
            <View style={styles.tabContainer}>
                <View style={{flexDirection:'row'}}>

                    { !!tabLabels && tabLabels.map((item,i) => (
                        <View
                            style={styles.tabView}
                            key={`tabBar_${i}`}
                        >
                            <TouchableOpacity
                                underlayColor={'transparent'}
                                onPress={()=>{
                                    this.moveToPosition(i);
                                }}
                            >
                                <Text style={[styles.txtPadding,{

                                }]}>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                <Animated.View
                    style={[styles.tabBarUnderLine,{
                        transform:[
                            {translateX: this.state.tarBarPosition.interpolate({
                                inputRange: this._inputRange,
                                outputRange: this._outputRange,
                            })}
                        ]
                    }]}
                />
            </View>
        );
    }


    componentDidMount(){
        console.log('tabBar');
    }
}
