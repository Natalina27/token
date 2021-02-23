// Core
import {useEffect, useState} from 'react';

// Api
import { api } from './api';

export const useApiLoader = () => {
    console.log('login')
    const [db, setDb] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await api.getUserData.fetch();
            const data = await response.json();
            console.log('data', data)

            setDb(data);
        })();
    }, []);

    return {db}

}