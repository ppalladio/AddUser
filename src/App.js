import React, { useState } from 'react';
import UserList from './components/UserList';

function App() {
    let init = [{name:'Max', age:'(31 years old)'}];
    const [users, setUsers] = useState(init)
    return (
        <div>
            <UserList />
        </div>
    );
}

export default App;
