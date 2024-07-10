import React, {ReactNode} from "react";
import Header from "@/layout/header";
import {ToastContainer} from "react-toastify";

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <main>
            <Header></Header>
            <div className="container mx-auto px-4">
                <div className="max-w-screen-xl flex flex-wrap items-center mx-auto py-4">
                    {children}
                </div>
            </div>
        </main>
)
}

export {
    Layout
};
