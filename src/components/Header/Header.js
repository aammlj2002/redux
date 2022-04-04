import React from "react";

function Header() {
    return (
        <>
            <div>
                <nav className="bg-gray-800 shadow-md">
                    <div className="px-8 mx-auto max-w-7xl">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center justify-start w-full">
                                <a className="flex-shrink-0" href="/">
                                    <img
                                        className="w-8 h-8"
                                        src="./images/redux.png"
                                        alt="redux"
                                    />
                                </a>
                                <div className="block">
                                    <div className="flex items-baseline ml-10 space-x-4">
                                        <a
                                            className="px-3 py-2 text-sm font-medium text-gray-300 transition-all rounded-md hover:text-white"
                                            href="/"
                                        >
                                            Home
                                        </a>
                                        <a
                                            className="px-3 py-2 text-sm font-medium text-gray-300 transition-all rounded-md hover:text-white"
                                            href="/"
                                        >
                                            About
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
