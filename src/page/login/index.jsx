import React, { useState  } from 'react';
import { Input } from 'antd';
import style from './index.less';


const reg = /^\d{5,12}$/g


function  Login() {

  const [	
    account,	
    setAccount	
  ] = useState(0);

    function handleChangeaccount({target: {value}}) {
        setAccount(value)
    }

    function handleChangepassword({target: {value}}) {

        console.log(value);
    }

    return(
        <div className={style.login}>
            <div className={style.account}>
                <div >
                     <span>账 号: </span>
                      <Input 
                          style={{width: 204}}
                          onChange={handleChangeaccount}
                      />
                </div>

                <div >
                     <span>密 码: </span>
                      <Input.Password 
                          style={{width: 204}}
                          onChange={handleChangepassword}
                      />
                </div>
            </div>
        </div>
    )
} 
export default Login;
