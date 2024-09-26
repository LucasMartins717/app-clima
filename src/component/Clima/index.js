import { IoMdSearch } from 'react-icons/io';
import './Clima.css';

import clearWeather from './images/clear.png';
import cloudWeather from './images/cloud.png';
import drizzleWeather from './images/drizzle.png';
import rainWeather from './images/rain.png';
import snowWeather from './images/snow.png';

import sun from './images/sun.png';
import nuvem from './images/nuvem1.png';
import nuvem3 from './images/nuvem3.png';
import clifs from './images/clifs.png';

import { WiHumidity } from 'react-icons/wi';
import { FaWind } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Chuva from '../Chuva';


const Clima = () => {

    const api_key = process.env.REACT_APP_API_KEY;
    console.log('API Key:', api_key);

    const [weatherImage, setWeatherImage] = useState('');
    const [temperatura, setTemperatura] = useState();
    const [localidade, setLocalidade] = useState();
    const [umidade, setUmidade] = useState();
    const [vento, setVento] = useState();
    
    const [umidadeParagrafo, setUmidadeParagrafo] = useState();
    const [ventoParagrafo, setVentoParagrafo] = useState();
    const [umidadeImagem, setUmidadeImagem] = useState();
    const [ventoImagem, setVentoImagem] = useState();

    useEffect(() => {
        const keyDown = (event) => {
            if(event.key === 'Enter')
            {
                search();
            }
        }

        const input = document.getElementsByClassName('clima-pesquisa_input');
        input[0].addEventListener('keydown', keyDown);
    }) //bind pra pesquisar pelo enter

    const search = async () => {

        const input = document.getElementsByClassName('clima-pesquisa_input');
        if(input[0].value === '')
        {
            input[0].style.border = '1px solid red';
            input[0].placeholder = 'Busque por um local...';
            return 0;
        }
        else
        {
            input[0].style.border = 'none';
            input[0].placeholder = 'Busque um local...';
        }


        let url = `https://api.openweathermap.org/data/2.5/weather?q=${input[0].value}&lang=pt_br&units=metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        if(!data.main)
        {
            input[0].style.border = '1px solid red';
            input[0].value = '';
            input[0].placeholder = 'Local não encontrado...';
            return 0;
        }

        const inicio = document.getElementsByClassName('clima-inicio');
        inicio[0].style.display = 'none'; //esconde a div inicio quando pesquisar

        const corBorder = document.getElementsByClassName('clima');
        corBorder[0].style.border = '2px solid rgb(126, 175, 197)'; //troca a cor da borda
        
        const imgClima = document.getElementsByClassName('clima-imagem');
        imgClima[0].style.display = 'block'; //mostra a imagem do clima quando pesquisar

        if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n'){
            setWeatherImage(clearWeather);
        }else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n'){
            setWeatherImage(cloudWeather);
        }else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n'){
            setWeatherImage(cloudWeather);
        }else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n'){
            setWeatherImage(drizzleWeather);
        }else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n'){
            setWeatherImage(drizzleWeather);
        }else if(data.weather[0].icon === '10d' || data.weather[0].icon === '10n'){
            setWeatherImage(rainWeather);
        }else if(data.weather[0].icon === '11d' || data.weather[0].icon === '11n'){
            setWeatherImage(rainWeather);
        }else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n'){
            setWeatherImage(snowWeather);
        }else{
            setWeatherImage(cloudWeather);
        } //seleciona a imagem do clima atual no local

        setTemperatura(data.main.temp + '°c');
        setLocalidade(data.name);
        setUmidade(data.main.humidity + '%');
        setVento(data.wind.speed + 'km/h');
        setUmidadeParagrafo('Humidity');
        setVentoParagrafo('Wind');
        setUmidadeImagem(<WiHumidity size={60} color='#CBDDFB'/>);
        setVentoImagem(<FaWind size={40} color='#CBDDFB' className='clima-subInformacao_vento-img'/>);
    }

    return(

        <div className='container'>
            <div className='clima'>
                
        

                <div className='clima-pesquisa'>
                    <input type='text' placeholder='Busque um local...' className='clima-pesquisa_input'></input>
                    <button className='clima-pesquisa_button' onClick={search}> <IoMdSearch size={40}/> </button> 
                </div>

                <div className='clima-inicio'>
                    <img src={sun} className='clima-inicio_sol' alt='Clima ensolarado'></img>
                    <img src={nuvem} className='clima-inicio_nuvem' alt='Nuvem'></img>
                    <img src={nuvem3} className='clima-inicio_nuvem2' alt='Nuvem'></img>
                    <img src={nuvem3} className='clima-inicio_nuvem3' alt='Nuvem'></img>
                    <img src={clifs} className='clima-inicio_clifs' alt='Campo montanhoso'></img>
                    <div className='clima-inicio_chuva'>
                        <Chuva />
                    </div>
                </div>
                <div className='teste'>
                <div className='clima-imagem'>
                    <img src={weatherImage} className='clima-imagem_img' alt='Imagem do clima atual'></img>
                </div>

                <div className='clima-informacao'>
                    <h2 className='clima-informacao_temperatura'>{temperatura}</h2>
                    <p className='clima-informacao_local'>{localidade}</p>
                </div>

                <div className='clima-subInformacao'>

                    <div className='clima-subInformacao_umidade'>
                        {umidadeImagem}
                        <div>
                            <h2 className='clima-subInformacao_umidade-titulo'>{umidade}</h2>
                            <p className='clima-subInformacao_umidade-paragrafo'>{umidadeParagrafo}</p>
                        </div>
                    </div>

                    <div className='clima-subInformacao_vento'>
                        {ventoImagem}
                        <div className='clima-subInformacao_vento-div'>
                            <h2 className='clima-subInformacao_vento-titulo'>{vento}</h2>
                            <p className='clima-subInformacao_vento-paragrafo'>{ventoParagrafo}</p>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>

    )
}

export default Clima;