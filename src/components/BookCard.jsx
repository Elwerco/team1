import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const BookCard = book => {
	const { title, author, price, image, id1, addToCart, addedCount } = book;



	return (
	<Card>
	    <Image src={image} />
	    <Card.Content>
	      <Card.Header>
	      	<a href={id1}>{title}</a>
	      </Card.Header>
	      <Card.Meta>
	      	<span className='date'>
	      		{author}
	      	</span>
	      </Card.Meta>
	    </Card.Content>
	    <Card.Content extra>
	      <a>
	        <Icon name='rub' />
	        {price}
	      </a>
	    </Card.Content>
	   	<Button onClick={addToCart.bind(this, book)}>
	   	Добавить в корзину {addedCount > 0 && `(${addedCount})`}</Button>
  	</Card>
  	)
};

export default BookCard;