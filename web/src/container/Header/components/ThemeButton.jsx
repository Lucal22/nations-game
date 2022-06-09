import React, { useState } from 'react'
import { animate, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { themeChoice } from '../../../features/theme'

export default function ThemeButton() {
    const dispatch = useDispatch(themeChoice);
    const [theme, setTheme] = useState(false);

    function handleTheme() {
        setTheme(!theme);
        dispatch(themeChoice(!theme));
    }
    return (
        <div
            className='app__header-nav-toggle app__header-nav-toggle-bg'
            onClick={handleTheme}>
            <motion.div
                className='app__header-motion-bg'
                animate={{ x: theme ? 30 : 0 }}
            >
            </motion.div>
        </div>

    )
}