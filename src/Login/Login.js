import { Form, Input, Button, Checkbox, message } from 'antd';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router';
const Login = (props) => {
    let {url} =useRouteMatch()
    useEffect(() => {
        if (props.user) {
            props.setUser(null)
            localStorage.removeItem('TOKEN')
            localStorage.removeItem('EMAIL')
            localStorage.removeItem('ID')
        }
    }, [])


    const onFinish = async (values) => {
        await axios.get('https://60dff0ba6b689e001788c858.mockapi.io/token')
            .then((res) => {
                props.setUser({ ...values, userId: res.data.userId })
                axios.defaults.headers['authorization'] = res.data.token
                localStorage.setItem('TOKEN', res.data.token)
                localStorage.setItem('EMAIL', values.email)
                localStorage.setItem('ID',  res.data.userId)
            })
            .catch(() => message.error('Login falied!'))

        message.success('Login successfully');
        window.location.href=`${url.split('/')[0]}/profile`
    };

    const onFinishFailed = (errorInfo) => {
        message.error('Login falied! ' + errorInfo.errorFields[0].errors)
    };


    return (
        <div>
            <Form
                name="basic"
                style={{ margin: '5rem auto' }}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'email is not valid' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }, { min: 8, message: 'At least 8 characters' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default Login;