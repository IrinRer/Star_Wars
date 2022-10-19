import React from "react";
// import Filter from "component/Filter";
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