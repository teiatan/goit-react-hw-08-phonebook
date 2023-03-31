import { Div, Ul, MobileButton, Button } from "./UserMenu.styled"

export function UserMenu() {
    return (
        <Div>
            <MobileButton>mobile button</MobileButton>
            <Ul>
                <p>e-mail</p>
                <Button>sign out</Button>
            </Ul>
        </Div>
    )
}