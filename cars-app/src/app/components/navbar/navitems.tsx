import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyles from './menuStyles';
import { firebase } from '../../../firebase/firebase';
import 'firebase/compat/auth';

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `}
`;

const NavItem = styled.li<{ menu?: any }>`
    ${tw`
        text-sm
        md:text-base
        text-black
        font-bold
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `};
    ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`;

export  function NavItems() {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
    const SignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((re) => {
            console.log(re)
        })
        .catch((err) => {
            console.log(err)
        })

    }

    const SignOut = () => {
        firebase.auth().signOut();
    }

    const [isSingIn, setSingIn] = useState([] as any)
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            return setSingIn(user)
        }else{
            return setSingIn(false)
        }
    })

    if(isMobile)
        return (
            <Menu right styles={menuStyles}>
                <ListContainer>
                    <NavItem menu>
                        <a href="/">Accueil</a>
                    </NavItem>
                    <NavItem menu>
                        { isSingIn ? <a onClick={SignOut}>Déconnexion</a>: <a onClick={SignIn}>Connexion</a> }
                    </NavItem>
                    <NavItem menu>
                        { isSingIn ? isSingIn.displayName : null }
                    </NavItem>
                </ListContainer>
            </Menu>
        );

    return <ListContainer>
        <NavItem>
            <a href="/">Accueil</a>
        </NavItem>
            <NavItem>
                { isSingIn ? <a onClick={SignOut}>Déconnexion</a>: <a onClick={SignIn}>Connexion</a> }
            </NavItem>
        <NavItem>
            { isSingIn ? isSingIn.displayName : null}
        </NavItem>
    </ListContainer>
}
