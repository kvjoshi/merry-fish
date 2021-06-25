import React, {useMemo, useEffect, useState} from 'react';
import { useTable} from "react-table";
import {useCollectionOnce} from "react-firebase-hooks/firestore";
import firebase from "../../firebase";




export default function TableCompReact(Product) {


       /* const [value, loading, error] = useCollectionOnce(
        firebase.firestore().collection('prod_list'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );


    if(loading === 'false'){
        data = value.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    }

   console.log(loading);*/

    let data=Product.Product;
    // console.log(Product.Product)
    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Price',
                accessor: 'col2',
            },
            {
                Header: 'Code',
                accessor: 'col3',
            },
        ],
        [])
    const tableInstance = useTable({ columns, data })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })


    return (
        <>

            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    borderBottom: 'solid 3px red',
                                    background: 'aliceblue',
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '10px',
                                            border: 'solid 1px gray',
                                            background: 'papayawhip',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    );
}





