/**
 * Created by SamMFFL on 2016/12/1.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import Header from '../Header'
import Item from '../Item';
import SimplestDemo from './SimplestDemo';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    header: {
        paddingTop: 25,
        paddingBottom: 12,
        backgroundColor: '#ee735c',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
    },
    scroll: {
        flex: 1,
        // borderWidth: 1,
        marginBottom: 50,
    }
});

export default class OriginalView extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Header title="使用Animated处理动画"/>
                <ScrollView
                    vertical={Boolean(true)}
                    directionalLockEnabled={Boolean(true)}
                    showsHorizontalScrollIndicator={Boolean(false)}
                    indicatorStyle="white"
                    style={styles.scroll}
                >
                    <Item
                        key={'simplestDemo'}
                        title="单一动画处理"
                        subTitle="Opacity、"
                        navigator={this.props.navigator}
                        navigatorName="simplestDemo"
                        component={SimplestDemo}
                    />
                </ScrollView>

            </View>
        )
    }
}
