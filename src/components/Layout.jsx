import { Outlet, Link } from "react-router-dom";
import checkmark from "../assets/checkmark.svg"

function Layout(){
    return (
        <main className="lg:max-w-180 w-full lg:w-screen lg:mx-auto min-h-screen lg:min-h-5 shadow-lg bg-slate-200 px-4 py-8 md:p-12 rounded-md lg:my-8 overflow-hidden">
            <Link to="/">
                <h1 className="mx-auto mb-10 flex justify-center items-center gap-2 text-3xl font-bold underline">
                    <img 
                        className="w-14 rounded-sm bg-orange-600 p-2" 
                        src={checkmark} 
                        alt="checkmark" 
                    />

                    My todo-list
                </h1>
            </Link>

            <div >
                <Outlet />
            </div>
        </main>
    )
}

export default Layout;