/** @format */
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import ThemeToggle from '../Elements/ThemeToggle';

export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [ThemeMode, toggleTheme] = useTheme();
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header>
            <nav className='bg-white border-gray-200 dark:bg-gray-900'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5'>
                    <Link to='/' className='flex items-center'>
                        <img
                            src={Logo}
                            className='h-6 mr-3 sm:h-9'
                            alt='CodeBook Logo'
                        />
                        <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                            쇼핑몰
                        </span>
                    </Link>
                    <div className='flex items-center'>
                        <span
                            onClick={() => setDarkMode(!darkMode)}
                            className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-fill'
                        ></span>
                        <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search'></span>
                        <Link
                            to='/cart'
                            className='text-gray-700 dark:text-white mr-5'
                        >
                            <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-cart3 relative'>
                                <span className='text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full '>
                                    1
                                </span>
                            </span>
                        </Link>

                        <span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-heart'></span>
                    </div>
                </div>
            </nav>
            <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
                DarkMode
            </ThemeToggle>
        </header>
    );
};
