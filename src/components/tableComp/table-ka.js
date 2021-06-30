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
import {useCollection, useCollectionOnce} from "react-firebase-hooks/firestore";

function EditingDemo(Product) {






   let dataArray = Product.Product.docs.map(doc => ({ ...doc.data(), id: doc.id }));
   console.log(dataArray);

    const tablePropsInit = {
        columns: [
            {key: 'name', title: 'Name', dataType: DataType.String, style: {width: '30%'}},
            {key: 'code', title: 'Code', dataType: DataType.String, style: {width: '40px'}},
            {key: 'price', title: 'Price', dataType: DataType.String, style: {width: '10%'}},

        ],
        format: ({column, value}) => {
            if (column.dataType === DataType.Date) {
                return value && value.toLocaleDateString('en', {month: '2-digit', day: '2-digit', year: 'numeric'});
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


    const [tableProps, changeTableProps] = useState(tablePropsInit);
    const dispatch = (action) => {
        changeTableProps((prevState) => kaReducer(prevState, action));
    };

            return (
                <Table
                    {...tableProps}
                    dispatch={dispatch}
                />

            )
}

export default EditingDemo;
