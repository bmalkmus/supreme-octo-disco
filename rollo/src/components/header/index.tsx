import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/Logo'

const NavContainter = styled.div`
    display: flex;
    width: 100%;
    justify-items: center;
    height: 64px;
    background-color: ${({ theme }) => theme.colors.primary};
`

const Title = styled.span`
    text-align: center;
    vertical-align: middle;
    width: 100%;
    font-size: 64px;
    font-weight: bold;
`

const Menu: React.FC = () => {
    return (
        <NavContainter>
            <Title>
                <Logo />
                Analytics United
                <Logo />
            </Title>
        </NavContainter>
    )
}

export default Menu