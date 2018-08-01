import React, { Component } from 'react';
import * as booksList from './books';
import { Icon, Container, Button, Item } from 'semantic-ui-react';
import Menu from '../containers/Menu';
import axios from 'axios';
import { Redirect } from 'react-router';
import  { connect } from 'react-redux';

class Zero extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isRedirect: false,
        };
        this.redirect = this.redirect.bind(this);
      }
        
    redirect(){
      this.setState({isRedirect: true});
    }

    state() {

    }

    render() {
      // const a = axios.get('/books.json')
      const a = booksList.default[0]
      const image = a.image;
      const title = a.title;
      const author = a.author;
      const price = a.price;
      const style = {
        first: {marginBottom: 10},
        second: {marginBottom: 10}
      }

      if (this.state.isRedirect) {
              return <Redirect to='/' />
          } 

      return(
        <div>
          <Container>
            <Menu></Menu>
            <Item.Group relaxed>
              <Item>
                <Item.Image size='large' src={image} />
                <Item.Content verticalAlign='top'>
                  <Item.Header style={style.second}>{title}</Item.Header>
                  <Item.Description style={style.first}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Item.Description>
                  <Item.Description style={style.first}>
                      <b>{author}</b>
                   </Item.Description>
                   <a>
                     <Icon name='rub' />
                     {price}
                   </a>
                   <Item.Description>
                      <Button onClick={this.redirect} color='green'>Вернуться к добавлению</Button>
                   </Item.Description>
                </Item.Content>

              </Item>
            </Item.Group>
          </Container>
          </div>
        );
    }
}


export default Zero;
