<template xmlns="http://www.w3.org/1999/html">
    <div id="app">
        <header>
            <div class="header display-flex-col">
                <h1>朱华浩(Zhu, Hua-Hao)</h1>
                <div class="header-info display-flex-col">
                    <div class="header-info-item display-flex-row">
                        <i class="iconfont icon-homepage"></i>
                        <span class="personal-info status">正在寻找前端工作</span>
                    </div>
                    <div class="header-info-item display-flex-row">
                        <i class="iconfont icon-addressbook"></i>
                        <span class="personal-info gender">男</span>
                    </div>
                    <div class="header-info-item display-flex-row">
                        <i class="iconfont icon-accessory"></i>
                        <span class="personal-info age">28</span>
                    </div>
                    <div class="header-info-item display-flex-row">
                        <i class="iconfont icon-coordinates"></i>
                        <span class="personal-info living">上海-浦东新区</span>
                    </div>
                    <div class="header-info-item display-flex-row">
                        <i class="iconfont icon-stealth"></i>
                        <span class="personal-info wk-exp">6年工作经验(1年前端)</span>
                    </div>
                    <div class="header-info-item display-flex-row">
                        <i class="iconfont icon-mobilephone"></i>
                        <span class="personal-info phone">13818813680</span>
                    </div>
                    <div class="header-info-item display-flex-row">
                        <i class="iconfont icon-mail"></i>
                        <span class="personal-info email">zhuhuahao@gmail.com</span>
                    </div>
                </div>
            </div>
        </header>
        <div class="body-info display-flex-col">
            <div class="education display-flex-col">
                <h2>教育经历</h2>
                <div class="education-title display-flex-row">
                    <span class="education-title-time">2007/9-2011/9</span>
                    <span class="education-title-school">同济大学</span>
                </div>
                <span>本科|软件工程</span>
            </div>
            <div class="technology">
                <h2>个人技术</h2>
                <ul>
                    <li class="tec-title">前端
                        <ul>
                            <li class="tec-item">熟悉HTML/HTML5， CSS 2.X/CSS 3.X 各个浏览器兼容性调试，以及Chrome，Firebug，Postman，Fiddle各种调试工具</li>
                            <li class="tec-item">熟悉原生Java Script， 原型， 作用域，闭包，事件，DOM，BOM, aJax等基础概念，以及jQuery，jQuery UI，jQuery Mobile UI等库</li>
                            <li class="tec-item">熟悉主流MVVM框架VueJS，了解React</li>
                            <li class="tec-item">熟悉GIT， SVN等版本控制工具</li>
                            <li class="tec-item">熟悉Webpack， Gulp等打包工具</li>
                        </ul>
                    </li>
                    <li class="tec-title">测试
                        <ul>
                            <li class="tec-item">熟悉Selenium页面自动化测试框架</li>
                            <li class="tec-item">熟悉QTP, Loadrunner等自动化测试工具</li>
                            <li class="tec-item">参与构建项目接口自动化测试框架</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="work-exp">
                <h2>工作经验</h2>
                <div class="wkexp-item display-flex-col">
                    <div class="wkexp-item-title">
                        <span class="wkexp-item-time">2016/5-至今</span>
                        <span class="wkexp-item-project"><em>Web前端开发</em>协筑项目部</span>
                    </div>
                    <span class="wkexp-item-company">广联达软件股份有限公司 <em>[11个月]</em></span>
                    <span class="wkexp-item-company-type">互联网/电子商务|民营公司</span>
                    <span class="wkexp-item-description">广联达协筑项目针对建筑行业，是集文档管理，模型预览，批注评论，权限控制等于一体的云平台。在项目中，我主要负责前端页面需求实现以及日常bug修复</span>
                </div>
                <div class="wkexp-item display-flex-col">
                    <div class="wkexp-item-title">
                        <span class="wkexp-item-time">2015/6-2016/5</span>
                        <span class="wkexp-item-project"><em>高级软件测试工程师</em>云平台开发部</span>
                    </div>
                    <span class="wkexp-item-company">广联达软件股份有限公司 <em>[1年10个月]</em></span>
                    <span class="wkexp-item-company-type">互联网/电子商务|民营公司</span>
                    <span class="wkexp-item-description">确保产品上线前的质量</span>
                </div>
                <div class="wkexp-item display-flex-col">
                    <div class="wkexp-item-title">
                        <span class="wkexp-item-time">2011/2-2015/6</span>
                        <span class="wkexp-item-project"><em>软件测试工程师</em>TCoE</span>
                    </div>
                    <span class="wkexp-item-company">惠普 <em>[4年4个月]</em></span>
                    <span class="wkexp-item-company-type">计算机软件|外资(欧美)</span>
                    <span class="wkexp-item-description">确保产品上线前的质量</span>
                </div>
            </div>
            <div class="project-exp">
                <h2>项目经验</h2>
                <div class="project-exp-item display-flex-col">
                    <div class="project-exp-item-title">
                        <span class="project-exp-item-time">2016/5-至今</span>
                        <span class="project-exp-item-project">协筑</span>
                    </div>
                    <span class="project-exp-item-company">广联达软件股份有限公司</span>
                    <div class="project-exp-item-description">
                        <ul>
                            <li>Portal页面维护和价格页实现（jQuery+Mustache）</li>
                            <li>新手引导模块（jQuery）</li>
                            <li>申请试用模块手机端（Vue）</li>
                            <li>邀请成员模块手机端（jQuery）</li>
                            <li>问题模块手机端（Vue+VueX+VueRouter）</li>
                        </ul>
                    </div>
                </div>
                <div class="project-exp-item display-flex-col">
                    <div class="project-exp-item-title">
                        <span class="project-exp-item-time">2015/6-2016/5</span>
                        <span class="project-exp-item-project">广联云</span>
                    </div>
                    <span class="project-exp-item-company">广联达软件股份有限公司</span>
                    <div class="project-exp-item-description">
                        <ul>
                            <li>担任功能测试, 负责每个迭代的功能质量保证</li>
                            <li>担任性能测试, 负责新版接口性能测试并给出结论</li>
                            <li>担任接口测试, 负责将对外提供的接口自动化并实时监控</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="self display-flex-col">
                <h2>自我评价</h2>
                <p>	性格乐观向上, 为人和善, 对生活持积极态度.</br>
                    工作认真负责, 学习能力出众, 能迅速接受企业文化.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "css/app.scss";

    @import 'css/reset.css';
    @import 'css/iconfont.css';
</style>