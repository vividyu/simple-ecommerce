import './Item.css';
import { connect } from 'react-redux';
import { actions } from "../actions/actionCreator";
import { useState } from 'react';

function Item(props) {
    const product = props.product;
    const curUser = props.curUser;

    function handleAdd() {  
        props.addItem(curUser, product, 1);
    }

    return (
        <div>
            <img className="prod-image" src={product.image} alt={product.title}></img>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleAdd}>Add to Bag</button>
        </div>
    );
}

const mapStateToProps = (state) => (
    {
        curUser: state.curUser,
        userBag: state.userBag,
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (user, product, quantity) => dispatch(actions.addItem(user, product, quantity)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);