import React from 'react'
import ReactDOM from 'react-dom'

import { personal } from '../../constant/personal'
import avatarImg from '../../assets/Alain.png'

import './header.less'

export class Header extends React.Component {
    render() {
        const { userInfo } = personal
        return (
            <div className="header-content">
                <div className="avatar" style={{backgroundImage: `url('${avatarImg}')`}}></div>
                <div className="avatar-body display-flex-col">
                    <span className="header-username">{userInfo.name}</span>
                    <div className="header-info display-flex-col">
                        <div className="display-flex-row">
                            <p className="header-info-item navbar-text">
                                <i className="iconfont icon-stealth"></i>
                                <span className="personal-info school">{userInfo.school}</span>
                            </p>
                        </div>
                        <div className="display-flex-row">
                            <p className="header-info-item">
                                <i className="iconfont icon-mobilephone"></i>
                                <span className="personal-info phone">{userInfo.phone}</span>
                            </p>
                            <p className="header-info-item">
                                <i className="iconfont icon-mail"></i>
                                <span className="personal-info email">{userInfo.email}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}