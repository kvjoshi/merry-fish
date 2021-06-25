import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from "../../firebase";
import Prod_entry from "../prod_entry/prod_entry";
import TableCompReact from "../tableComp/tableComp-react";
import BasicTable from '../tableComp/tableComp-datatable'
import EditingDemo from "../tableComp/table-ka"
import {useCollection} from "react-firebase-hooks/firestore";

export default function Prod_list() {
    const [Product, setProduct] = useState([]);
    const [newProductName, setNewProductName] = useState();
    const [value, loading, error] = useCollection(
        firebase.firestore().collection('prod_list'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    const[Val1,setVal1] = useState([]);
    // console.log(value.docs.map(doc => ({ ...doc.data(), id: doc.id })));



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

    return (
        <>
            <div>
                <div className={'row'}>
                    <p>
                        {/*{value && (
                            <span>
                                {value.docs.map((doc) => (
                                    <React.Fragment key={doc.id}>
                                        {JSON.stringify(doc.data())},{' '}
                                    </React.Fragment>
                                ))}
                            </span>
                        )}*/}
                    </p>
                </div>
                <div className={'row'}>
                    <div className={'col-md-5'}>
                        <input value={newProductName} onChange={e => setNewProductName(e.target.value)} />
                        <button onClick={onCreate}>Create</button>
                    </div>
                    <div className={'col-md-7'}>
                        <ul className={'w-100'}>
                            {Product.map(Product => (
                                <li key={Product.id}>
                                    <Prod_entry Product={Product} />
                                    <span>Product Price : {Product.price}</span>
                                    <span>Product Code : {Product.code}</span>

                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                <div className={'row'}>
                    <EditingDemo Product={Product}/>
                </div>
                <div className={'row'}>
                    <TableCompReact Product={Product} />
                </div>
                <div className={'row'}>
                    <BasicTable Product={Product} />
                </div>
            </div>
        </>
    );
}
