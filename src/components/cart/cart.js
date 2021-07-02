import React, { useState , useEffect } from 'react';
import { useAuth } from "../../contexts/AuthContext"
import firebase from "firebase/app"

import {useDocumentDataOnce} from "react-firebase-hooks/firestore";




function Cart(user_oid) {
    const { currentUser, logout } = useAuth()
    const uid = currentUser.uid; //using as ref for other table from authcontext

    let o_id = user_oid.user_oid;


    const [orders, loading, error] = useDocumentDataOnce(firebase.firestore().doc("order/"+o_id),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        });
    useEffect(() =>

    console.log(orders )
        ,[orders])

    //
    // const [price, setPrice] = useState();
    // const [code, setCode] = useState();
    // const [qty, setQty] = useState();




    return (
        <>
            <div>
                <span>{orders && <span>Document: {JSON.stringify(orders)}</span>}</span>
                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {loading && <span>Document: Loading...</span>}
            </div>
        </>
    );
}

export default Cart;
