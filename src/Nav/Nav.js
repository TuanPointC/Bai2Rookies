import './Nav.scss'
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { HomeOutlined, ContainerOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';

const Nav = () => {
    return (
        <Menu mode="horizontal" theme="dark">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="posts" icon={<ContainerOutlined />}>
                <Link to="/posts">Posts</Link>
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
                <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="login" icon={<UsergroupAddOutlined />}>
                <Link to="/login">Login</Link>
            </Menu.Item>

        </Menu>
    )
}

export default Nav;