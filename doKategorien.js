import React, { Component } from 'react';
import './App.css';
import styles from './eintragtabelle.module.css';
import style from './addeintrag.module.css';
import styleallround from './Allround.module.css';
import {
    withRouter
} from 'react-router-dom'


class doKategorie extends Component {

    state = {
        adding: {
            titelkategorie: '',
            beschreibungkategorie: '',

        }

    }


    addKategorie = _ => {
        const { adding } = this.state;
        fetch(`http://localhost:3001/kategorie/add?titelkategorie=${adding.titelkategorie}&beschreibungkategorie=${adding.beschreibungkategorie}`)
            .catch(err => console.error(err))
    };

    render() {

        const { adding } = this.state;
        return (

            <div>
                <div>
                    <form>
                        <label className={styles.labeledit} >Kategorietitel</label>
                        <input className={styles.inputedittitle} type="text" name="titelkategorie" value={adding.titelkategorie} onChange={e => this.setState({ adding: { ...adding, titelkategorie: e.target.value } })} />
                    </form>
                    <form>
                        <label >Kategoriebeschreibung </label>
                        <textarea className={styles.textareaediteintrag} type="text" name="beschreibungkategorie" value={adding.bescheibungkategorie} onChange={e => this.setState({ adding: { ...adding, bescheibungkategorie: e.target.value } })} />
                    </form>
                    <form>
                        <button onClick={() => { this.addKategorie() }}>Eintrag hinzufügen</button>
                    </form></div>



            </div>
        )
    }

} export default withRouter(doKategorie);
