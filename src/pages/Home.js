import React from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';
import { Alert } from '../components/Alert';

export const Home = () => {

    return (
        <div>
            <Alert />
            <Form />
            <Notes />
        </div>
    )
}