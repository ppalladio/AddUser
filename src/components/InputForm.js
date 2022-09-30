import './InputForm.scss';

function InputForm(props) {
    return (
        <form action="submit">
            <div>
                <div>
                    <lable>Username</lable>
                    <input type="text" />
                </div>
                <div>
                    <label>Age(Years)</label>
                    <input type="number" min="0" step="1" />
                </div>
                <button type='submit'> Add User</button>
            </div>
        </form>
    );
}

export default InputForm;
