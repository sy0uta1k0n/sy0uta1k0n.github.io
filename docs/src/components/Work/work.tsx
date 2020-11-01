import React from 'react'
import ReactDOM from 'react-dom'

import { personal } from '../../constant/personal'

import './work.less'

export class Work extends React.Component {
    render() {
        const { workInfo } = personal
        return (
            <div className="common-content work-content display-flex-col">
                <span className="common-title work-title">{workInfo.title}</span>
                <div className="common-list work-list">
                    {
                        workInfo.list.map((work, index) => {
                            return (
                                <div className="common-list-item work-list-item" key={index}>
                                    <div className="common-sub-title work-sub-title">
                                        <span className="common-name work-company">{work.company}</span>
                                        <span className="common-time work-time">{work.time}</span>
                                    </div>
                                    <div className="common-sub-content work-sub-content">
                                        <span className="common-description work-position">{work.position}</span>
                                        {
                                            work.description.map((des: string, dIndex: number) => {
                                                return (
                                                    <span className="common-detail work-description" key={dIndex}>{des}</span>
                                                )
                                            })
                                        }
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