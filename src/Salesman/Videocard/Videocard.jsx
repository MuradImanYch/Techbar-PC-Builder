import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';

const Videocard = () => {
    const[list, setList] = useState();

    const add = (e) => {
        localStorage.setItem('videocard', `{"name": "${$(e.target).parent().find('div:nth-child(1) span').text()}", "vram": "${$(e.target).parent().find('div:nth-child(2) span').text()}", "watt": "${$(e.target).parent().find('div:nth-child(3) span').text()}", "freq": "${$(e.target).parent().find('div:nth-child(4) span').text()}", "price": "${$(e.target).parent().find('div:nth-child(5) span').text()}", "img": "${$(e.target).parent().find('div:nth-child(1) img').attr('src')}"}`);

        window.location.pathname = '/salesman';
    }

    useEffect(() => {
        axios.get('/anbar/gpuGet')
        .then(response => {
            setList(response.data && response.data.map(e => {
                return <div className="item" key={'key' + e.id} id={'id' + e.id}>
                            <div>
                                    <img src={e.img} alt="ico" />
                                    <span>{e.name}</span>
                                </div>
                                <div><span>{e.vram}</span>GB</div>
                                <div><span>{e.watt}</span>W</div>
                                <div><span>{e.freq}</span>GHz</div>
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
                        <span>VRAM</span>
                        <span>Watt</span>
                        <span>Tezlik</span>
                        <span>Qiymət</span>
                    </div>
                    {list}
                </div>
            </div>
        </div>
    );
};

export default Videocard;