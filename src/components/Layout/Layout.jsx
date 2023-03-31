import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Navigation } from "components/Navigation/Navigation"
import { Loader } from "components/Loader/Loader"
import { UserMenu } from "components/UserMenu/UserMenu"

export function Layout({children}) {

    return (
        <>
            <header>
                <Navigation /> 
                <UserMenu />
            </header>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
};