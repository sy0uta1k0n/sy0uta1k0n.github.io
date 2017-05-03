<template xmlns="http://www.w3.org/1999/html">
    <div id="app">
        <header>
            <div class="header display-flex-col">
                <h1>朱华浩(Zhu, Hua-Hao)</h1>
                <div class="header-info display-flex-col">
                    <div class="display-flex-row">
                        <div class="header-info-item">
                            <i class="iconfont icon-accessory"></i>
                            <span class="personal-info age">28</span>
                        </div>
                        <div class="header-info-item">
                            <i class="iconfont icon-stealth"></i>
                            <span class="personal-info wk-exp">6年工作经验(1年前端)</span>
                        </div>
                        <div class="header-info-item">
                            <i class="iconfont icon-coordinates"></i>
                            <span class="personal-info living">上海-浦东新区</span>
                        </div>
                    </div>
                    <div class="display-flex-row">
                        <div class="header-info-item">
                            <i class="iconfont icon-homepage"></i>
                            <span class="personal-info status">正在寻找前端工作</span>
                        </div>
                        <div class="header-info-item">
                            <i class="iconfont icon-mobilephone"></i>
                            <span class="personal-info phone">13818813680</span>
                        </div>
                        <div class="header-info-item">
                            <i class="iconfont icon-mail"></i>
                            <span class="personal-info email">zhuhuahao@gmail.com</span>
                        </div>
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
                <span class="education-major">本科|软件工程</span>
            </div>
            <div class="technology">
                <h2>个人技术</h2>
                <ul>
                    <li class="tec-title">前端
                        <ul>
                            <li class="tec-item">熟悉HTML/HTML5， CSS 2.X/CSS 3.X</li>
                            <li class="tec-item">熟悉Chrome，Firebug，Postman，Fiddle各种调试工具</li>
                            <li class="tec-item">熟悉原生JavaScript， 原型， 作用域，闭包，事件，DOM，BOM, AJAX等基础概念</li>
                            <li class="tec-item">熟悉jQuery，jQuery UI，jQuery Mobile UI等库</li>
                            <li class="tec-item">了解主流MVVM框架Vue.js</li>
                            <li class="tec-item">了解各个浏览器兼容性调试</li>
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
                            <li>Portal页面维护和价格页实现（jQuery+Mustache）.</br>
                                <em>portal页面是协筑首页,后端返回定义好页面结构的jsp.前端通过扩充/控制js来实现具体功能.</br>
                                    在这个模块中,首先我需要更新一些基础页面交互,例如更换banner,替换新年样式等.使用基本的HTML+CSS实现</br>
                                    在价格页中,需要定义一些元素的响应事件并提交数据给后端.需要解决表单校验(FormValidate),弹出层以及遮罩层的处理等
                                </em>
                            </li>
                            <li>新手引导模块（jQuery）.</br>
                                <em>新手引导模块是新用户在进入文件预览时,给予用户的示例操作.</br>
                                    这个模块在实现过程中需要控制设计提供的整图的位移(background-position),以及图片中"下一步"的click事件,最后还有发送给后端的AJAX请求.
                                </em>
                            </li>
                            <li>申请试用模块手机端（Vue）.</br>
                                <em>此模块是新用户通过手机访问申请试用页面地址来提交试用的模块.</br>
                                    这个模块在实现过程中,采用Flex布局,因为是单页应用,因此并未使用Vue的状态管理和路由机制,仅渲染不同的页面模板.</br>
                                    但在完成之后,发现调试过程中忽视了点击input弹出键盘遮挡input的问题,后通过控制元素滚动解决</br>
                                    </em></li>
                            <li>邀请成员模块手机端（jQuery）.</br>
                                <em>此模块是用户邀请其他未注册成员后,该成员收到短信点击短链直接操作的模块.</br>
                                    在和后端对接时,发现后端校验验证码需要请求的SignupKey.而我在实现时,直接将返回的流填充img标签获取验证码.后通过发送XMLhttpRequest获取blob填充方式实现</em></li>
                            <li>问题模块手机端（Vue+VueX+VueRouter）.</br>
                                <em>问题模块是用户在施工现场发现问题后,现场拍照提交问题,并指定执行人解决的模块.</br>
                                    在参与实现这个模块中,实施了除Vue.js之外的状态管理VueX,以及路由管理VueRouter.</em></li>
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
                            <li><em>担任功能测试, 负责每个迭代的功能质量保证</em></li>
                            <li><em>担任性能测试, 负责新版接口性能测试并给出结论</em></li>
                            <li><em>担任接口测试, 负责将对外提供的接口自动化并实时监控</em></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="self display-flex-col">
                <div class="self-item">
                    <h2>自我评价</h2>
                    <div class="self-item-description">
                        <p>性格乐观向上, 为人和善, 对生活持积极态度.</p>
                        <p>工作认真负责, 学习能力出众, 能迅速接受企业文化.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "css/app.scss";

    @import 'css/reset.css';
    @import 'css/iconfont.css';
</style>