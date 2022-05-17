import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';
import User from './User';

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const { path, url } = useRouteMatch();
  

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .finally(() => setLoading(false));
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {loading && <span>Loading...</span>}
      <ul>
        {
          users.map(user => (
            <li key={user.id}>
              <NavLink activeClassName='aktif' to={`${url}/${user.id}`}>{user.name}</NavLink>
            </li>
          ))
        }
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a User.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User} />
      </Switch>
    </div>
  )
}

export default Users