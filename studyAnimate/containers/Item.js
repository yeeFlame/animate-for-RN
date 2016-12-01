/**
 * Created by SamMFFL on 2016/12/1.
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

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
        let {navigator, component, navigatorName} = this.props;
        navigator.push({
            name: navigatorName,
            component: component,
            params: {
                test: 1,
            }
        })
    }

    render() {
        return (
            <TouchableHighlight underlayColor={'transparent'} onPress={this.goTo}>
                <View style={styles.container}>

                    <Text style={styles.text}>{this.props.title}</Text>

                </View>
            </TouchableHighlight>
        );
    }
}