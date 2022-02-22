import React from 'react'
import styled from "styled-components" 
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <CustomMenu />
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0px;
  top: 0;
  left: 0;
  right: 0;

`

const Menu = styled.div `
 display: flex;
 text-align: center;
 justify-content: center;
 flex: 1;

 a {
   font-weight: 600;
   text-transform: uppercase;
   padding: 0 10px; 
   flex-wrap: no-wrap;
 }
  @media(max-width: 768px) { 
    display: none;
  }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

`
