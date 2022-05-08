import React from 'react'
import styled from 'styled-components'

const NavContainter = styled.div`
    display: flex;
    width: 100%;
    height: 64px;
    background-color: pink;

`

const Menu: React.FC = () => {
    return (
        <NavContainter>
            <p>This is my Test</p>
        </NavContainter>
    )
}

export default Menu