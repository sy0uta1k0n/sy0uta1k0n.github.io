import React from 'react'
import ReactDOM from 'react-dom'

import { personal } from '../../constant/personal'

import './project.less'

export class Project extends React.Component {
    render() {
        const { projectInfo } = personal
        return (
            <div className="common-content project-content display-flex-col">
                <span className="common-title project-title">{projectInfo.title}</span>
                <div className="common-list project-list">
                    {
                        projectInfo.list.map((project, index) => {
                            return (
                                <div className="common-list-item project-list-item" key={index}>
                                    <div className="common-sub-title project-sub-title">
                                        <span className="common-name project-name">{project.name}</span>
                                        <span className="common-description project-description">{project.description}</span>
                                    </div>
                                    <div className="common-sub-content project-sub-content">
                                        <span className="common-time project-time">{project.time}</span>
                                        <span className="common-detail project-detail">{project.detail}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}