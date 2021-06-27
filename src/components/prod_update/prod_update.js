import React ,{useState} from 'react';
import firebase from 'firebase';
const Prod_update = ({ Product })=>{

    const [name, setName] = useState(Product.name);
    const [price, setPrice] = useState(Product.price);
    const [code, setCode] = useState(Product.code);

    const onUpdate = () => {
        const db = firebase.firestore()
        let updata = {name: name , code: code , price: price};
        db.collection('prod_list').doc(Product.id).set(updata)

    }

    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('prod_list').doc(Product.id).delete()

    }

    return (
        <>
            <div className={'row p-2'}>
            <div className={'col-4 p-2'}>
            <input
                className={'form-control'}
                value={name}
                onChange={e => {
                    setName(e.target.value);
                }}
            />
            </div>
            <div className={'col-4 p-2'}>
            <input
                className={'form-control'}
                value={code}
                onChange={e => {
                    setCode(e.target.value);
                }}
            />
            </div>
            <div className={'col-4 p-2'}>
            <input
                className={'form-control'}
                value={price}
                onChange={e => {
                    setPrice(e.target.value);
                }}
            />
            </div>
                <div className={'row'}>
            <button className={'btn btn-primary col-8 m-1'} onClick={onUpdate}>Update</button>
            <button className={'btn btn-danger col-3  m-1'} onClick={onDelete}>Delete</button>
                </div>
            </div>
        </>
    );
};
export default Prod_update;
