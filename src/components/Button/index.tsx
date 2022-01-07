import styled from 'styled-components';


interface Props {
    outlined?: Boolean;
}

export default styled.button<Props>`
    
    background: ${(props) => props.outlined ? 'transparent' : 'var(--twitter)'} ;
    color: ${(props) => props.outlined ? 'var(--twitter)' : 'var(--white)'};
    border: ${(props) => props.outlined ? '1px solid var(--twitter)' : 'none'};
    
    padding: 16px;
    border-radius: 25px;

    font-weight: bold;
    cursor: pointer;
    font-size: 15px;
    outline: 0;

    &:hover{
        background: ${(props) => props.outlined 
        ? 'var(--twitter-dark-hover)' 
        : 'var(--twitter-light-hover)'} ;
    }
`;

