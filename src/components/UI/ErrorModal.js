import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
function ErrorModal(props) {
    return (
        <div onClick={props.onClickDismiss} className={classes.backdrop}>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.msg}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onClickDismiss}>oopsy</Button> 
                {/* //: the place where we want to click and close the modal */}
            </footer>
        </Card>
        </div>
    );
}

export default ErrorModal;
