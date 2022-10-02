import classess from './Button.module.css';

function Button(props) {
    return (
        <button
            className={`${classess.button}`}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;
