import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll' 

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 888;
    width: 100%;
    height: 100%; 
    background-color: #0d0d0d;
    align-items: center;
    left: 0;
    transition: all .3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;

`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 768px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-out all;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #01bf71;
    }
`

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: .2s;
    text-decoration: none;

    &:hover{
        background: #fff;
    }

`