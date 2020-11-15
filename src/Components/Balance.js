import React from 'react';
import {Route, useHistory} from 'react-router-dom';
import styles from './Balance.module.css';
import Archive from './Archive';

function Balance(props) {
    const history = useHistory();
    
    const handleRouteToArchive = ()=>{
        props.onCalcArchive();
        history.push("/archive");
    }

    return (
        <div>
            <h2 className={styles.bilanz}>{(props.flagStatus === 'de')?'Balance':'Tagesbilanz'}</h2>
            <div className={styles['bilanz-inhalt']}>
                <div className={styles['bilanz-title']}>
                    <span className={styles['bilanz-kcal']}>{(props.flagStatus === 'de')?'Calories':'Kalorien'}</span>
                    <span className={styles['bilanz-kh']}>{(props.flagStatus === 'de')?'Carbohydrates':'Kohlenhydrate'}</span>
                    <span className={styles['bilanz-ew']}>Protein</span>
                    <span className={styles['bilanz-fe']}>{(props.flagStatus === 'de')?'Fat':'Fett'}</span>
                </div>
                <div className={styles['bilanz-summe']}>
                    <span className={styles.data__kcal}>{props.showBalance[0]}</span>
                    <span className={styles.data__carbs}>{props.showBalance[1]}</span>
                    <span className={styles.data__protein}>{props.showBalance[2]}</span>
                    <span className={styles.data__fat}>{props.showBalance[3]}</span>
                </div>
                <div className={styles.buttons}>
                    <button onClick={props.onClear} className={styles['alle-loeschen']}>{(props.flagStatus === 'de')?'Clear':'Löschen'}</button>
                    <button onClick={handleRouteToArchive} className={styles.archive}>{(props.flagStatus === 'de')?'Archive':'Archiv'}</button>
                </div>
                <a href="index.html" className={styles['link-lebensmittel']}><i className={styles['fas fa-pepper-hot']}></i></a>
            </div>
            <Route path="/archive" component={Archive}/>
        </div>
    )
}

export default Balance
