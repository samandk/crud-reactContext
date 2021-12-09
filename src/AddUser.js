import React, {useContext, useState} from 'react'
import{ Form, 
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import {GlobalContext} from './Context/GlobalState';
import { v4 as uuid} from 'uuid';

const AddUser = () => {
    const {  addUser } = useContext(GlobalContext);
    const [name, setName] = useState('')
    const history = useHistory();

    const onSubmit = (e) =>{
        const newUser = {
            id:uuid(),
            name:name
        }
        addUser(newUser);
        history.push('/');

    }
    return (
        <Form onSubmit={onSubmit}>
            <Label>Add user</Label>
            <FormGroup>
                <Label>
                    Name
                </Label>
                <Input type ="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                 placeholder = "Enter Name" />
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
export default AddUser;