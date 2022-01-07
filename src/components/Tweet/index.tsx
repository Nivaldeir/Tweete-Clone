import React from 'react';

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImgeContent,
    Icons,
    Status,
    CommentsIcon,
    RetweetIcon,
    LikeIcon
 } from './styles';

const Tweet: React.FC = () => {
  return(
    <Container>
        <Retweeted>
            <RocketseatIcon/>
            Você retweetou
        </Retweeted>

        <Body>
            <Avatar/>
            <Content>
                <Header>
                    <strong>Rocketset</strong>
                    <p>@rocketset</p>
                    <Dot/>
                    <time>27 de jun</time>
                </Header>

                <Description>Foguete nao tem ré</Description>
                <ImgeContent/>
                <Icons>
                    <Status>
                        <CommentsIcon/>
                        18
                    </Status>

                    <Status>
                        <RetweetIcon/>
                        8
                    </Status>

                    <Status>
                        <LikeIcon/>
                        18
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>);
}

export default Tweet;