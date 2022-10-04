import { useState,useRef } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
//: refs is better when just reading a value while state is better for keylogger, it is called uncontrolled component if we use access values with ref 
function AddNewUser(props) {
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState()
    const usernameRef = useRef()
    const ageRef = useRef()
    const enteredUsername = usernameRef.current.value
    const enteredAge= ageRef.current.value
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
        // setEnteredUsername('');
        // setEnteredAge('');
        usernameRef.current.value=''
        ageRef.current.value='' //.rarely use refs to manipulate the DOM
    }

    // const usernameChangeHandler = (e) => {
    //     setEnteredUsername(e.target.value);
    // };

    // const ageChangeHandler = (e) => {
    //     setEnteredAge(e.target.value);
    // };

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
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={usernameRef}
                    />

                    <label htmlFor="age">Age(Years)</label>
                    <input
                        id="age"
                        type="number"
                        min="0"
                        step="1"
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageRef} //.add ref property to access useRef
                    />
                    <Button type="submit"> Add User</Button>
                </div>
            </form>
        </Card>
        </div>
    );
}
export default AddNewUser;
