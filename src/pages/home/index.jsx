import React, { useState } from 'react'
import HomeList from '@/components/homeList'
import HomeTable from '@/components/homeTable'
import { Button, Modal, Input } from 'antd'
import { connect } from 'react-redux'
import { addAction, seaAction } from '@/actions/table'
import './style.less'
function Index (props) {
    const { addAction, seaAction, data } = props
    const [count, setCount] = useState(false)
    const showModal = () => setCount(true)
    const handleOk = e => {
        setCount(false)
        const obj={
             name:document.getElementsByClassName('name')[0].value,
             age:document.getElementsByClassName('age')[0].value,
             gender:document.getElementsByClassName('gender')[0].value,
             count:document.getElementsByClassName('count')[0].value
        }
        console.log(obj)
        addAction(obj)
    }
    const handleCancel = e => setCount(false) 
    //搜索
    const onSearch = (e) => {
        const keyword=e.target.value
        seaAction(keyword)
    }
    return (
        <div className='pages-home'>
         
            <div className='pagesHome-head'>
                <p>后台管理系统</p>
                <p>xxx</p>
            </div>
            <div className='pagesHome-body'>
                <HomeList/>
                <div className='pages-home-rig'>
                        <div className='pages-home-rigEach'>
                            <Input className='inp search' placeholder='请输入要搜索的内容' onChange={(e) => onSearch(e)}/>
                        </div>
                        <div className='pages-home-rigHead'>
                            <div>
                                    <Button type="primary" onClick={showModal}>
                                        添加
                                    </Button>
                                    <Modal
                                        title="Basic Modal"
                                        visible={count}
                                        onOk={handleOk}
                                        onCancel={handleCancel}
                                    >
                                        <Input className='inp name' placeholder='请输入用户名'/>
                                        <Input className='inp age' placeholder='请输入年龄'/>
                                        <Input className='inp gender' placeholder='请输入权限'/>
                                        <Input className='inp count' placeholder='请输入状态'/>
                                        
                                    </Modal>
                            </div>
                            
                        </div>
                        <HomeTable/>
                </div>
                
            </div>
            
        </div>
    )
}
export default connect(state => {
    return {
        data: state.table.data
    }
},{
    addAction,
    seaAction
})(Index)