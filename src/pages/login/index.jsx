import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux'
import { getLogin } from '@/actions/login'
import './style.less'

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
};

function Login (props) {
    const { getLogin, data } = props
    console.log(props)
    const initialValues = {
        remember: true
    }
    const onFinish = async (values) => {
        const res = await getLogin(values)
      if(res.payload.status == 200) {
        alert(res.payload.message)
        props.history.push('/home')
      }
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='pages-login'>
            <Form
                {...layout}   
                name="basic"
                initialValues={initialValues}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                        </Form.Item>

                        <Form.Item
                            label="Pwd"
                            name="pwd"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                  <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default connect(state => {
    return {
        data:state.login.data
    }
},{
    getLogin
})(Login)
