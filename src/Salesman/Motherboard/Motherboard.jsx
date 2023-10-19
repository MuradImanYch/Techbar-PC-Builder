import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';

const Motherboard = () => {
    const[list, setList] = useState();

    const add = (e) => {
        localStorage.setItem('mb', `{"name": "${$(e.target).parent().find('div:nth-child(1) span').text()}", "socket": "${$(e.target).parent().find('div:nth-child(2) span').text()}", "formFactor": "${$(e.target).parent().find('div:nth-child(3) span').text()}", "ramType": "${$(e.target).parent().find('div:nth-child(4) span').text()}", "price": "${$(e.target).parent().find('div:nth-child(5) span').text()}", "img": "${$(e.target).parent().find('div:nth-child(1) img').attr('src')}"}`);

        window.location.pathname = '/salesman';
    }

    useEffect(() => {
        axios.get('/anbar/mbGet')
        .then(response => {
            setList(response.data && response.data.map(e => {
                return <div className="item" key={'key' + e.id} id={'id' + e.id}>
                            <div>
                                <img src={e.img} alt="ico" />
                                <span>{e.name}</span>
                            </div>
                            <div><span>{e.socket}</span></div>
                            <div><span>{e.formFaktor}</span>GHz</div>
                            <div><span>{e.ramType}</span>GHz</div>
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
                        <span>Form faktor</span>
                        <span>RAM tipi</span>
                        <span>Qiymət</span>
                    </div>
                    {list}
                </div>
            </div>
        </div>
    );
};

export default Motherboard;