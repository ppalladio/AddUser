import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
function AddNewUser(props) {
    function submitHandler(e) {
        e.preventDefault();
        const username = e.target[0].value;
        const age = e.target[1].value;
    }
    return (//! props is anything passed from the parent component to the child component
        <Card className={classes.input}>
            {/* //.className in card component as props.className*/}
            <form onSubmit={submitHandler}>
                <div>
                    <lable htmlFor="username">Username</lable>
                    <input id="username" type="text" />

                    <label>Age(Years)</label>
                    <input id="age" type="number" min="0" step="1" />
                    <Button type="submit"> Add User</Button>
                </div>
            </form>
        </Card>
    );
}
export default AddNewUser;
