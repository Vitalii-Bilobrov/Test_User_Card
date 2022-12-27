import { Component } from 'react';
import { Container } from './Container/Container';
import { PictureBox } from './Picture/Picture';
import { Avatar } from './Avatar/Avatar';
import { Statistics } from './Statistics/Statistics';
export class App extends Component {
  render() {
    return (
      <>
        <Container>
          <PictureBox></PictureBox>
          <Avatar />
          <Statistics />
        </Container>
      </>
    );
  }
}
