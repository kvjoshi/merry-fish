import React, { useState , useEffect } from 'react';
import { useAuth } from "../../contexts/AuthContext"
import firebase from "../../firebase";
import Prod_update from "../prod_update/prod_update";
import {useCollectionDataOnce} from "react-firebase-hooks/firestore";



function PlaceOrder(props) {
    const { currentUser, logout } = useAuth()
    const uid = currentUser.uid; //using as ref for other table from authcontext

    const [Product, setProduct] = useState([]);
    const [user, u_loading, u_error] = useCollectionDataOnce(firebase.firestore().collection('users').where('UUID','==',uid),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        });
    const [user_oid, set_user_oid] = useState();

    const [price, setPrice] = useState();
    const [code, setCode] = useState();
    const [qty, setQty] = useState();



    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("prod_list").get();
            setProduct(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        };
        fetchData();
    }, [Product]);



    useEffect(() => {
        if(u_loading === false ){
            set_user_oid(user[0]['current_order_id']);
            console.log('haliu');
            console.log(user);
        };

    }, [u_loading]);





    const onCreate = () => {
        console.log([price, code ,uid , qty]);
        let order_total = price * qty;
        let order_array = ['price: '+price,'code: '+code ,'qty: '+qty ,'order_total: '+order_total];
        const db = firebase.firestore();
        db.collection("order").update({order_array: order_array});

    }

    return (
        <>
            <div>

            <div>
                <h1>Place Order</h1>
            </div>

            <div>
                <ul className={'w-100'}>
                    {Product.map(Product => (
                        <li key={Product.id} className={'mt-2'}>

                            <span className={'col-4 p-2'}>Code: {Product.code}</span>
                            <span className={'col-4 p-2'}>Name: {Product.name}</span>
                            <span className={'col-4 p-2'}>Price: {Product.price}</span>
                            <div className={'row'}>
                               {/* <input type={'hidden'} value={Product.code}
                                       onChange={e => { setCode(e.target.value); }}/>
                                <input type={'hidden'} value={Product.price}
                                       onChange={e => { setPrice(e.target.value); }}/> */}
                            <input className={'col-8 mr-2'} type={'number'} onChange={e => { setQty(e.target.value); setCode(Product.code); setPrice(Product.price); }}/>
                            <button className={'col-3 btn btn-primary'} onClick={onCreate}>Place Order</button>
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
