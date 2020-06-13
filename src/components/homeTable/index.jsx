import React, { useState } from 'react'
import { Table, Divider, Button } from 'antd';
import { connect } from 'react-redux'
import { tableAction } from '@/actions/table'
import './style.less'

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        render: text => <a>{text}</a>,
    },
    {
        title: '用户名',
        dataIndex: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
    },
    {
        title: '权限',
        dataIndex: 'gender',
    },
    {
        title: '状态',
        dataIndex: 'count',
    },
    {
        title: 'Action',
        render: () => (
            <span>
                <Button>修改</Button>
                <Divider type="vertical" />
                <Button>删除</Button>
            </span>
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

function Demo (props) {
    const { tableAction, data } = props
    tableAction()
    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <div className='components-table'>
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
  tableAction
})(Demo)