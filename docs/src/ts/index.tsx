import React from 'react'
import ReactDOM from 'react-dom'

import '../style/index.less'
import '../style/reset.css'
import '../style/iconfont.css'

import { Header } from '../components/Header/header'
import { Skill } from '../components/Skill/skill'
import { Work } from '../components/Work/work'
import { Project } from '../components/Project/project'

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <Header />
        <Skill />
        <Work />
        <Project />
      </div>
    )
  }
}

ReactDOM.render(
  <Resume />,
  document.getElementById('app')
)