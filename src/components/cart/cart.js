import React, { useState , useEffect } from 'react';
import { useAuth } from "../../contexts/AuthContext"
import firebase from "firebase/app"

import {useDocumentDataOnce} from "react-firebase-hooks/firestore";
import Prod_update from "../prod_update/prod_update";





function Cart(user_oid) {
    const { currentUser, logout } = useAuth()
    const uid = currentUser.uid; //using as ref for other table from authcontext
    let o_id = user_oid.user_oid;

    const [orders, loading, error] = useDocumentDataOnce(firebase.firestore().doc("order/"+o_id),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        });
    const [ordtot, setOrdtot] = useState();
    const [price, setPrice] = useState();
    const [code, setCode] = useState();
    const [qty, setQty] = useState();
    const [pricearray,setPA] = useState([]);
    useEffect(() =>{
            console.log(orders)
    },[orders])




    return (
        <>
            <div>
                {orders && orders.price.map(price => (
                        <li key={price.id}>
                            <span>{price}</span>

                        </li>
                ))}

                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {loading && <span>Document: Loading...</span>}
            </div>

            {/*<div className={'row p-2'}>
                <div className={'col-4 p-2'}>
                    <input
                        className={'form-control'}
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div className={'row'}>
                    <button className={'btn btn-primary col-8 m-1'} onClick={onUpdate}>Update</button>
                    <button className={'btn btn-danger col-3  m-1'} onClick={onDelete}>Delete</button>
                </div>
            </div>*/}
        </>
    );
}

export default Cart;
