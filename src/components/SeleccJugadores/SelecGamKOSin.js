import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import '../../styles/bodyGame.css'


const SelecGamNum = () => {
    const [t, i18n] = useTranslation("games"); //traduccion
  return (
    <div className='bodyGame'>
        <Link to={'/Cam_KOSin'}>
            <button className='btnSeleccionCam'><span>{t("Games.1Jugador")}</span></button>
        </Link>
        <Link to={'/Cam_KOSin_2J'}>
            <button className='btnSeleccionCam'><span>{t("Games.2Jugador")}</span></button>
        </Link>
        
    </div>
  )
}

export default SelecGamNum 
