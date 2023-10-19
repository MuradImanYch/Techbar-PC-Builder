import React, { useEffect, useState } from 'react';
import './Salesman.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

const Salesman = () => {
    const[cpuPrice, setCpuPrice] = useState(0);
    const[mbPrice, setMbPrice] = useState(0);
    const[ramPrice, setRamPrice] = useState(0);
    const[videocardPrice, setVideocardPrice] = useState(0);
    const[storagePrice, setStoragePrice] = useState(0);
    const[psuPrice, setPsuPrice] = useState(0);
    const[casePrice, setCasePrice] = useState(0);
    const[coolerPrice, setCoolerPrice] = useState(0);
    const[caseFanPrice, setCaseFanPrice] = useState(0);
    const[displayPrice, setDisplayPrice] = useState(0);

    const[cpuWatt, setCpuWatt] = useState(0);
    const[videocardWatt, setVideocardWatt] = useState(0);

    const[exportName,setExportName] = useState('');
    const[saveName,setSaveName] = useState('');

    const[saveQuant, setSaveQuant] = useState();
    const[saveNameList, setSaveNameList] = useState();

    useEffect(() => {
        axios.get('/save/get')
        .then(response =>{
            setSaveQuant(response.data.length);
            setSaveNameList(response.data && response.data.map(e => {
                return <button key={'key' + e.id} id={'id' + e.id}>{JSON.parse(e.customer)}</button>
            }));
        })
        .catch(err => {
            if(err) throw err;
        });
    }, []);

    useEffect(() => {
        localStorage.getItem('cpu') !== null && setCpuPrice(+JSON.parse(localStorage.getItem('cpu')).price);
        localStorage.getItem('mb') !== null && setMbPrice(+JSON.parse(localStorage.getItem('mb')).price);
        localStorage.getItem('ram') !== null && setRamPrice(+JSON.parse(localStorage.getItem('ram')).price);
        localStorage.getItem('videocard') !== null && setVideocardPrice(+JSON.parse(localStorage.getItem('videocard')).price);
        localStorage.getItem('storage') !== null && setStoragePrice(+JSON.parse(localStorage.getItem('storage')).price);
        localStorage.getItem('psu') !== null && setPsuPrice(+JSON.parse(localStorage.getItem('psu')).price);
        localStorage.getItem('case') !== null && setCasePrice(+JSON.parse(localStorage.getItem('case')).price);
        localStorage.getItem('cooler') !== null && setCoolerPrice(+JSON.parse(localStorage.getItem('cooler')).price);
        localStorage.getItem('caseFan') !== null && setCaseFanPrice(+JSON.parse(localStorage.getItem('caseFan')).price);
        localStorage.getItem('display') !== null && setDisplayPrice(+JSON.parse(localStorage.getItem('display')).price);
    }, []);

    useEffect(() => {
        localStorage.getItem('cpu') !== null && setCpuWatt(+JSON.parse(localStorage.getItem('cpu')).watt);
        localStorage.getItem('videocard') !== null && setVideocardWatt(+JSON.parse(localStorage.getItem('videocard')).watt);
    }, []);

    const xlsxExport = (e) => {
        e.preventDefault();

        exportName.length > 0 && localStorage.getItem('cpu') !== null && localStorage.getItem('mb') !== null && localStorage.getItem('ram') !== null && localStorage.getItem('videocard') !== null && localStorage.getItem('storage') !== null && localStorage.getItem('psu') !== null && localStorage.getItem('case') !== null && localStorage.getItem('cooler') !== null && localStorage.getItem('caseFan') !== null && localStorage.getItem('display') !== null ?
        axios.post('/xlsx-export', {
            cpu: JSON.parse(localStorage.getItem('cpu')) && JSON.parse(localStorage.getItem('cpu')),
            mb: JSON.parse(localStorage.getItem('mb')) && JSON.parse(localStorage.getItem('mb')),
            ram: JSON.parse(localStorage.getItem('ram')) && JSON.parse(localStorage.getItem('ram')),
            videocard: JSON.parse(localStorage.getItem('videocard')) && JSON.parse(localStorage.getItem('videocard')),
            storage: JSON.parse(localStorage.getItem('storage')) && JSON.parse(localStorage.getItem('storage')),
            psu: JSON.parse(localStorage.getItem('psu')) && JSON.parse(localStorage.getItem('psu')),
            case: JSON.parse(localStorage.getItem('case')) && JSON.parse(localStorage.getItem('case')),
            cooler: JSON.parse(localStorage.getItem('cooler')) && JSON.parse(localStorage.getItem('cooler')),
            caseFan: JSON.parse(localStorage.getItem('caseFan')) && JSON.parse(localStorage.getItem('caseFan')),
            monitor: JSON.parse(localStorage.getItem('display')) && JSON.parse(localStorage.getItem('display')),
            exportName
        })
        .catch(err => {
            if(err) throw err;
        }) && setExportName('') || $('#salesman .export-xlsx input').val('') : alert('Bütün məhsulları əlavə edib və müştərinin Adını, və Soyadını qeyd edin');
    }

    const save = (e) => {
        e.preventDefault();

        saveName.length > 0 && localStorage.getItem('cpu') !== null && localStorage.getItem('mb') !== null && localStorage.getItem('ram') !== null && localStorage.getItem('videocard') !== null && localStorage.getItem('storage') !== null && localStorage.getItem('psu') !== null && localStorage.getItem('case') !== null && localStorage.getItem('cooler') !== null && localStorage.getItem('caseFan') !== null && localStorage.getItem('display') !== null ?
        axios.post('/save', {
            cpu: JSON.parse(localStorage.getItem('cpu')) && JSON.parse(localStorage.getItem('cpu')),
            mb: JSON.parse(localStorage.getItem('mb')) && JSON.parse(localStorage.getItem('mb')),
            ram: JSON.parse(localStorage.getItem('ram')) && JSON.parse(localStorage.getItem('ram')),
            videocard: JSON.parse(localStorage.getItem('videocard')) && JSON.parse(localStorage.getItem('videocard')),
            storage: JSON.parse(localStorage.getItem('storage')) && JSON.parse(localStorage.getItem('storage')),
            psu: JSON.parse(localStorage.getItem('psu')) && JSON.parse(localStorage.getItem('psu')),
            case: JSON.parse(localStorage.getItem('case')) && JSON.parse(localStorage.getItem('case')),
            cooler: JSON.parse(localStorage.getItem('cooler')) && JSON.parse(localStorage.getItem('cooler')),
            caseFan: JSON.parse(localStorage.getItem('caseFan')) && JSON.parse(localStorage.getItem('caseFan')),
            monitor: JSON.parse(localStorage.getItem('display')) && JSON.parse(localStorage.getItem('display')),
            saveName,
            watt: cpuWatt + videocardWatt,
            price: cpuPrice + mbPrice + ramPrice + videocardPrice + storagePrice + psuPrice + casePrice + coolerPrice + caseFanPrice + displayPrice
        })
        .catch(err => {
            if(err) throw err;
        }) && setSaveName('') || $('#salesman .save input').val('') && axios.get('/save/get')
        .then(response => {
            setSaveQuant(response.data.length);
        }).catch(err => {if(err) throw err;}) : alert('Bütün məhsulları əlavə edib və müştərinin Adını, və Soyadını qeyd edin');
    }

    const reset = (e) => {
        e.preventDefault();

        localStorage.removeItem('cpu') || localStorage.removeItem('mb') || localStorage.removeItem('ram') || localStorage.removeItem('videocard') || localStorage.removeItem('storage') || localStorage.removeItem('psu') || localStorage.removeItem('case') || localStorage.removeItem('cooler') || localStorage.removeItem('caseFan') || localStorage.removeItem('display');
        window.location.reload();
    }

    const savedPc = (e) => {
        e.preventDefault();

        $('#salesman .savedPc').fadeIn();
        $('body').css({overflow: 'hidden'});

        axios.get('/save/get')
        .then(response =>{
            setSaveQuant(response.data.length);
            setSaveNameList(response.data && response.data.map(e => {
                return <button key={'key' + e.id} id={'id' + e.id}>{JSON.parse(e.customer)}</button>
            }));
        })
        .catch(err => {
            if(err) throw err;
        });
    }
    const close = (e) => {
        e.preventDefault();

        $('#salesman .savedPc').fadeOut();
        $('body').css({overflow: 'auto'});
    }

    return (
        <div id='salesman'>
            <div className="wattage">Wattage: <span className='wattage'>{cpuWatt + videocardWatt}W</span></div>

            <div className="components">
                <div className="head">
                    <span>Komponent</span>
                    <span>Məhsulun adı</span>
                    <span>Qiymət</span>
                </div>
                <div className="item">
                    <span>Prosessor</span>
                    {localStorage.getItem('cpu') ? <><div className='imgName'>
                        <img src={JSON.parse(localStorage.getItem('cpu')).img} alt='ico' />
                        <span>{JSON.parse(localStorage.getItem('cpu')).name}</span>
                    </div>
                    <span className='price'>{JSON.parse(localStorage.getItem('cpu')).price} <span>₼</span></span><span className='delete' onClick={() => {localStorage.removeItem('cpu') || window.location.reload()}}>x</span></> : <><Link to='/cpu'><button>Seç</button></Link><div></div></>}
                </div>
                <div className="item">
                    <span>Ana plata</span>
                    {localStorage.getItem('mb') ? <><div className='imgName'>
                        <img src={JSON.parse(localStorage.getItem('mb')).img} alt='ico' />
                        <span>{JSON.parse(localStorage.getItem('mb')).name}</span>
                    </div>
                    <span className='price'>{JSON.parse(localStorage.getItem('mb')).price} <span>₼</span></span><span className='delete' onClick={() => {localStorage.removeItem('mb') || window.location.reload()}}>x</span></> : <><Link to='/mb'><button disabled={localStorage.getItem('cpu') ? false : true}>Seç</button></Link><div></div></>}
                </div>
                <div className="item">
                    <span>RAM</span>
                    {localStorage.getItem('ram') ? <><div className='imgName'>
                        <img src={JSON.parse(localStorage.getItem('ram')).img} alt='ico' />
                        <span>{JSON.parse(localStorage.getItem('ram')).name}</span>
                    </div>
                    <span className='price'>{JSON.parse(localStorage.getItem('ram')).price} <span>₼</span></span><span className='delete' onClick={() => {localStorage.removeItem('ram') || window.location.reload()}}>x</span></> : <><Link to='/ram'><button disabled={localStorage.getItem('mb') ? false : true}>Seç</button></Link><div></div></>}
                </div>
                <div className="item">
                    <span>Videokart</span>
                    {localStorage.getItem('videocard') ? <><div className='imgName'>
                        <img src={JSON.parse(localStorage.getItem('videocard')).img} alt='ico' />
                        <span>{JSON.parse(localStorage.getItem('videocard')).name}</span>
                    </div>
                    <span className='price'>{JSON.parse(localStorage.getItem('videocard')).price} <span>₼</span></span><span className='delete' onClick={() => {localStorage.removeItem('videocard') || window.location.reload()}}>x</span></> : <><Link to='/videocard'><button>Seç</button></Link><div></div></>}
                </div>
                <div className="item">
                    <span>Yaddaş</span>
                    {localStorage.getItem('storage') ? <><div className='imgName'>
                        <img src={JSON.parse(localStorage.getItem('storage')).img} alt='ico' />
                        <span>{JSON.parse(localStorage.getItem('storage')).name}</span>
                    </div>
                    <span className='price'>{JSON.parse(localStorage.getItem('storage')).price} <span>₼</span></span><span className='delete' onClick={() => {localStorage.removeItem('storage') || window.location.reload()}}>x</span></> : <><Link to='/storage'><button>Seç</button></Link><div></div></>}
                </div>
                <div className="item">
                    <span>Qida bloku</span>
                    {localStorage.getItem('psu') ? <><div className='imgName'>
                        <img src={JSON.parse(localStorage.getItem('psu')).img} alt='ico' />
                        <span>{JSON.parse(localStorage.getItem('psu')).name}</span>
                    </div>
                    <span className='price'>{JSON.parse(localStorage.getItem('psu')).price} <span>₼</span></span><span className='delete' onClick={() => {localStorage.removeItem('psu') || window.location.reload()}}>x</span></> : <><Link to='/psu'><button>Seç</button></Link><div></div></>}
                </div>
                <div className="item">
                    <span>Keys</span>
                    {localStorage.getItem('case') ? <><div className='imgName'>
                        <img src={JSON.parse(localStorage.getItem('case')).img} alt='ico' />
                        <span>{JSON.parse(localStorage.getItem('case')).name}</span>
                    </div>
                    <span className='price'>{JSON.parse(localStorage.getItem('case')).price} <span>₼</span></span><span className='delete' onClick={() => {localStorage.removeItem('case') || window.location.reload()}}>x</span></> : <><Link to='/case'><button>Seç</button></Link><div></div></>}
                </div>
                <div className="item">
                    <span>Prosessor soyuducu</span>
                    {localStorage.getItem('cooler') ? <><div className='imgName'>
                        <img src={JSON.parse(localStorage.getItem('cooler')).img} alt='ico' />
                        <span>{JSON.parse(localStorage.getItem('cooler')).name}</span>
                    </div>
                    <span className='price'>{JSON.parse(localStorage.getItem('cooler')).price} <span>₼</span></span><span className='delete' onClick={() => {localStorage.removeItem('cooler') || window.location.reload()}}>x</span></> : <><Link to='/cooler'><button>Seç</button></Link><div></div></>}
                </div>
                <div className="item">
                    <span>Keys fan</span>
                    {localStorage.getItem('caseFan') ? <><div className='imgName'>
                        <img src={JSON.parse(localStorage.getItem('caseFan')).img} alt='ico' />
                        <span>{JSON.parse(localStorage.getItem('caseFan')).name}</span>
                    </div>
                    <span className='price'>{JSON.parse(localStorage.getItem('caseFan')).price} <span>₼</span></span><span className='delete' onClick={() => {localStorage.removeItem('caseFan') || window.location.reload()}}>x</span></> : <><Link to='/case-fan'><button>Seç</button></Link><div></div></>}
                </div>
                <div className="item">
                    <span>Monitor</span>
                    {localStorage.getItem('display') ? <><div className='imgName'>
                        <img src={JSON.parse(localStorage.getItem('display')).img} alt='ico' />
                        <span>{JSON.parse(localStorage.getItem('display')).name}</span>
                    </div>
                    <span className='price'>{JSON.parse(localStorage.getItem('display')).price} <span>₼</span></span><span className='delete' onClick={() => {localStorage.removeItem('display') || window.location.reload()}}>x</span></> : <><Link to='/display'><button>Seç</button></Link><div></div></>}
                </div>
            </div>

            <div className="bottom">
                <div className="container">
                    <div className='btnWrap'>
                        <div className="export-xlsx">
                            <button onClick={xlsxExport}>Export XLSX</button>
                            <input type="text" onChange={(e) => {setExportName(e.target.value)}} />
                        </div>
                        <div className="save">
                            <button onClick={save}>Yaddaşa sal</button>
                            <input type="text" onChange={(e) => {setSaveName(e.target.value)}} />
                        </div>
                        <div className="saved">
                            <span style={{color: saveQuant > 0 && 'red'}}>{saveQuant}</span>
                            <button onClick={savedPc}>Hazır PC-lər</button>
                        </div>
                    </div>
                    <div>
                        <div className="total">Toplam qiymət: <span>{cpuPrice + mbPrice + ramPrice + videocardPrice + storagePrice + psuPrice + casePrice + coolerPrice + caseFanPrice + displayPrice}₼</span></div>
                        <button onClick={reset} className='reset'>Reset</button>
                    </div>
                </div>
            </div>
            <div className="savedPc">
                <span onClick={close} className='close'>x</span>
                <div className="wrap">
                    <div className="nameWrap">
                        {saveNameList}
                    </div>
                    <div className="components">components</div>
                </div>
            </div>
        </div>
    );
};

export default Salesman;