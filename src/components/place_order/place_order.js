import React, { useState , useEffect } from 'react';
import { useAuth } from "../../contexts/AuthContext"
import firebase from "firebase/app"
import Cart from '../cart/cart.js';
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
    const [user_oid, set_user_oid] = useState();
    const [price, setPrice] = useState();
    const [code, setCode] = useState();
    const [p_name, setp_name] = useState();
    const [qty, setQty] = useState();

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
        let o_id = user_oid.toString();
        const db =  firebase.firestore().collection("order").doc(o_id);
        // const u_q= await db.update({timestamp: firebase.firestore.FieldValue.serverTimestamp()`})
        const update_query = await db.update({price: firebase.firestore.FieldValue.arrayUnion(price),code: firebase.firestore.FieldValue.arrayUnion(code),qty:firebase.firestore.FieldValue.arrayUnion(qty),order_total:firebase.firestore.FieldValue.arrayUnion(order_total),name:firebase.firestore.FieldValue.arrayUnion(p_name)});

    }

    return (
        <>
            <div>
                    <h5>Inside Cart Data:</h5>
                {user_oid &&
                < Cart user_oid={user_oid}></Cart>
                }
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
                            <input className={'col-8 mr-2'} type={'number'} onChange={e => { setQty(e.target.value); setCode(prod.code); setPrice(prod.price); setp_name(prod.name)}}/>
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
