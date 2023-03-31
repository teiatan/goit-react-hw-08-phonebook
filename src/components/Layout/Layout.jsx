import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Navigation } from "components/Navigation/Navigation"
import { Loader } from "components/Loader/Loader"
import { UserMenu } from "components/UserMenu/UserMenu"
import { Header } from "components/Header/Header"

export function Layout({children}) {

    return (
        <>
            <Header>
                <Navigation /> 
                <UserMenu />
            </Header>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
};