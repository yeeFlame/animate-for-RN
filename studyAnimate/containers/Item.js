/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/01 19:30:17
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/13 14:40:22
*/


import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#D6DCDF',
        padding: 10,
        backgroundColor: '#f5fcff'
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
    subText: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'PingFangSC-Thin',
    },
    rightArrow: {
        position: 'absolute',
        right: 10,
        top: 10,
    }
});

export default class Item extends Component {
    static propTypes = {
        title: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.goTo = this.goTo.bind(this);
    }

    goTo() {
        let {navigator, component, navigatorName, title} = this.props;
        navigator.push({
            name: navigatorName,
            component: component,
            params: {
                title: title,
            }
        })
    }

    _renderSubTitle() {
        return (
            <Text style={styles.subText}>{this.props.subTitle}</Text>
        );
    }

    render() {
        const {subTitle} = this.props;
        return (
            <TouchableHighlight underlayColor={'transparent'} onPress={this.goTo}>
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.title}</Text>
                    {!!subTitle && this._renderSubTitle()}
                    <View style={styles.rightArrow}>
                        <Icon name="arrow-circle-right" size={26} color="#D6DCDF"/>
                    </View>
                </View>

            </TouchableHighlight>
        );
    }
}
