import './Main.css';
import { useState } from 'react';
import Search from '../Search/Search';
import Content from '../Content/Content';

const API = {
    key: '294164224d05a3d5821ae84434139279',
    base: 'https://api.openweathermap.org/data/2.5/'
}

export default function Main() {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery('')
                })
        }
    }

    return (
        <div className={
            (typeof weather.main != "undefined")
                ? ((weather.main.temp > 16)
                    ? 'main-weather warm' : 'main-weather')
                : 'main-weather'}>
            <main>
                <Search search={search} query={query} setQuery={(e)=>setQuery(e.target.value)} />
                {(typeof weather.main != "undefined") ? (
                    <Content weather={weather} />
                ) : ('')}
            </main>
        </div>
    )
}