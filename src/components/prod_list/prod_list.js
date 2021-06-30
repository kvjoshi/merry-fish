import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from "firebase/app";
import Prod_update from "../prod_update/prod_update";
import TableCompReact from "../tableComp/tableComp-react";
import BasicTable from '../tableComp/tableComp-datatable'
import EditingDemo from "../tableComp/table-ka"
import {useCollectionOnce} from "react-firebase-hooks/firestore";

export default function Prod_list() {
    const { currentUser, logout } = useAuth()

    // const [Product, setProduct] = useState([]);
    const [newProductName, setNewProductName] = useState();
    const [newProductPrice, setNewProductPrice] = useState();
    const [newProductCode, setNewProductCode] = useState();


    //this is react-firebase-hook works but have to async it somehow
     const [Product, prod_loading, prod_error] = useCollectionOnce(
        firebase.firestore().collection('prod_list'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    // console.log(value.docs.map(doc => ({ ...doc.data(), id: doc.id })));


    // this is custom firebase get data it works
   /* useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("prod_list").get();
            setProduct(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, [Product]);*/

    useEffect(() => {
        console.log('0');
    }, [Product]);

    const onCreate = () => {
        const db = firebase.firestore();
        db.collection("prod_list").add({ name: newProductName , price: newProductPrice ,code: newProductCode  });
        // db.collection("prod_list").add({ price: newProductPrice });
    };

    return (
        <>
            <div>
                <div className={'row'}>
                    <p>
                        <strong>UUID: {currentUser.uid} </strong>
                    </p>
                </div>

                    {/*Create New Product Code Here*/}
                    <div className={'row p-5 mb-2'}>
                        <input className={'form-control mt-2'} value={newProductCode} onChange={e => setNewProductCode(e.target.value)} placeholder={'New Product Code'}/>
                        <input className={'form-control mt-2'} value={newProductName} onChange={e => setNewProductName(e.target.value)}  placeholder={'New Product Name'}/>
                        <input className={'form-control mt-2'} value={newProductPrice} onChange={e => setNewProductPrice(e.target.value)}  placeholder={'New Product Price'}/>
                        <button className={'btn btn-primary mt-2'} onClick={onCreate}>Create</button>
                    </div>
                    {/*Below Code To Update product*/}
                    <div className={'row'}>
                        <ul className={'w-100'}>
                            {Product && Product.docs.map(Product => (
                                <li key={Product.id}>
                                    <Prod_update Product={Product} />
                                </li>
                            ))}
                        </ul>
                    </div>

                <div className={'row p-2'}>
                    <span>Ka-Table blank array</span>
                    {Product &&  <EditingDemo Product={Product}/> }
                </div>
                <div className={'row p-2'}>
                    <span>react-table blank array</span>

                    <TableCompReact  Product={Product}/>

                </div>
                <div className={'row p-2'}>
                    <span>react-data-table blank array</span>
                    <BasicTable Product={Product} />
                </div>
            </div>
        </>
    );
}
