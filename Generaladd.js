import React, { Component } from 'react';
import './App.css';
import styles from './EintragBearbeiten.module.css';
import {
    withRouter
} from 'react-router-dom'


class Generaladd extends Component {
    state = {
        kategorie: [],
        adding: {
            eintragnew: '',
            titelnew: '',
            kid: 0
        }
    }

    async componentDidMount() {

        fetch(`http://localhost:3001/kategorie`)
            .then(response => response.json())
            .then(response => this.setState({ kategorie: response.data }))
            .catch(err => console.error(err))
    }

    addEintrag = _ => {
        const { adding } = this.state;
        fetch(`http://localhost:3001/add?titelnew=${adding.titelnew}&kid=${adding.kid}&eintragnew=${adding.eintragnew}`)
            .catch(err => console.error(err))
    };

    render() {
        const { kategorie } = this.state;
        const { adding } = this.state;
        return (


            <div>
                <form>
                    <label className={styles.labeledit} >Titel</label>
                    <input className={styles.inputedittitle} type="text" name="titelnew" value={adding.titelnew} onChange={e => this.setState({ adding: { ...adding, titelnew: e.target.value } })} />
                </form>
                <form>
                    <label >Feuer es raus! </label>
                    <textarea className={styles.textareaediteintrag} type="text" name="eintragnew" value={adding.eintragnew} onChange={e => this.setState({ adding: { ...adding, eintragnew: e.target.value } })} />
                </form>
                <select className={styles.selectkategorie} onMouseEnter={e => this.setState({ adding: { ...adding, kid: e.target.value } })}>
                    {kategorie.map(kategorie => (
                        <option value={kategorie.KID}>{kategorie.Name}</option>
                    ))}
                </select>
                <form>
                    <button onClick={() => { this.addEintrag() }}>Eintrag hinzufügen</button>
                </form></div>




        )
    }



} export default withRouter(Generaladd);