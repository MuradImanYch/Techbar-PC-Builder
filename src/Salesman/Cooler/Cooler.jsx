import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';

const Cooler = () => {
    const[list, setList] = useState();

    const add = (e) => {
        localStorage.setItem('cooler', `{"name": "${$(e.target).parent().find('div:nth-child(1) span').text()}", "type": "${$(e.target).parent().find('div:nth-child(2) span').text()}", "tdp": "${$(e.target).parent().find('div:nth-child(3) span').text()}", "price": "${$(e.target).parent().find('div:nth-child(4) span').text()}", "img": "${$(e.target).parent().find('div:nth-child(1) img').attr('src')}"}`);

        window.location.pathname = '/salesman';
    }

    useEffect(() => {
        axios.get('/anbar/coolerGet')
        .then(response => {
            setList(response.data && response.data.map(e => {
                return <div className="item" key={'key' + e.id} id={'id' + e.id}>
                            <div className='componentPage'>
                            <img src={e.img} alt="ico" />
                            <span>{e.name}</span>
                        </div>
                        <div><span>{e.type}</span></div>
                        <div><span>{e.tdp}</span>W</div>
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
                        <span>Soyuducu tipi</span>
                        <span>TDP</span>
                        <span>Qiymət</span>
                    </div>
                    {list}
                </div>
            </div>
        </div>
    );
};

export default Cooler;