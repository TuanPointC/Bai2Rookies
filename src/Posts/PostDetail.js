import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spin, Table } from 'antd'
import axios from 'axios'
const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Body',
        dataIndex: 'body',
    },
];
const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res =>{
                setPost(res.data)
            })
                
    },[id])
    if (post === null) {

        return <Spin size="large" style={{ position: 'absolute', top: '50%', left: '50%', translate: '-50%,-50%' }} />
    }
    return (
        <Table columns={columns} dataSource={[post]} bordered style={{margin:'20px 0'}} pagination={false}/>
    )
}

export default PostDetail