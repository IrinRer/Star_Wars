import React from "react";
import Search from "./Search";
import styles from './index.module.scss';
import Card from "./Card";

const CharactersComponent = () => {
    return (
        <div className={styles.wrapper}>
            <Search/>
            <Card/>
        </div>
    )
}

export default CharactersComponent