import React, {useCallback, useEffect, useRef, useState} from 'react';


import DataTable from 'react-data-table-component';
import firebase from "../../firebase";


const columns = [
    {
        name: 'Title',
        selector: 'name',
        sortable: true,
        editable: true,
    },
    {
        name: 'Price',
        selector: 'price',
        sortable: true,
        editable: true,
    },
    {
        name: 'Prod ID',
        selector: 'code',
        sortable: true,
    },
];

const EditableCell = ({ row, index, column, col, onChange }) => {
    const [value, setValue] = useState(row[column.selector]);

    const handleOnChange = e => {
        setValue(e.target.value);
        onChange?.(e);
    };

    if (column?.editing) {
        return (
            <input
                type={column.type || 'text'}
                name={column.selector}
                style={{ width: '100%' }}
                onChange={handleOnChange}
                value={value}
            />
        );
    }

    if (col.cell) {
        return col.cell(row, index, column);
    }
    return row[column.selector];
};

export default function BasicTable(Product) {

    let data1 = Product.Product.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    console.log(data1);

    const [innerData, setInnerData] = useState(data1);
    const [editingId, setEditingId] = useState('');
    let formData = useRef({}).current;
    const isEditing = record => record.id === editingId;

    const formOnChange = event => {
        const nam = event.target.name;
        const val = event.target.value;

        formData = {
            ...formData,
            [nam]: val,
        };
    };

    const edit = record => {
        setEditingId(record.id);
    };

    const cancel = () => {
        setEditingId('');
    };

    const save = item => {
        const payload = { ...item, ...formData };
        const tempData = [...innerData];


        const index = tempData.findIndex(item => editingId === item.id);
        if (index > -1) {

            const item = tempData[index];
            tempData.splice(index, 1, {
                ...item,
                ...payload,
            });
            setEditingId('');
            setInnerData(tempData);
        }
    };

    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            cell: (row, index, column) => {
                const editing = isEditing(row);
                return (
                    <EditableCell
                        row={row}
                        index={index}
                        column={{ ...column, editing }}
                        col={col}
                        onChange={formOnChange}
                    />
                );
            },
        };
    });

    const createColumns = useCallback(() => {
        return [
            ...mergedColumns,
            {
                name: 'Actions',
                allowOverflow: true,
                minWidth: '200px',
                cell: row => {
                    const editable = isEditing(row);
                    if (editable) {
                        return (
                            <div>
                                <button type="button" onClick={() => save(row)} style={{ backgroundColor: 'lightgreen' }}>save</button>
                                <button type="button" onClick={cancel} style={{ backgroundColor: 'orangered' }}>cancel</button>
                            </div>
                        );
                    }
                    return <button type="button" onClick={() => edit(row)} style={{ backgroundColor: 'aliceblue' }}>edit</button>;
                },
            },
        ];
    }, [mergedColumns]);

    return (
        <DataTable
            title="Movie List"
            columns={createColumns()}
            data={innerData}
            defaultSortField="title"
        />
    );
};
