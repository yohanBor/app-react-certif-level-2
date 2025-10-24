import Title from "@/components/Title";
import { Outlet } from "react-router"

const Layout = () => {
    return (
        <div className="p-20">
            <Title title='QUIZ MAKER' />
            <Outlet />
        </div>
    )
}

export default Layout;