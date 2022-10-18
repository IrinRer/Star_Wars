import React from "react";
import styles from './index.module.scss';

const Search = () => {
    return (
        <div>
            <p className={styles.title}><b>60 Peoples</b> for you to choose your <b>favorite</b></p>
            <input type='text' placeholder="find..." className={styles.input}/>
        </div>
    )
};

export default Search;