import React, { useState } from 'react'
import { Table, Input } from 'antd'
import { connect } from 'react-redux'
import { homeAction, selectAction } from '@/actions/home'

function Tables (props) {
  const { homeAction, selectData } = props
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const onSelectChange = (selectedRowKeys, data) => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    // console.log(data)
    setSelectedRowKeys( [...selectedRowKeys] );
    //保存tags
    homeAction(data)
    //保存选中的checkbox
    selectAction(setSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  
  const dataSource = [
    {
      key: '1',
      age: 25 ,
      name: '胡彦斌',
    },
    {
      key: '2',
      age: 30 ,
      name: '胡彦祖',
    },
    {
      key: '3',
      age: 44 ,
      name: '杨小帆',
    },
  ];
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '地址',
      dataIndex: 'form',
      render: () => <Input/>
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
  ];
  return (
    <div>
        <Table rowSelection={rowSelection} 
              dataSource={dataSource} 
              columns={columns} 
        />
    </div>
  )
}
export default connect(state => {
  return{
    data: state.home.data,
    selectData: state.home.selectData
  }
},{
  homeAction,
  selectAction
})(Tables)


