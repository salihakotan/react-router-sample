import axios from 'axios'
import {useEffect,useState} from 'react'
import { NavLink, Routes,Route } from 'react-router-dom'
import User from './User'

function Users() {
    

    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
   


    useEffect(()=> {
        axios("https://jsonplaceholder.typicode.com/users").then((res) => setUsers(res.data)).finally(()=> setLoading(false))
    },[])


  return (
    <div>
        <h1>Users</h1>
        {loading && <div>Loading...</div>}
        <ul>
          {
            users.map((user) => 
                <li key={user.id}>
                <NavLink activeClassName="active"  to={`user/${user.id}`}>{user.name}</NavLink>
            </li>
            )
          }
        </ul>


        <Routes>
            <Route exact path="/"/>
            
            <Route path={`user/:id`} element={<User/>} />
        </Routes>




    </div>

    
  )

  
}

export default Users