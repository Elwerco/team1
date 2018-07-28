import axios from 'axios';

export const addToCart = obj => ({
	type: 'ADD_TO_CART',
	payload: obj
});

export const removeFromCart = id => ({
	type: 'REMOVE_FROM_CART',
	payload: id
});

export function dispatchBooks() {
  return (dispatch, getState) => {
    let books = getState();
    alert('1');
    axios.post('asdfasdfasdf', {books: books})
 }
};