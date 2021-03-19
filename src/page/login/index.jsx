import React, { useState  } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {LoginInterface} from '../../services/login';
import style from './index.less';


const reg = /^\d{5,12}$/g


function  Login() {

  const [account, setAccount] = useState(void 0);
  const [password, setPassword] = useState(void 0);

    function handleChangeaccount({target: {value}}) {
        setAccount(value)
    }

    function handleChangepassword({target: {value}}) {

        setPassword(value)
    }

    function handleLogin(){
        if(!reg.test(account))  return message.error('请输入纯数字,账号为5到12位数字');
        LoginInterface({account, password});
    } 


    return (
       <div className={style.login}>
            <Form
                name="normal_login"
                className={style.account}
                initialValues={{
                    remember: true,
                }}
                //   onFinish={onFinish}
                >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                    ]}
                >
                    <Input 
                        prefix={<UserOutlined 
                        className="site-form-item-icon" />} 
                        placeholder="Username"
                        onChange={handleChangeaccount}
                        />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        onChange={handleChangepassword}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>
            
                    <a className="login-form-forgot" href="">
                    Forgot password
                    </a>
                </Form.Item>
            
                <Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        className="login-form-button"
                        onClick={handleLogin}
                        >
                            Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
                </Form>
       </div>
      );
} 
export default Login;
