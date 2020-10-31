import React from 'react'
import ReactDOM from 'react-dom'

import '../style/index.less'
import '../style/reset.css'
import '../style/iconfont.css'

import { Header } from '../components/Header/header'
import { Skill } from '../components/Skill/skill'

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <Header />
        <Skill />
      </div>
    )
  }
}

ReactDOM.render(
  <Resume />,
  document.getElementById('app')
)