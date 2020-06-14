import React, { useState } from 'react'
import { Table, Divider, Button, Input, Modal } from 'antd';
import { connect } from 'react-redux'
import { tableAction, delAction } from '@/actions/table'
import './style.less'

function Demo (props) {
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const showModal = (id) => {
        setVisible(true)
        console.log( document.getElementsByClassName('name')[0])
        document.getElementsByClassName('name')[0].value=id.name
      };
    const  handleCancel = () => {
        setVisible(false)
      }
    const handleOk = () => {
        setConfirmLoading(true)
        setTimeout(() => {
            setVisible(false)
            setConfirmLoading(false)
        }, 2000);
      };
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key:'id',
        render: text => <a>{text}</a>,
    },
    {
        title: '用户名',
        dataIndex: 'name',
        key:'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key:'age',
    },
    {
        title: '权限',
        dataIndex: 'gender',
        key:'gender',
    },
    {
        title: '状态',
        dataIndex: 'count',
        key:'count',
    },
    {
        title: 'Action',
        render: (id) => (
            <div>
                <Button type="primary" onClick={() => showModal(id)}>修改</Button>
                
                <Modal
                    title="Title"
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                <Input className='inp name' placeholder='请输入用户名'/>
                </Modal>
                <Divider type="vertical" />
                <Button onClick = {() => del(id.id)}>删除</Button>
            </div>
        ),
    },
];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
    }),
};
    const { tableAction, delAction, data } = props
    //删除
    const del = (id) => {
        delAction({id:id})
    }
    
    tableAction()
    const [selectionType] = useState('checkbox');
    return (
        <div className='components-table' >
          <Table
              rowSelection={{
                  type: selectionType,
                  ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
          />
        </div>
    );
};
export default connect(state => {
    return {
        data:state.table.data
    }
},{
  tableAction,
  delAction
})(Demo)