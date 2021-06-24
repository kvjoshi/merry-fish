import React, { useRef, useState, useEffect } from "react"
import "ka-table/style.css"
import { ITableProps, kaReducer, Table } from 'ka-table';
import {
    hideLoading,
    loadData,
    setSingleAction,
    showLoading,
    updateData,
    updatePagesCount
} from "ka-table/actionCreators";
import { DataType, EditingMode } from 'ka-table/enums';
import { DispatchFunc } from 'ka-table/types';
import firebase from "../../firebase";

const dataArray = [
    { id: 1, name: 'Mike Wazowski', score: 80, passed: true },
    { id: 2, name: 'Billi Bob', score: 55, passed: false, nextTry: new Date(2021, 10, 8, 10) },
    { id: 3, name: 'Tom Williams', score: 45, passed: false, nextTry: new Date(2021, 11, 8, 10) },
    { id: 4, name: 'Kurt Cobain', score: 75, passed: true },
    { id: 5, name: 'Marshall Bruce', score: 77, passed: true },
    { id: 6, name: 'Sunny Fox', score: 33, passed: false, nextTry: new Date(2021, 10, 9, 10) },
];

export function GetData() {
    const [Product, setProduct] = useState([]);
    const [newProductName, setNewProductName] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("prod_list").get();
            setProduct(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);
    const onCreate = () => {
        const db = firebase.firestore();
        db.collection("prod_list").add({ name: newProductName });

    };
    return Product;
}

const tablePropsInit = {
    columns: [
        { key: 'name', title: 'Name', dataType: DataType.String, style: { width: '30%' } },
        { key: 'score', title: 'Score', dataType: DataType.Number, style: { width: '40px' } },
        { key: 'passed', title: 'Passed', dataType: DataType.Boolean, style: { width: '10%' }},
        {
            dataType: DataType.Date,
            key: 'nextTry',
            title: 'Next Try',
        },
    ],
    format: ({ column, value }) => {
        if (column.dataType === DataType.Date){
            return value && value.toLocaleDateString('en', { month: '2-digit', day: '2-digit', year: 'numeric' });
        }
    },
    data: dataArray,
    editableCells: [{
        columnKey: 'name',
        rowKeyValue: 2,
    }],
    editingMode: EditingMode.Cell,
    rowKeyField: 'id',
};

const EditingDemo = () => {

    const [tableProps, changeTableProps] = useState(tablePropsInit);
    const dispatch = (action) => {
        changeTableProps((prevState) => kaReducer(prevState, action));
    };

    return (
        <Table
            {...tableProps}
            dispatch={dispatch}
        />
    );
};

export default EditingDemo;
