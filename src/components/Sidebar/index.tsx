import React from 'react';

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import Neews from '../Neews'

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
 } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter"/>
            <SearchIcon/>
        </SearchWrapper>

        <Body>
            <List 
              title="Talvez você curta"
              elements={[
                <FollowSuggestion
                  name="Nivaldeir Silva"
                  nickname="@nivaldeir"
                />,
                <FollowSuggestion
                  name="Nivaldeir Silva"
                  nickname="@nivaldeir"
                />,
                <FollowSuggestion
                  name="Nivaldeir Silva"
                  nickname="@nivaldeir"
                />
              ]}

            />
            <List 
              title="Talvez você curta"
              elements={[
                <Neews />,
                <Neews />,
                <Neews />,
              ]}
            />
            <List 
              title="Talvez você curta"
              elements={[
                <Neews />,
                <Neews />,
                <Neews />,
              ]}
            />
            <List 
              title="Talvez você curta"
              elements={[
                <Neews />,
                <Neews />,
                <Neews />,
              ]}
            />
        </Body>
    </Container>
  );
}

export default Sidebar;