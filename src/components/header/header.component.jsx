import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CardIcon from '../card-icon/card-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContianer, OptionsContianer, OptionLink } from './header.styled';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContianer className='logo-container' to='/' >
                <Logo className='logo' />
            </LogoContianer>
            <OptionsContianer >
                <OptionLink to='/shop' >SHOP</OptionLink>
                <OptionLink to='/shop'>CONTACT </OptionLink>
                {
                    currentUser ?
                        <OptionLink as  = 'div' onClick={() => auth.signOut()} >
                            SignOut
                        </OptionLink> : <OptionLink to='/signin'>SignIn</OptionLink>
                }
                <CardIcon />
            </OptionsContianer>

            {
                hidden ? null : <CartDropdown />
            }

        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({

    currentUser: selectCurrentUser,
    hidden: selectCartHidden


})



export default connect(mapStateToProps)(Header);