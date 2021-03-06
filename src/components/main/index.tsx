import React from 'react';
import ProfilePage from '../ProfilePage'
import {
    Container,
    Header,
    BackIcon,
    ProfileInfo,
    BottomMenu,
    HomeIcon,
    SearchIcon,
    BellIcon,
    EmailIcon,
  } from './styles';

const main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon/>
              </button>
              <ProfileInfo>
                  <strong>
                      Nivaldeir
                  </strong>
                  <span> 652 Tweets</span>
              </ProfileInfo>
          </Header>
          <ProfilePage />
            <BottomMenu>

                <HomeIcon className='active'/>
                <SearchIcon/>
                <BellIcon/>
                <EmailIcon/>

            </BottomMenu> 
      </Container>
  );
}

export default main;