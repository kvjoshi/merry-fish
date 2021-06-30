import React, { useState , useEffect } from 'react';
import { useAuth } from "../../contexts/AuthContext"
import firebase from "firebase/app"

import {useCollectionDataOnce} from "react-firebase-hooks/firestore";




function PlaceOrder(props) {
    const { currentUser, logout } = useAuth()
    const uid = currentUser.uid; //using as ref for other table from authcontext

    const [Product, setProduct] = useState([]);
    const [user, u_loading, u_error] = useCollectionDataOnce(firebase.firestore().collection('users').where('UUID','==',uid),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        });
    const [prod, prod_loading, prod_error] = useCollectionDataOnce(firebase.firestore().collection('prod_list'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        });
    const [user_oid, set_user_oid] = useState('not_set');

    const [price, setPrice] = useState();
    const [code, setCode] = useState();
    const [qty, setQty] = useState();

    let read_count = 0;

    /*useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("prod_list").get();
            setProduct(data.docs.map(doc => ({...doc.data(), id: doc.id})));

        };
        fetchData();
    }, [Product]);*/



    useEffect(() => {
        if(u_loading === false ){
            set_user_oid(user[0]['current_order_id']);
            console.log('haliu');
            console.log(user);
            console.log(prod)

        };

    }, [prod]);





    async function onAddToCart() {
        console.log([price, code ,uid , qty]);
        let order_total = price * qty;
        // cannot do array in array
        // let order_array = ['price: '+price,'code: '+code ,'qty: '+qty ,'order_total: '+order_total];
        // let o_price = [price];
        // let o_code = [price];
        // let o_qty = [qty];
        // let o_order_total = [order_total];
        // no need to make it value array , string can be also added
        // const admin = require('firebase-admin');
        let o_id = user_oid.toString();
        const db =  firebase.firestore().collection("order").doc(o_id);
        // const u_q= await db.update({timestamp: firebase.firestore.FieldValue.serverTimestamp()`})

       const update_query = await db.update({price: firebase.firestore.FieldValue.arrayUnion(price),code: firebase.firestore.FieldValue.arrayUnion(code),qty:firebase.firestore.FieldValue.arrayUnion(qty),order_total:firebase.firestore.FieldValue.arrayUnion(order_total)});

    }

    return (
        <>
            <div>

            <div>
                <h1>Place Order</h1>
            </div>

            <div>
                <ul className={'w-100'}>
                    {prod && prod.map(prod => (
                        <li key={prod.code} className={'mt-2'}>

                            <span className={'col-4 p-2'}>Code: {prod.code}</span>
                            <span className={'col-4 p-2'}>Name: {prod.name}</span>
                            <span className={'col-4 p-2'}>Price: {prod.price}</span>
                            <div className={'row'}>

                            <input className={'col-8 mr-2'} type={'number'} onChange={e => { setQty(e.target.value); setCode(prod.code); setPrice(prod.price); }}/>
                            <button className={'col-3 btn btn-primary'} onClick={onAddToCart}>Place Order</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            </div>
        </>
    );
}

export default PlaceOrder;
