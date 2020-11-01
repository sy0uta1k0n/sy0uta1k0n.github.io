import React from 'react'
import ReactDOM from 'react-dom'

import { personal } from '../../constant/personal'

import './skill.less'

export class Skill extends React.Component {
    render() {
        const { skillInfo } = personal
        return (
            <div className="common-content skill-content display-flex-col">
                <span className="common-title skill-title">{skillInfo.title}</span>
                <div className="skill-list">
                    {
                        skillInfo.list.map((skill, index) => {
                            return (
                                <div className="skill-item" key={index}>{skill}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}