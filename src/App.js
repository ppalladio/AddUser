import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/UserList';
function App() {
    let init = [{ name: 'Max', age: '31', id:'1' }];
    const [usersList, setUsersList] = useState(init);
    const addUserHandler = (username, age) => {
        setUsersList((prevState) => {
            return [
                ...prevState,
                { name: username, age: age, id:Math.random().toString() },
            ];
        });
    };
    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={usersList} />
        </div>
    );
}

export default App;
