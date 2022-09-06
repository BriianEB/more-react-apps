import styles from './Button.module.css';


function Button(props) {
    var type = props.type || 'button';

    return (
        <button
            className={styles.button}
            type={type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;
