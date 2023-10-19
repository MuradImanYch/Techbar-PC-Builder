import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';

const Storage = () => {
    const[list, setList] = useState();

    const add = (e) => {
        localStorage.setItem('storage', `{"name": "${$(e.target).parent().find('div:nth-child(1) span').text()}", "type": "${$(e.target).parent().find('div:nth-child(2) span').text()}", "capacity": "${$(e.target).parent().find('div:nth-child(3) span').text()}", "price": "${$(e.target).parent().find('div:nth-child(4) span').text()}", "img": "${$(e.target).parent().find('div:nth-child(1) img').attr('src')}"}`);

        window.location.pathname = '/salesman';
    }

    useEffect(() => {
        axios.get('/anbar/storageGet')
        .then(response => {
            setList(response.data && response.data.map(e => {
                return <div className="item" key={'key' + e.id} id={'id' + e.id}>
                            <div className='componentPage'>
                                <img src={e.img} alt="ico" />
                                <span>{e.name}</span>
                            </div>
                            <div><span>{e.type}</span></div>
                            <div><span>{e.capacity}</span></div>
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
                        <span>Yaddaş tipi</span>
                        <span>Həcmi</span>
                        <span>Qiymət</span>
                    </div>
                    {list}
                </div>
            </div>
        </div>
    );
};

export default Storage;