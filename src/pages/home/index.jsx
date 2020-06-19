import React, { useState } from 'react'
import Tables from './table'
import Tags from '@/pages/tags'
import { connect } from 'react-redux'
import { homeAction, selectAction } from '@/actions/home'


function Home (props) {
  const { homeAction, data, selectData } = props
  return (
    <div>
        <Tags data = { data }/>
        <Tables/>
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
})(Home)


