/**
 * Created by SamMFFL on 2016/12/1.
 */

import React, {Component} from 'react';

import PageView from '../PageView';
import SimplestDemo from './SimplestDemo';

export default class Index extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {navigator} = this.props;
        const items = [
            {
                key: 'simplestDemo',
                title: '单一动画处理',
                subTitle: 'Opacity、',
                navigator: navigator,
                navigatorName: 'simplestDemo',
                component: SimplestDemo
            }
        ];

        return (
            <PageView
                headerText="使用LayoutAnimation、Animated处理动画"
                items={items}
            />
        )
    }
}
