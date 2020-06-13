import React from 'react'
import HomeList from '@/components/homeList'
import HomeTable from '@/components/homeTable'
import './style.less'

export default function index () {
    return (
      <div className='pages-home'>
          <div className='pagesHome-head'>
            <p>后台管理系统</p>
            <p>xxx</p>
          </div>
          <div className='pagesHome-body'>
              <HomeList/>
              <HomeTable/>
          </div>
          
      </div>
    )
}
