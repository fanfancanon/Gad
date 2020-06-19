import React, { useState } from 'react'
import { Tag } from 'antd';
import { connect } from 'react-redux'
import { homeAction, selectAction } from '@/actions/home'
import './style.less'

function Tags (props) {
  const { data, selectData, selectAction } = props
  const onClose = key => {
    const sss = selectData.filter(sel => sel !== key)
    selectAction(sss)
  }
  return (
    <div>
      {
        data.map(({key, name}) => {
          return (
            <Tag closable onClose={() => onClose(key)} key = {key}>
               {name} 
            </Tag>
          )
        })
      }
      
    </div>
  )
}
export default connect(state => {
  return{
    data:state.home.data,
    selectData: state.home.selectData
  }
},{
  homeAction,
  selectAction
})(Tags)


