import React, { Component } from 'react';
import './App.css';
import {
    withRouter
} from 'react-router-dom'
import styles from './EintragBearbeiten.module.css';

class EintragBearbeiten extends Component {

    state = { eintrag: { ID: 0, Titel: "", Eintrag: "", KID: 0 } }

    async componentDidMount() {
        const resp = await fetch(`http://localhost:3001/get/${this.props.match.params.id}`);
        const jsonResp = await resp.json();
        console.log(jsonResp.data[0]);

        this.setState({
            eintrag: {
                ID: jsonResp.data[0].ID,
                Titel: jsonResp.data[0].Titel,
                Eintrag: jsonResp.data[0].Eintrag,
                KID: jsonResp.data[0].KID
            }
        })
    }

    speichern(eintrag) {
        console.log(eintrag);
        fetch(`http://localhost:3001/edit?id=${eintrag.ID}&titelnew=${eintrag.Titel}&eintragnew=${eintrag.Eintrag}`)
            .then(() => {
                console.log('test');
                if (eintrag.KID === 1) {
                    this.props.history.push(`/Allround/1`)
                } else if (eintrag.KID === 2) {
                    this.props.history.push(`/Allround/2`)
                } else if (eintrag.KID === 3) {
                    this.props.history.push(`/Allround/3`)
                }

            })
            .catch(err => console.error(err))


    }

    render() {

        const { eintrag } = this.state;
        return (
            <div >
                <h1>Und doch wieder rückgängig....oder anders?</h1>
                <p>Hast du dich irgendwo vertippt, oder doch die falschen Worte gewählt? Änder es einfach!</p>

                <div className={styles.editdiv}>
                    <label className={styles.labeledit}>Änder deinen Titel</label>
                    <input className={styles.inputedittitle} type="text" value={eintrag.Titel} onChange={e => this.setState({ eintrag: { ...eintrag, Titel: e.target.value } })}></input>
                    <label>Änder deinen Eintrag</label>
                    <textarea className={styles.textareaediteintrag} value={eintrag.Eintrag} onChange={e => this.setState({ eintrag: { ...eintrag, Eintrag: e.target.value } })}></textarea>
                    <button onClick={() => { this.speichern(eintrag) }}>Speicher</button>
                </div>
            </div>
        )
    }


}
export default withRouter(EintragBearbeiten);
