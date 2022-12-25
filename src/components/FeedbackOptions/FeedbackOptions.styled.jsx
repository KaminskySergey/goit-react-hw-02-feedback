import styled from '@emotion/styled'

export const ListButton = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;

`

export const ItemButton = styled.li`
    :not(:last-child){
        margin-right: 16px;
    }

`

export const Button = styled.button`
    cursor: pointer;
    border: 2px solid black;
    border-radius: 4px;
    padding: 10px;
    transition: all 250ms;
    :hover, :focus {
        background-color: #07c;
        
    }

`