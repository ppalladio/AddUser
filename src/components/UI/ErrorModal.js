import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
    return <div
            onClick={props.onClickDismiss}
            className={classes.backdrop}
        />
};


const ModalOverlay = (props) => {
    return (
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
    );
};
function ErrorModal(props) {
    return (
    <> 
    ReactDOM.createPortal(<Backdrop onClickDismiss={props.onClickDismiss} />,document.getElementById('backdrop-root'))
    {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          msg={props.msg} //! use the same variable name as the props.variable name
          onClickDismiss={props.onClickDismiss} 
        />,
        document.getElementById('overlay-root')
      )}
    </>);
}

export default ErrorModal;
