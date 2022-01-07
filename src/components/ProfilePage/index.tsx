import React from 'react';
import Feed from '../Feed'

import { 
    Container,
    Banner, 
    Avatar, 
    ProfileDate, 
    Followage, 
    EditButton,
    LocationIcon, 
    CakeIcon } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileDate>
            <EditButton outlined>Editar perfil</EditButton>
            <h1>Nivaldeir Silva</h1>
            <h2>@nivaldeir</h2>
            <p>
                Developer at <a href='#'>@Rocketset</a>
            </p>
            <ul>
                <li>
                    <LocationIcon/>
                    São Paulo, Brazil
                </li>
                <li>
                    <CakeIcon/>
                    Nascido em 21 de Feveiro de 2000
                </li>
            </ul>
            
            <Followage>
                <span>
                    Seguindo <strong>94</strong>
                </span>               
                <span>
                   <strong>940 </strong> Seguidores 
                </span>
            </Followage>
        </ProfileDate>
        <Feed />
    </Container>
  );
}

export default ProfilePage;