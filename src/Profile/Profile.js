import { message,Table } from 'antd';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom'

const columns = [
    {
        title: 'Id',
        dataIndex: 'userId',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];
const Profile = (props) => {
    useEffect(() => {
        async function checkLogin() {
            if (!props.user) {
                await message.error('Please login', 1)
            }
        }
        checkLogin()
    }, [])
    
    if(props.user){
        return (
            <Table columns={columns} dataSource={[props.user]} bordered style={{margin:'20px 0'}} pagination={false}/>
        )
    }
    return  <Redirect to='/login' />
    
}

export default Profile;