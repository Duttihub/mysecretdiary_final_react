import React, { Component } from 'react';
import './App.css';
import styles from './eintragtabelle.module.css';
import style from './addeintrag.module.css';
import styleallround from './Allround.module.css';
import {
    withRouter
} from 'react-router-dom'


class Allround extends Component {

    state = {
        kategoriegesamt: [],
        adding: {
            eintragnew: '',
            titelnew: ''
        },
        kategorie: []

    }

    async componentDidMount() {

        fetch(`http://localhost:3001/kategorie/${this.props.match.params.kid}`)
            .then(response => response.json())
            .then(response => this.setState({ kategoriegesamt: response.data }))
            .catch(err => console.error(err))

        fetch(`http://localhost:3001/kategorie/info/${this.props.match.params.kid}`)
            .then(response => response.json())
            .then(response => this.setState({ kategorie: response.data }))
            .catch(err => console.error(err))
    }


    addEintrag(kid) {
        const { adding } = this.state;
        fetch(`http://localhost:3001/add?titelnew=${adding.titelnew}&kid=${kid}&eintragnew=${adding.eintragnew}`)
            .catch(err => console.error(err))
    };


    delete = (id) => {
        fetch(`http://localhost:3001/delete?id=${id}`)
            .catch(err => console.error(err))
        this.componentDidMount();
    }

    edit = (id) => {
        this.props.history.push(`/update/${id}`)
    }

    render() {

        const { kategoriegesamt } = this.state;
        const { kategorie } = this.state;
        const { adding } = this.state;



        return (
            <div className="Kategorie-Component">


                <div className="Header-Kategorie">
                    {kategorie.map(kategorie => (
                        <div>
                            <h1>{kategorie.Name}</h1>
                            <p>{kategorie.Beschreibung}</p>
                        </div>
                    ))}
                </div>


                <div className={styleallround.AddingEintragDiv}>
                    <table className={styles.eintragtabelle}>
                        <th className={styles.theintragtabelle}>Titel</th>
                        <th className={styles.theintragtabelle}>Eintrag</th>
                        <th className={styles.theintragtabelle} >Bearbeiten</th>
                        <th className={styles.theintragtabelle} >Löschen</th>

                        <tbody>
                            {kategoriegesamt.map(eintrag => (
                                <tr key={eintrag.Eintrag}>
                                    <td className={styles.tdeintragtabelle} ref={eintrag.Titel}>{eintrag.Titel}</td>
                                    <td className={styles.tdeintragtabelle}>{eintrag.Eintrag}</td>
                                    <td className={styles.tdeintragtabelle}><button onClick={() => { this.edit(eintrag.ID) }} >bearbeiten</button></td>
                                    <td className={styles.tdeintragtabelle}><button onClick={() => { this.delete(eintrag.ID) }}>löschen</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className={styleallround.AddingEintragDiv}>
                    <form>
                        <label className={style.inputlabel}>Titel</label>
                        <input className={style.inputtitel} type="text" name="titelnew" value={adding.titelnew} onChange={e => this.setState({ adding: { ...adding, titelnew: e.target.value } })} />
                    </form>
                    <form>
                        <label className={style.inputlabel}>Was musst du Dr. Chaos fragen? </label>
                        <textarea className={style.inputeintrag} type="text" name="eintragnew" value={adding.eintragnew} onChange={e => this.setState({ adding: { ...adding, eintragnew: e.target.value } })} />
                    </form>
                    <form>
                        <button onClick={() => { this.addEintrag(this.props.match.params.kid) }}>Eintrag hinzufügen</button>
                    </form>
                </div>


            </div>

        );
    }
}

export default withRouter(Allround);