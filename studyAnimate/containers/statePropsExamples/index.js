/**
 * Created by SamMFFL on 2016/12/3.
 */

import React, {Component} from 'react';

import PageView from '../PageView'
import StatesDemo from './statesDemo';

export default class Index extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {navigator} = this.props;
        const items = [
            {
                key: 'statesDemo',
                title: '使用requestAnimation处理单一动画',
                subTitle: 'Opacity、',
                navigator: navigator,
                navigatorName: 'statesDemo',
                component: StatesDemo
            }
        ];

        return (
            <PageView
                headerText="使用state、props处理动画"
                items={items}
            />
        )
    }
}
