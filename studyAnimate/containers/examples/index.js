/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/09 10:37:42
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/13 14:38:48
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
                headerText="动画处理demo"
                items={items}
            />
        )
    }
}
