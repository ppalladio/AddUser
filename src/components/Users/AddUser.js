import { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
function AddNewUser(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState()
    function submitHandler(e) {
        e.preventDefault();
        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {setError({
            title: 'Invalid input',
            msg:' Please enter a valid name and age.',
        })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title:'Invalid age',
                msg: 'Please enter a valid age.',
            })
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const errorHandler = ()=>{ //. to close modal window
        setError(null)
    }
    return (
        //! props is anything passed from the parent component to the child component
        <div>
        {error &&<ErrorModal title={error.title} msg={error.msg} onClickDismiss={errorHandler}/>}
        <Card className={classes.input}>
            {/* //.className in card component as props.className*/}
            <form onSubmit={submitHandler}>
                <div>
                    <lable htmlFor="username">Username</lable>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />

                    <label htmlFor="age">Age(Years)</label>
                    <input
                        id="age"
                        type="number"
                        min="0"
                        step="1"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit"> Add User</Button>
                </div>
            </form>
        </Card>
        </div>
    );
}
export default AddNewUser;
