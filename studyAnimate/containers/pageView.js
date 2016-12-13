/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/03 11:48:01
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/13 14:40:29
*/


import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import Header from './Header'
import Item from './Item';

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

export default class PageView extends Component {
    constructor(props) {
        super(props);

    }

    _renderRows(items) {
        return items.map((item) => {
            const {
                key,
                title,
                subTitle,
                navigator,
                navigatorName,
                component
            } = item;

            return (
                <Item
                    key={key}
                    title={title}
                    subTitle={subTitle}
                    navigator={navigator}
                    navigatorName={navigatorName}
                    component={component}
                />
            )
        })
    }

    render() {
        const {
            headerText,
            items,
        } = this.props;

        return (
            <View style={styles.container}>
                <Header title={headerText}/>
                <ScrollView
                    vertical={Boolean(true)}
                    directionalLockEnabled={Boolean(true)}
                    showsHorizontalScrollIndicator={Boolean(false)}
                    indicatorStyle="white"
                    style={styles.scroll}
                >
                    {!!items && this._renderRows(items)}
                </ScrollView>

            </View>
        )
    }
}
