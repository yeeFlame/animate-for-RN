/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/12/13 14:32:34
* @Email:  samfec@163.com
* @Last modified by:   SamMFFL
* @Last modified time: 2016/12/13 14:38:22
*/


import React, {Component} from 'react';
import PageView from '../PageView'
import scrollTabViewDemo from './scrollTabViewDemo';
import ResolveModule from './resolveModule';

export default class Index extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {navigator} = this.props;
        const items = [
            {
                key: 'scrollTabView',
                title: '使用插件实现tab切换',
                subTitle: '使用React-native-scrollable-tab-view',
                navigator: navigator,
                navigatorName: 'scrollTabView',
                component: scrollTabViewDemo,
            },
            {
                key: 'resolveModule',
                title: '分解动作',
                subTitle: 'scrollView、tabBar、staticComponent',
                navigator: navigator,
                navigatorName: 'resolveModule',
                component: ResolveModule,
            },
        ];

        return (
            <PageView
                headerText="常用动画插件和自制动画组件对比"
                items={items}
            />
        )
    }
}
