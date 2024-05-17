import { useState, useEffect } from 'react';
import axios from 'axios';


const useAPI = endpoint => {
    const [data, setData] = useState([])

    const getData = async () => {

        try {
           const response = await axios.get(endpoint)
            setData(response.data)
        }
        catch (error) {
            console.log(error)
        }
        
    }


    useEffect(() => {
        getData()
    }, [])

    return data;
}

export default useAPI