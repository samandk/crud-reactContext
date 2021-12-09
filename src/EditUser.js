import React, {useContext, useState,useEffect} from 'react'
import{ Form, 
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import {GlobalContext} from './Context/GlobalState';
import { v4 as uuid} from 'uuid';


 const EditUser = (props) => {
    const { editUser, users } = useContext(GlobalContext);
    const [selectedUser, setSelectedUser] = useState({
      id: '',
      name: ''
    })
    const history = useHistory();
    const currentUserId = props.match.params.id;
  
    useEffect(() => {
      const userId = currentUserId;
      const selectedUser = users.find(user => user.id === Number(userId));
      setSelectedUser(selectedUser);
    }, [currentUserId, users])
  
    const onChange = (e) => {
      setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }
  
    const onSubmit = (e) => {
      e.preventDefault();
      editUser(selectedUser);
      history.push("/")
    }
    return (
        <Form onSubmit={onSubmit}>
        <Label>Edit user</Label>
        <FormGroup>
            <Label>
                Name
            </Label>
            <Input type ="text" 
            name="name"
            value={selectedUser.name}
            onChange={onChange}
            placeholder = "Enter Name" />
        </FormGroup>
        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
    )
}
export default EditUser;