import { useDispatch, useSelector } from "react-redux"
import { Div, Ul, MobileButton, Button } from "./UserMenu.styled"
import { emailSelector, isRefreshingSelector, tokenSelector } from "redux/selectors";
import { getUserInfo, refreshUser, signOut } from "redux/auth/authOperations";
import { isLoggedInSelector } from "redux/selectors";
import { useEffect } from "react";


export function UserMenu() {

    

    const dispatch = useDispatch();
    const token = useSelector(tokenSelector);
    const isLoggedIn = useSelector(isLoggedInSelector);
    const isRefreshing = useSelector(isRefreshingSelector);
    //const email = useSelector(emailSelector);
/* 
    useEffect(()=>{
        dispatch(refreshUser(token))
    }, [dispatch, token]); */

    const onClick = () => {
        dispatch(signOut(token));
    };

    const hhhhh = () => {
        dispatch(refreshUser(token));
    };


    return (
        <>
        <button onClick={hhhhh}>test</button>
            {isLoggedIn && !isRefreshing &&
            <Div>
                <MobileButton>mobile button</MobileButton>
                <Ul>
                    <p>email</p>
                    <Button onClick={onClick}>sign out</Button>
                </Ul>
            </Div>}
        </>
    )
}