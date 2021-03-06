import React , { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
ListGroup,
ListGroupItem,
Button
} from 'reactstrap';
import {GlobalContext} from './Context/GlobalState';

 const UserList = () => {
     const { users, removeUser } = useContext(GlobalContext);
      console.log(users);
    return (
       <ListGroup className="mt-4">
           { 
           users.map((user) => {
            return(
                <ListGroupItem className="d-flex"> 
                    <strong>{user.name}</strong>
                    <div className="ml-auto">
                        <Link className="brn brn-warning mr-1" to={`/edit/${user.id}`}> Edit</Link>
                        <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
                    </div>
                </ListGroupItem>
            )
           })
           }

       </ListGroup>
    )
}
export default UserList;