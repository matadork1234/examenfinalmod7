import React, { useState, useMemo } from 'react'
import { Button, TextField } from '@mui/material'
import './ExampleUseMemo.css'

interface DataUser {
    name: string
}


const ExampleUseMemo = () => {

    const [value, setValue] = useState<string>('');
    const [data, setData] = useState<DataUser[]>([]);

    const filteredData = useMemo(() => {
        // Esta función se llamará solo cuando cambie el valor de 'data' o 'value'
        return data.filter(item => item.name.includes(value));
    }, [data, value]);

    const handleInputChange = (event: any) => {
        setValue(event.target.value);
    };

    const handleDataUpdate = (newData: any) => {
        setData(newData);
    };
    return (
        <>
            <div>
                <TextField id="outlined-basic" label="Filtrar" variant="outlined" value={value} onChange={handleInputChange } color={'secondary'} className="inputFilter" />
            </div>
            <Button variant='contained' onClick={() => handleDataUpdate([{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }])}>Actualizar datos</Button>
            <ul>
                {filteredData.map(item => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default ExampleUseMemo