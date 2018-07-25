import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const BookCard = ({ title, author, price, image, id }) => (
	<Card>
	    <Image src={image} />
	    <Card.Content>
	      <Card.Header>
	      	<a href={id}>{title}</a>
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
  	</Card>
	);

export default BookCard;