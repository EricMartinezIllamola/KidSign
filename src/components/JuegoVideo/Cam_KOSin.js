// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { Link } from 'react-router-dom';
import "../../styles/camara_05.css";
import { useTranslation } from 'react-i18next';


function argMax(array) {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function App() {
  const [t, i18n] = useTranslation("games"); //traduccion

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasRef2 = useRef(null);

  const numArray = [9, 10, 11, 12, 13];
  const [referencia, setReferencia] = useState(randomElement(numArray));
  let [results, setResults] = useState([]);
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(90);

  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);

  // Detection Zone y Cuadrado
  const [x, setX] = useState(25);
  const [y, setY] = useState(25);
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(240);

  const labelMap = {
    0: { name: 'A', color: 'purple' },
    1: { name: 'B', color: 'red' },
    2: { name: 'C', color: 'yellow' },
    3: { name: 'D', color: 'lime' },
    4: { name: 'E', color: 'blue' },
    5: { name: 'F', color: 'orange' },
    6: { name: 'G', color: 'black' },
    7: { name: 'H', color: 'white' },
    8: { name: 'I', color: 'darkred' },
    9: { name: 'K', color: 'darkblue' },
    10: { name: 'L', color: 'purple' },
    11: { name: 'M', color: 'red' },
    12: { name: 'N', color: 'yellow' },
    13: { name: 'O', color: 'lime' },
    14: { name: 'P', color: 'blue' },
    15: { name: 'Q', color: 'orange' },
    16: { name: 'R', color: 'black' },
    17: { name: 'S', color: 'white' },
    18: { name: 'T', color: 'darkred' },
    19: { name: 'U', color: 'darkblue' },
    20: { name: 'V', color: 'purple' },
    21: { name: 'W', color: 'red' },
    22: { name: 'X', color: 'yellow' },
    23: { name: 'Y', color: 'lime' },
  }

  // Main function

  useEffect(() => {
    const runModel = async () => {
      const alphabet_model_03 = "https://raw.githubusercontent.com/EricMartinezIllamola/alphabet-model-03/main/model.json";
      const alphabet_model_05 = "https://raw.githubusercontent.com/EricMartinezIllamola/alphabet-model-05/main/model.json";

      const model = await tf.loadGraphModel(alphabet_model_05);
      console.log("Model loaded.");

      //  Loop and detect hands

      const myInterval = setInterval(() => {
        const detect = async (model) => {
          // Check data is available
          if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
          ) {

            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            canvasRef2.current.width = videoWidth;
            canvasRef2.current.height = videoHeight;

            const canvas = document.getElementById("canvas");

            // Draw Detection Zone
            const ctx = canvasRef.current.getContext("2d");
            ctx.drawImage(video, x, y, width, height, 0, 0, 640, 480);

            // Make Detections
            const img = tf.browser.fromPixels(canvas)
            const resized = tf.image.resizeBilinear(img, [56, 56])
            const expanded = resized.expandDims(0)
            const obj = await model.execute(expanded)
            const predictedValue = argMax(obj.arraySync()[0]);
            results.push(predictedValue);
            setResults(results.slice(-10));
            results = results.slice(-10);

            const drawRect = (predictedValue, ctx, x, y, width, height) => {
              // Set styling
              ctx.strokeStyle = labelMap[predictedValue]['color']
              ctx.lineWidth = 1
              ctx.fillStyle = labelMap[predictedValue]['color']
              ctx.font = '70px Arial'

              // DRAW!!
              ctx.beginPath()
              ctx.rect(x, y, width, height);
              ctx.fillText(labelMap[predictedValue]['name'], (x + (width / 2.5)), (y + 310))
              ctx.stroke()
            }
            const ctx2 = canvasRef2.current.getContext("2d");
            requestAnimationFrame(() => { drawRect(predictedValue, ctx2, x, y, width, height) });

            tf.dispose(img);
            tf.dispose(resized);
            tf.dispose(expanded);
            tf.dispose(obj);
            tf.dispose(predictedValue);
          }
        };
        detect(model)
      }, 200);
      return () => clearInterval(myInterval)
    };
    runModel();
  }, []);

  useEffect(() => {
    if (results.filter(x => x === referencia).length === 7) {
      setResults([]);
      if (timer > 0 && start) {
        setPoints(points + 1);
        setReferencia(randomElement(numArray));
      }
      else if (timer === 0 && start) {
        setReferencia(randomElement(numArray));
      }
    }
    else if (timer <= 0 && start) {
      setEnd(true);
    }
  }, [results]);

  useEffect(() => {
    timer > 0 && start && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer])


  if (start) {
    return (
      <div className="App">

        <Webcam
          className="web"
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            top: 100,
            left: 500,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef2}
          id="canvas2"
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            top: 100,
            left: 500,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          id="canvas"
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: -4500,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
        <div className="left_side">
          <div className="left_up">
            <div className="left_up_mono"><img className={end? "camara_mono camara_mono_salta" : "camara_mono"} src={require("../../assets/mascots/monohojas.png")}></img></div>
            <div className="left_up_points">
              <div><p className="timer">{timer < 10 ? t("Games.Tiempo0") + timer : t("Games.Tiempo") + timer}</p></div>
              <div><p className="points">{t("Games.Puntos") + points}</p></div>
            </div>
          </div>
          <div className="left_center">
            <img className="num_ejemplo" src={require("../../assets/alphabet_camara/" + referencia + ".png")}></img>
          </div>
        </div>
        <div className="right_side">
          <Link to={"/Officialpage"} className="camara_l_exit"><button className="camara_exit" onClick={() => { }}>{t("Games.BtnExit")}</button></Link>
        </div>
        <div className="camara_extend"></div>
        
      </div>
    );
  }
  else if (!start) {
    return (
      <div className="App">

        <Webcam
          className="web"
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            top: 100,
            left: 500,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef2}
          id="canvas2"
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            top: 100,
            left: 500,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          id="canvas"
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: -4500,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
        <div className="left_side">
          <div className="left_up">
            <div className="left_up_mono"><img className="camara_mono" src={require("../../assets/mascots/monohojas.png")}></img></div>
            <div className="left_up_points">
            <div><p className="timer">{timer < 10 ? t("Games.Tiempo0") + timer : t("Games.Tiempo") + timer}</p></div>
              <div><p className="points">{t("Games.Puntos") + points}</p></div>
            </div>
          </div>
          <div className="left_start">
            <button className="btn_start" onClick={() => { setStart(!start); setTimer(timer + 1); setReferencia(randomElement(numArray)) }}>{t("Games.BtnStart")}</button>
            <Link to={"/Officialpage"} className="camara_l_exit"><button className="btn_exit">{t("Games.BtnExit")}</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default App;