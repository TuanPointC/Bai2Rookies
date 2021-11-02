import './Nav.scss'
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { HomeOutlined, ContainerOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { useLocation  } from 'react-router';
const Nav = (props) => {
    const location  = useLocation ().pathname.split('/')[1]
    return (
        <Menu mode="horizontal" theme="dark">
            <Menu.Item key="home" icon={<HomeOutlined />} style={{backgroundColor: location===''?'gray':''}}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="posts" icon={<ContainerOutlined />} style={{backgroundColor: location==='posts'?'gray':''}}>
                <Link to="/posts">Posts</Link>
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />} style={{backgroundColor: location==='profile'?'gray':''}}>
                <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="login" icon={<UsergroupAddOutlined />} style={{backgroundColor: location==='login'?'gray':''}}>
                <Link to="/login">{props.user===null?'Login':'Logout'}</Link>
            </Menu.Item>

        </Menu>
    )
}

export default Nav;