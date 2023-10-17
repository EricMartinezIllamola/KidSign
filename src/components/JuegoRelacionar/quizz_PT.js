import React, { useState, useEffect } from "react";
import "../../styles/quizz.css";

import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function App() {
    // P-T
    const numArray = [25, 26, 27, 28, 29];

    const [t, i18n] = useTranslation("games"); //traduccion


    const [referencia, setReferencia] = useState(randomElement(numArray));
    const [s1, setS1] = useState(0);
    const [s2, setS2] = useState(0);
    const [s3, setS3] = useState(0);

    const [change, setChange] = useState(false);
    const [points, setPoints] = useState(0);
    const [partidas, setPartidas] = useState(0);
    const [end, setEnd] = useState(false);

    const comprobar = (data) => {
        if (partidas < 5) {
            if (data === referencia) {
                setPoints(points + 1);
            }
            setReferencia(randomElement(numArray));
            setPartidas(partidas + 1);
            setChange(!change);
        }
    }

    useEffect(() => {
        let newArray = [];
        newArray = numArray;
        let seleccionados = [];
        seleccionados.push(referencia);
        newArray = newArray.filter(num => num !== referencia);
        seleccionados.push(randomElement(newArray));
        newArray = newArray.filter(num => num !== seleccionados[1]);
        seleccionados.push(randomElement(newArray));
        shuffleArray(seleccionados);
        setS1(seleccionados[0]);
        setS2(seleccionados[1]);
        setS3(seleccionados[2]);
        if (partidas === 5) {
            setEnd(true);
        }
    }, [change])

    return (
        <div className="quizz_alphabet">
            <div className="quizz_up">
                <div className="quizz_points">
                    <div><p>{t("Games.Puntos") + points}</p></div>
                    <div><p>{t("Games.Ronda") + partidas + "/5"}</p></div>
                </div>
                <img className="quizz_num" src={require("../../assets/imgquizzglobal/" + referencia + ".png")}></img>
                <img className={end ? "quizz_mono quizz_mono_salta" : "quizz_mono"} src={require("../../assets/mascots/monosentado.png")}></img>
            </div>
            <div className="quizz_down">
                <Link to={'/Officialpage'} className={end? "quizz_link show" : "quizz_link"}><button className={end? "quizz_exit show" : "quizz_exit"}>{t("Games.BtnExit")}</button></Link>
                <button onClick={() => { comprobar(s1) }} className="quizz_cards"><img className="quizz_numB" src={require("../../assets/imgquizzglobal/" + s1 + "B.png")}></img></button>
                <button onClick={() => { comprobar(s2) }} className="quizz_cards"><img className="quizz_numB" src={require("../../assets/imgquizzglobal/" + s2 + "B.png")}></img></button>
                <button onClick={() => { comprobar(s3) }} className="quizz_cards"><img className="quizz_numB" src={require("../../assets/imgquizzglobal/" + s3 + "B.png")}></img></button>
                <Link to={'/MemoryGamePT'} className={end? "quizz_link show" : "quizz_link"}><button className={end? "quizz_continue show" : "quizz_continue"}>{t("Games.BtnNext")}</button></Link>
            </div>
            <div className="quizz_expand"></div>
        </div>
    )
}

export default App;