import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
    var [users, setUsers] = useState([]);

    function addUserHandler(user) {
        user.id = Math.random().toString();
        setUsers(function (prevUsers) {
            return [user, ...prevUsers];
        });
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={users}/>
        </div>
    );
}

export default App;
