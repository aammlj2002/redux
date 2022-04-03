import React from "react";

function Header() {
    return (
        <>
            <div>
                <nav className="bg-gray-800  shadow-md">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="w-full justify-start flex items-center">
                                <a className="flex-shrink-0" href="/">
                                    <img
                                        className="h-8 w-8"
                                        src="./images/redux.png"
                                        alt="redux"
                                    />
                                </a>
                                <div className="block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <a
                                            className="text-gray-300 transition-all hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            href="/"
                                        >
                                            Home
                                        </a>
                                        <a
                                            className="text-gray-300 transition-all hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
