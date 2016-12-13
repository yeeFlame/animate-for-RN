/**
 * Created by SamMFFL on 2016/12/8.
 */

import React, {Component} from 'react';

import PageView from '../PageView'

import SetStatesDemo from './setStatesDemo';
import SetNativePropsDemo from './setNativePropsDemo';
import LayoutAnimationDemo from './layoutAnimationDemo';
import AnimatedDemo from './animatedDemo';


export default class Index extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {navigator} = this.props;
        const items = [
            {
                key: 'statesDemo',
                title: '使用setState处理单一动画',
                subTitle: 'width、height、opacity',
                navigator: navigator,
                navigatorName: 'statesDemo',
                component: SetStatesDemo,
            },
            {
                key: 'setNativePropsDemo',
                title: '使用setNativeProps处理单一动画',
                subTitle: 'width、height',
                navigator: navigator,
                navigatorName: 'setNativePropsDemo',
                component: SetNativePropsDemo,
            },
            {
                key: 'layoutAnimationDemo',
                title: '使用LayoutAnimation处理单一动画',
                subTitle: 'width、height',
                navigator: navigator,
                navigatorName: 'layoutAnimationDemo',
                component: LayoutAnimationDemo,
            },
            {
                key: 'animatedDemo',
                title: '使用Animated处理单一动画',
                subTitle: 'timing、decay、spring',
                navigator: navigator,
                navigatorName: 'animatedDemo',
                component: AnimatedDemo,
            }
        ];

        return (
            <PageView
                headerText="处理动画demo"
                items={items}
            />
        )
    }
}
