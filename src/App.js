import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/UserList';
function App() {
    let init = [{ name: 'Max', age: '(31 years old)' }];
    // const [users, setUsers] = useState(init)
    return (
        <div>
            <AddUser />
            <UserList users={init} />
        </div>
    );
}

export default App;
