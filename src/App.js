import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';

function App() {
    let init = [{name:'Max', age:'(31 years old)'}];
    // const [users, setUsers] = useState(init)
    return (
        <div>
            <AddUser />
        </div>
    );
}

export default App;
