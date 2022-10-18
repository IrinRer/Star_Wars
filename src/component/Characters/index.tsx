import React from "react";
import Search from "./Search";
import styles from './index.module.scss';

const CharactersComponent = () => {
    return (
        <div className={styles.wrapper}>
            <Search/>
        </div>
    )
}

export default CharactersComponent