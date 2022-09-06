import styles from './AddUser.module.css';

import { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';


function AddUser(props) {
    var [username, setUsername] = useState('');
    var [age, setAge] = useState('');
    var [error, setError] = useState();

    function addUserHandler(event) {
        event.preventDefault();

        if (validateForm()) {
            props.onAddUser({
                name: username,
                age: age
            });
        }

        resetForm();
    }

    function resetForm() {
        setUsername('');
        setAge('');
    }

    function validateForm() {
        if (username === '') {
            setError({
                title: 'Invalid input',
                message: 'Please enter a name.'
            });

            return false;
        }

        if (age === '') {
            setError({
                title: 'Invalid input',
                message: 'Please enter an age.'
            });

            return false;
        }

        if (parseInt(age) < 0) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age.'
            });

            return false;
        }

        return true;
    }

    function usernameChangeHandler(event) {
        setUsername(event.target.value);
    }

    function ageChangeHandler(event) {
        setAge(event.target.value);
    }

    function errorHandler() {
        setError(null);
    }

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onClose={errorHandler}
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input
                        id="age"
                        type="number"
                        value={age}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;
