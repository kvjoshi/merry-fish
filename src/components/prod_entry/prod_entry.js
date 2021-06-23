import React ,{useState} from 'react';
import firebase from 'firebase';
const Prod_entry = ({ Product })=>{

    const [name, setName] = React.useState(Product.name);

    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('prod_list').doc(Product.id).set({...Product, name})
    }

    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('prod_list').doc(Product.id).delete()
    }

    return (
        <>
            <input
                value={name}
                onChange={e => {
                    setName(e.target.value);
                }}
            />
            <button onClick={onUpdate}>Update</button>
            <button onClick={onDelete}>Delete</button>
        </>
    );
};
export default Prod_entry;
