import { useDispatch, useSelector } from "react-redux"
import { Div, Ul, MobileButton, Button } from "./UserMenu.styled"
import { tokenSelector } from "redux/selectors";
import { signOut } from "redux/auth/authOperations";
import { isLoggedInSelector } from "redux/selectors";


export function UserMenu() {

    const dispatch = useDispatch();
    const token = useSelector(tokenSelector);
    const isLoggedIn = useSelector(isLoggedInSelector);

    const onClick = () => {
        dispatch(signOut(token));
    }


    return (
        <>
            {isLoggedIn && 
            <Div>
                <MobileButton>mobile button</MobileButton>
                <Ul>
                    <p>e-mail</p>
                    <Button onClick={onClick}>sign out</Button>
                </Ul>
            </Div>}
        </>
    )
}