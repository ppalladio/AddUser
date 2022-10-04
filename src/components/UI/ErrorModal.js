import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
function ErrorModal(props) {
    return (
        <div className={classes.backdrop}>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.msg}</p>
            </div>
            <footer className={classes.actions}>
                <Button>oopsy</Button>
            </footer>
        </Card>
        </div>
    );
}

export default ErrorModal;
