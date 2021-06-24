import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from "../../firebase";
import Prod_entry from "../prod_entry/prod_entry";
import TableCompReact from "../tableComp/tableComp-react";
import EditingDemo from "../tableComp/table-ka"

export default function Prod_list() {
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

    return (
        <>
            <div>
        <div className={'row'}>
        <div className={'col-md-5'}>
            <input value={newProductName} onChange={e => setNewProductName(e.target.value)} />
            <button onClick={onCreate}>Create</button>
        </div>
        <div className={'col-md-7'}>
            <ul className={'w-100'}>
                {Product.map(Product => (
                    <li key={Product.name}>
                        <Prod_entry Product={Product} />
                        <span>Product Price : {Product.price}</span>
                        <span>Product Code : {Product.code}</span>

                    </li>
                ))}

            </ul>
        </div>
        </div>
        <div className={'row'}>
            <EditingDemo />
        </div>
        <div className={'row'}>
            <TableCompReact props={Product} />
        </div>
            </div>
        </>
    );
}
