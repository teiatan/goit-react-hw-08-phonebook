import { useDispatch, useSelector } from "react-redux"
import { Div, Ul, MobileButton, Button } from "./UserMenu.styled"
import { emailSelector, tokenSelector } from "redux/selectors";
import { signOut } from "redux/auth/authOperations";
import { isLoggedInSelector } from "redux/selectors";


export function UserMenu() {

    const dispatch = useDispatch();
    const token = useSelector(tokenSelector);
    const isLoggedIn = useSelector(isLoggedInSelector);
    const email = useSelector(emailSelector);

    const onClick = () => {
        dispatch(signOut(token));
    }


    return (
        <>
            {isLoggedIn && 
            <Div>
                <MobileButton>mobile button</MobileButton>
                <Ul>
                    <p>{email}</p>
                    <Button onClick={onClick}>sign out</Button>
                </Ul>
            </Div>}
        </>
    )
}