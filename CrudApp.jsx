import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso"
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragon"
    },
    {
        id: 3,
        name: "Shun",
        constellation: "Andromeda"
    },
    {
        id: 4,
        name: "Ikki ",
        constellation: "Fenix "
    },
    {
        id: 5,
        name: "Hyoga",
        constellation: "Cisne"
    }
];
export const CrudApp = () => {
    const [bd, setBd] = useState(initialDb);
    //Esta variable nos va a permitir si estamos en un proceso de insercion o actuallizacion.
    //cuando este null,significa que vamos hacer una insercion y cuando este true actualización.
    const [dataToEdit, setDataToEdit] = useState(null);
    const createData = (data) => {
        data.id = Date.now();//esta es la anera de obtener un numero aleatorio unico.
        // console.log(data)
        setBd([...bd, data]);
    };

    const updateData = (data) => {
        let newData = bd.map(el => el.id === data.id ? data : el);
        setBd(newData);
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el id '${id}'?`)
        if (isDelete) {
            let newData = bd.filter(el => el.id !== id);
            setBd(newData)
        } else {
            return;
        }
    };


    return (
        <div>
            <h2>Crud App</h2>
            <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
            <CrudTable
                data={bd}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
            />
        </div>
    )
};
