import axios from 'axios'
import { useEffect, useState } from 'react';
import {useRouteMatch,Link,Switch} from 'react-router-dom'
import { Table, Space,Button ,Input,Spin} from 'antd';
const { Column } = Table;
const { Search } = Input;


const Posts = () => {
    const [listPosts, setListPosts] = useState([])
    const [listPostsCopy,setListPostsCopy] =useState([])
    const [rowWasEntered,setRowWasEntered] = useState(null)
    let { path, url } = useRouteMatch();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setListPosts(res.data)
                setListPostsCopy(res.data)
            })
    }, [])

    const search =(value)=>{
        var listP = listPosts.filter(p=>p.title.indexOf(value)>-1)
        setListPostsCopy([...listP])
    
    }

    const remove =()=>{
        //delete listCopy
        var index = listPostsCopy.findIndex(p=>p.id===rowWasEntered)
        var newList = listPostsCopy
        newList.splice(index,1)
        setListPostsCopy([...newList])

        //delete original list
        var index1 = listPosts.findIndex(p=>p.id===rowWasEntered)
        var newList1 = listPosts
        newList.splice(index1,1)
        setListPosts([...newList1])

        //set rowWasEnterd increase 1
        setRowWasEntered(prev=>prev+1)

    }
    if(listPosts.length===0){
        return  <Spin size="large" style={{ position:'absolute',top:'50%',left:'50%',translate:'-50%,-50%' }}/>
    }
    return (
        <div>
            <Search placeholder="input search text"  enterButton style={{width:'200px', margin:'20px 0'}} onSearch={(event)=>search(event)}/>
            <Table 
                dataSource={listPostsCopy} 
                bordered 
                onRow={(record) => {
                    return {
                      onMouseEnter: () => {setRowWasEntered(record.id)}, // mouse enter row
                     
                    }}}
            >

                <Column title="Id" dataIndex="id" key={Math.random()}  />
                <Column title="Title" dataIndex="title" key={Math.random()} size="large" sorter={(a, b) => a.title.localeCompare(b.title) }/>
                <Column 
                    title="Actions"
                    align= 'right'
                    key={Math.random()}
                    size="small"
                    render={() => (
                        <Space size="large">
                             <Button type="primary"><Link to={`${url}/post`}>View detail</Link></Button>
                            <Button type="primary" danger onClick={()=>remove("id")}>Remove</Button>
                        </Space>
                    )}
                />
            </Table>,
        </div>
    )
}

export default Posts;