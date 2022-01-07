import React from 'react';
import { Container, Wrapper } from './styles';
import Main from '../main'
import MenuBar from '../MenuBar'
import Sidebar from '../Sidebar'

const components: React.FC = () => {
  return (
    <Container>
        <Wrapper>
           <MenuBar/>
            <Main/>
            <Sidebar/>
        </Wrapper>
    </Container>
  );
}

export default components;