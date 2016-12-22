/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/21 19:55:40
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/21 20:03:49
*/


import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import TabBar from './tabBar';
import Content from './content';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center'
    }
})



export default class Index extends Component {
    tabs  = []
    tabsComponent = [];

    tabFunc=null;
    contentFunc= null;
    constructor(props) {
        super(props);
        this._children = this._children.bind(this);
        this.goToPageContent = this.goToPageContent.bind(this);
        this.goToPageTab = this.goToPageTab.bind(this);
        this.syncGoToFunc = this.syncGoToFunc.bind(this);
        this.tabsComponent = this._children();
        this.tabs =this.tabsComponent.map((child) => child.props.tabLabel)
        // this.state = {
        //     contentCurrentIndex: 0,
        //     tabCurrentIndex: 0,
        //     tabFunc: null,
        //     contentFunc: null,
        // }
    }

    _children(children = this.props.children) {
      return React.Children.map(children, (child) => child);
    }
    syncGoToFunc(func,type){
        if(type=='tab'){
            // this.setState({
            //     tabFunc : func,
            // });
            this.tabFunc = func;
        }else{
            // this.setState({
            //     contentFunc : func,
            // });
            this.contentFunc = func;
        }
    }
    goToPageContent(position){
        this.tabFunc(position);
    }

    goToPageTab(position){
        console.log(typeof this.contentFunc);
        this.contentFunc(position);
    }

    render(){
        console.log(this.props.children)
        console.log(this.tabs);
        return(
            <View style={styles.container}>
                <TabBar
                    // currentIndex={this.state.tabCurrentIndex}
                    syncGoToFunc={this.syncGoToFunc}
                    tabLabels={this.tabs}
                    goToPage={this.goToPageTab}
                />
                <Content
                    tabsComponent={this.tabsComponent} syncGoToFunc={this.syncGoToFunc}
                    goToPage={this.goToPageContent}
                />
            </View>
        );
    }

    componentDidMount(){
        console.log('index');
    }
}
