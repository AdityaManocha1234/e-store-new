import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import {
  NavigationContainer,
  NavLinksContainer,
  DisplayUser,
  LogoContainer,
  NavLink,
} from "./navigation.styles";
import { ReactComponent as USlogo } from "../../assets/reshot-icon-app-store-TDS9KQW7E4.svg"
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <USlogo className="logo" />
          <p style={{fontSize:'10px',marginTop:'0.5px',marginLeft:'32px',fontWeight:'bold'}}>Be Fashionable</p>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? <NavLink to="/orders">ORDERS</NavLink> : <Fragment />}
          {currentUser ? (
            <NavLink as="span" onClick={signOutAuthUser}>
              LOG OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN UP</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <DisplayUser>
        Hello ,
        {currentUser && currentUser.displayName
          ? currentUser.displayName
          : currentUser
          ? currentUser.email.split("@")[0]
          : "User"}
      </DisplayUser>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
