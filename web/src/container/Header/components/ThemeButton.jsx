import React, { useState } from 'react'
import { animate, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { themeChoice } from '../../../features/theme'
import { useEffect } from 'react';

const localStorageTheme = localStorage.getItem('Theme');
const InitialTheme = (localStorageTheme === 'true');


export default function ThemeButton() {
    const dispatch = useDispatch(themeChoice);
    const [theme, setTheme] = useState(InitialTheme);
    const [changeTheme, setchangeTheme] = useState();

    useEffect(() => {
        setInterval(() => {
            const localStorageTheme = localStorage.getItem('Theme');
            const localTheme = (localStorageTheme === 'true');
            setchangeTheme(localTheme)
        }, 20)
    }, [])

    function handleTheme() {
        setTheme(!theme);
        dispatch(themeChoice(!theme));
        localStorage.setItem('Theme', JSON.stringify(!theme));
    }
    return (
        <div
            className='app__header-nav-toggle app__header-nav-toggle-bg'
            onClick={handleTheme}>
            <motion.div
                className='app__header-motion-bg'
                animate={{ x: changeTheme ? 30 : 0 }}
            >
            </motion.div>
        </div>

    )
}