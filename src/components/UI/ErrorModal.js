import styles from './ErrorModal.module.css';

import Card from './Card';
import Button from './Button';


function ErrorModal(props) {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onClose}></div>
            <Card className={styles.modal}>
                <div className={styles.header}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        {props.message}
                    </p>
                </div>
                <div className={styles.actions}>
                    <Button onClick={props.onClose}>Okay</Button>
                </div>
            </Card>
        </div>
    );
}

export default ErrorModal;
