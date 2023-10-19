import React, { useEffect, useState } from 'react';
import './Prosessor.css';
import $ from 'jquery';
import axios from 'axios';

const Prosessor = () => {
    const[list, setList] = useState();

    const add = (e) => {
        localStorage.setItem('cpu', `{"name": "${$(e.target).parent().find('div:nth-child(1) span').text()}", "socket": "${$(e.target).parent().find('div:nth-child(2) span').text()}", "baseFreq": "${$(e.target).parent().find('div:nth-child(3) span').text()}", "boostFreq": "${$(e.target).parent().find('div:nth-child(4) span').text()}", "watt": "${$(e.target).parent().find('div:nth-child(5) span').text()}", "price": "${$(e.target).parent().find('div:nth-child(6) span').text()}", "img": "${$(e.target).parent().find('div:nth-child(1) img').attr('src')}"}`);

        window.location.pathname = '/salesman';
    }

    useEffect(() => {
        axios.get('/anbar/cpuGet')
        .then(response => {
            setList(response.data && response.data.map(e => {
                return <div className="item" key={'key' + e.id} id={'id' + e.id}>
                            <div>
                                <img src={e.img} alt="ico" />
                                <span>{e.name}</span>
                            </div>
                            <div><span>{e.socket}</span></div>
                            <div><span>{e.baseFreq}</span>GHz</div>
                            <div><span>{e.boostFreq}</span>GHz</div>
                            <div><span>{e.watt}</span>W</div>
                            <div><span>{e.price}</span>₼</div>
                            <button onClick={add}>+</button>
                        </div>
            }));
        })
        .catch(err => { 
            if(err) throw err;
        });
    }, []);

    return (
        <div className='componentPage'>
            <div className="container">
                <div className="wrap">
                    <div className="head">
                        <span>Ad</span>
                        <span>Soket</span>
                        <span>Base tezlik</span>
                        <span>Boost tezlik</span>
                        <span>Watt</span>
                        <span>Qiymət</span>
                    </div>
                    {list}
                </div>
            </div>
        </div>
    );
};

export default Prosessor;