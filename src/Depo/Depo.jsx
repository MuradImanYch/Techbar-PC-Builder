import React, { useState } from 'react';
import './Depo.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

const Depo = () => {
    const[cpuName, setCpuName] = useState('');
    const[cpuSocket, setCpuSocket] = useState('');
    const[cpuBaseFreq, setCpuBaseFreq] = useState('');
    const[cpuBoostFreq, setCpuBoostFreq] = useState('');
    const[cpuWatt, setCpuWatt] = useState('');
    const[cpuPrice, setCpuPrice] = useState('');
    const[cpuImg, setCpuImg] = useState('');

    const[mbName, setMbName] = useState('');
    const[mbSocket, setMbSocket] = useState('');
    const[mbFormFaktor, setMbFormFaktor] = useState('');
    const[mbRamType, setMbRamType] = useState('');
    const[mbPrice, setMbPrice] = useState('');
    const[mbImg, setMbImg] = useState('');

    const[ramName, setRamName] = useState('');
    const[ramMemory, setRamMemory] = useState('');
    const[ramType, setRamType] = useState('');
    const[ramFreq, setRamFreq] = useState('');
    const[ramPrice, setRamPrice] = useState('');
    const[ramImg, setRamImg] = useState('');

    const[gpuName, setGpuName] = useState('');
    const[gpuVram, setGpuVram] = useState('');
    const[gpuWatt, setGpuWatt] = useState('');
    const[gpuFreq, setGpuFreq] = useState('');
    const[gpuPrice, setGpuPrice] = useState('');
    const[gpuImg, setGpuImg] = useState('');

    const[storageName, setStorageName] = useState('');
    const[storageType, setStorageType] = useState('');
    const[storageCapacity, setStorageCapacity] = useState('');
    const[storagePrice, setStoragePrice] = useState('');
    const[storageImg, setStorageImg] = useState('');

    const[psuName, setPsuName] = useState('');
    const[psuWatt, setPsuWatt] = useState('');
    const[psuPrice, setPsuPrice] = useState('');
    const[psuImg, setPsuImg] = useState('');

    const[caseName, setCaseName] = useState('');
    const[caseFormFaktor, setCaseFormFaktor] = useState('');
    const[casePrice, setCasePrice] = useState('');
    const[caseImg, setCaseImg] = useState('');

    const[coolerName, setCoolerName] = useState('');
    const[coolerType, setCoolerType] = useState('');
    const[coolerTdp, setCoolerTdp] = useState('');
    const[coolerPrice, setCoolerPrice] = useState('');
    const[coolerImg, setCoolerImg] = useState('');

    const[caseFanName, setCaseFanName] = useState('');
    const[caseFanSize, setCaseFanSize] = useState('');
    const[caseFanPrice, setCaseFanPrice] = useState('');
    const[caseFanImg, setCaseFanImg] = useState('');

    const[monitorName, setMonitorName] = useState('');
    const[monitorSize, setMonitorSize] = useState('');
    const[monitorResolution, setMonitorResolution] = useState('');
    const[monitorType, setMonitorType] = useState('');
    const[monitorFreq, setMonitorFreq] = useState('');
    const[monitorPrice, setMonitorPrice] = useState('');
    const[monitorImg, setMonitorImg] = useState('');

    const location = useLocation();
    /* let psw = prompt('Parol:');

    useEffect(() => {
        location.pathname = '/depo' && psw === '123' ? null : window.location.reload();
    }, [location]); */

    const addCpu = () => {
        if(cpuName.length > 0 && cpuSocket.length > 0 && cpuBaseFreq.length > 0 && cpuBoostFreq.length > 0 && cpuWatt.length > 0 && cpuPrice.length > 0 && cpuImg.length > 0) {
            axios.post('/anbar/cpuAdd', {
                cpuName,
                cpuSocket,
                cpuBaseFreq,
                cpuBoostFreq,
                cpuWatt,
                cpuPrice,
                cpuImg
            })
            .catch(err => {
                if(err) throw err;
            });

            $('#depo .item:nth-child(1) input').val('');
            setCpuName('');
            setCpuSocket('');
            setCpuBaseFreq('');
            setCpuBoostFreq('');
            setCpuWatt('');
            setCpuPrice('');
            setCpuImg('');
        }
        else {
            alert('Məhsulun bütün xanalarını doldurun');
        }
    }
    const addMb = () => {
        if(mbName.length > 0 && mbSocket.length > 0 && mbFormFaktor.length > 0 && mbRamType.length > 0 && mbPrice.length > 0 && mbImg.length > 0) {
            axios.post('/anbar/mbAdd', {
                mbName,
                mbSocket,
                mbFormFaktor,
                mbRamType,
                mbPrice,
                mbImg,
            })
            .catch(err => {
                if(err) throw err;
            });

            $('#depo .item:nth-child(2) input').val('');
            setMbName('');
            setMbSocket('');
            setMbFormFaktor('');
            setMbRamType('');
            setMbPrice('');
            setMbImg('');
        }
        else {
            alert('Məhsulun bütün xanalarını doldurun');
        }
    }
    const addRam = () => {
        if(ramName.length > 0 && ramMemory.length > 0 && ramType.length > 0 && ramFreq.length > 0 && ramPrice.length > 0 && ramImg.length > 0) {
            axios.post('/anbar/ramAdd', {
                ramName,
                ramMemory,
                ramType,
                ramFreq,
                ramPrice,
                ramImg,
            })
            .catch(err => {
                if(err) throw err;
            });

            $('#depo .item:nth-child(3) input').val('');
            setRamName('');
            setRamMemory('');
            setRamType('');
            setRamFreq('');
            setRamPrice('');
            setRamImg('');
        }
        else {
            alert('Məhsulun bütün xanalarını doldurun');
        }
    }
    const addGpu = () => {
        if(gpuName.length > 0 && gpuVram.length > 0 && gpuWatt.length > 0 && gpuFreq.length > 0 && gpuPrice.length > 0 && gpuImg.length > 0) {
            axios.post('/anbar/gpuAdd', {
                gpuName,
                gpuVram,
                gpuWatt,
                gpuFreq,
                gpuPrice,
                gpuImg,
            })
            .catch(err => {
                if(err) throw err;
            });

            $('#depo .item:nth-child(4) input').val('');
            setGpuName('');
            setGpuVram('');
            setGpuWatt('');
            setGpuFreq('');
            setGpuPrice('');
            setGpuImg('');
        }
        else {
            alert('Məhsulun bütün xanalarını doldurun');
        }
    }
    const addStorage = () => {
        if(storageName.length > 0 && storageType.length > 0 && storageCapacity.length > 0 && storagePrice.length > 0 && storageImg.length > 0) {
            axios.post('/anbar/storageAdd', {
                storageName,
                storageType,
                storageCapacity,
                storagePrice,
                storageImg,
            })
            .catch(err => {
                if(err) throw err;
            });

            $('#depo .item:nth-child(5) input').val('');
            setStorageName('');
            setStorageType('');
            setStorageCapacity('');
            setStoragePrice('');
            setStorageImg('');
        }
        else {
            alert('Məhsulun bütün xanalarını doldurun');
        }
    }
    const addPsu = () => {
        if(psuName.length > 0 && psuWatt.length > 0 && psuPrice.length > 0 && psuImg.length > 0) {
            axios.post('/anbar/psuAdd', {
                psuName,
                psuWatt,
                psuPrice,
                psuImg,
            })
            .catch(err => {
                if(err) throw err;
            });

            $('#depo .item:nth-child(6) input').val('');
            setPsuName('');
            setPsuWatt('');
            setPsuPrice('');
            setPsuImg('');
        }
        else {
            alert('Məhsulun bütün xanalarını doldurun');
        }
    }
    const addCase = () => {
        if(caseName.length > 0 && caseFormFaktor.length > 0 && casePrice.length > 0 && caseImg.length > 0) {
            axios.post('/anbar/caseAdd', {
                caseName,
                caseFormFaktor,
                casePrice,
                caseImg,
            })
            .catch(err => {
                if(err) throw err;
            });

            $('#depo .item:nth-child(7) input').val('');
            setCaseName('');
            setCaseFormFaktor('');
            setCasePrice('');
            setCaseImg('');
        }
        else {
            alert('Məhsulun bütün xanalarını doldurun');
        }
    }
    const addCooler = () => {
        if(coolerName.length > 0 && coolerType.length > 0 && coolerTdp.length > 0 && coolerPrice.length > 0 && coolerImg.length > 0) {
            axios.post('/anbar/coolerAdd', {
                coolerName,
                coolerType,
                coolerTdp,
                coolerPrice,
                coolerImg
            })
            .catch(err => {
                if(err) throw err;
            });

            $('#depo .item:nth-child(8) input').val('');
            setCoolerName('');
            setCoolerType('');
            setCoolerTdp('');
            setCoolerPrice('');
            setCoolerImg('');
        }
        else {
            alert('Məhsulun bütün xanalarını doldurun');
        }
    }
    const addCaseFan = () => {
        if(caseFanName.length > 0 && caseFanSize.length > 0 && caseFanPrice.length > 0 && caseFanImg.length) {
            axios.post('/anbar/caseFanAdd', {
                caseFanName,
                caseFanSize,
                caseFanPrice,
                caseFanImg
            })
            .catch(err => {
                if(err) throw err;
            });

            $('#depo .item:nth-child(9) input').val('');
            setCaseFanName('');
            setCaseFanSize('');
            setCaseFanPrice('');
            setCaseFanImg('');
        }
        else {
            alert('Məhsulun bütün xanalarını doldurun');
        }
    }
    const addMonitor = () => {
        if(monitorName.length > 0 && monitorSize.length > 0 && monitorResolution.length > 0 && monitorType.length > 0 && monitorFreq.length > 0 && monitorPrice.length > 0 && monitorImg.length > 0) {
            axios.post('/anbar/monitorAdd', {
                monitorName,
                monitorSize,
                monitorResolution,
                monitorType,
                monitorFreq,
                monitorPrice,
                monitorImg
            })
            .catch(err => {
                if(err) throw err;
            });

            $('#depo .item:nth-child(10) input').val('');
            setMonitorName('');
            setMonitorSize('');
            setMonitorResolution('');
            setMonitorType('');
            setMonitorFreq('');
            setMonitorPrice('');
            setMonitorImg('');
        }
        else {
            alert('Məhsulun bütün xanalarını doldurun');
        }
    }

    return (
        <div id='depo'>
            <div className="container">
                <div className='item'>
                    <span>Prosessor:</span>
                    <input onChange={(e) => {setCpuName(e.target.value)}} type="text" placeholder='Məhsulun adı' />
                    <input onChange={(e) => {setCpuSocket(e.target.value)}} type="text" placeholder='Soket' />
                    <input onChange={(e) => {setCpuBaseFreq(e.target.value)}} type="text" placeholder='Base tezlik' />
                    <input onChange={(e) => {setCpuBoostFreq(e.target.value)}} type="text" placeholder='Boost tezlik' />
                    <input onChange={(e) => {setCpuWatt(e.target.value)}} type="text" placeholder='Watt' />
                    <input onChange={(e) => {setCpuPrice(e.target.value)}} type="text" placeholder='Qiymət' />
                    <input onChange={(e) => {setCpuImg(e.target.value)}} type="text" placeholder='Şəkil URL' />
                    <button onClick={addCpu}>+</button>
                    <a href="#">Məhsullara bax</a>
                </div>
                <div className='item'>
                    <span>Ana plata:</span>
                    <input type="text" placeholder='Məhsulun adı' onChange={(e) => {setMbName(e.target.value)}} />
                    <input type="text" placeholder='Soket' onChange={(e) => {setMbSocket(e.target.value)}} />
                    <input type="text" placeholder='Form faktor' onChange={(e) => {setMbFormFaktor(e.target.value)}} />
                    <input type="text" placeholder='RAM tipi' onChange={(e) => {setMbRamType(e.target.value)}} />
                    <input type="text" placeholder='Qiymət' onChange={(e) => {setMbPrice(e.target.value)}} />
                    <input type="text" placeholder='Şəkil URL' onChange={(e) => {setMbImg(e.target.value)}} />
                    <button onClick={addMb}>+</button>
                    <a href="#">Məhsullara bax</a>
                </div>
                <div className='item'>
                    <span>RAM:</span>
                    <input type="text" placeholder='Məhsulun adı' onChange={(e) => {setRamName(e.target.value)}} />
                    <input type="text" placeholder='Həcmi' onChange={(e) => {setRamMemory(e.target.value)}} />
                    <input type="text" placeholder='Ram tipi' onChange={(e) => {setRamType(e.target.value)}} />
                    <input type="text" placeholder='Tezlik' onChange={(e) => {setRamFreq(e.target.value)}} />
                    <input type="text" placeholder='Qiymət' onChange={(e) => {setRamPrice(e.target.value)}} />
                    <input type="text" placeholder='Şəkil URL' onChange={(e) => {setRamImg(e.target.value)}} />
                    <button onClick={addRam}>+</button>
                    <a href="#">Məhsullara bax</a>
                </div>
                <div className='item'>
                    <span>Videokart:</span>
                    <input type="text" placeholder='Məhsulun adı' onChange={(e) => {setGpuName(e.target.value)}} />
                    <input type="text" placeholder='VRAM' onChange={(e) => {setGpuVram(e.target.value)}} />
                    <input type="text" placeholder='Watt' onChange={(e) => {setGpuWatt(e.target.value)}} />
                    <input type="text" placeholder='Tezlik' onChange={(e) => {setGpuFreq(e.target.value)}} />
                    <input type="text" placeholder='Qiymət' onChange={(e) => {setGpuPrice(e.target.value)}} />
                    <input type="text" placeholder='Şəkil URL' onChange={(e) => {setGpuImg(e.target.value)}} />
                    <button onClick={addGpu}>+</button>
                    <a href="#">Məhsullara bax</a>
                </div>
                <div className='item'>
                    <span>Yaddaş:</span>
                    <input type="text" placeholder='Məhsulun adı' onChange={(e) => {setStorageName(e.target.value)}} />
                    <input type="text" placeholder='Yaddaş tipi' onChange={(e) => {setStorageType(e.target.value)}} />
                    <input type="text" placeholder='Həcmi' onChange={(e) => {setStorageCapacity(e.target.value)}} />
                    <input type="text" placeholder='Qiymət' onChange={(e) => {setStoragePrice(e.target.value)}} />
                    <input type="text" placeholder='Şəkil URL' onChange={(e) => {setStorageImg(e.target.value)}} />
                    <button onClick={addStorage}>+</button>
                    <a href="#">Məhsullara bax</a>
                </div>
                <div className='item'>
                    <span>Qida bloku:</span>
                    <input type="text" placeholder='Məhsulun adı' onChange={(e) => {setPsuName(e.target.value)}} />
                    <input type="text" placeholder='Watt' onChange={(e) => {setPsuWatt(e.target.value)}} />
                    <input type="text" placeholder='Qiymət' onChange={(e) => {setPsuPrice(e.target.value)}} />
                    <input type="text" placeholder='Şəkil URL' onChange={(e) => {setPsuImg(e.target.value)}} />
                    <button onClick={addPsu}>+</button>
                    <a href="#">Məhsullara bax</a>
                </div>
                <div className='item'>
                    <span>Keys:</span>
                    <input type="text" placeholder='Məhsulun adı' onChange={(e) => {setCaseName(e.target.value)}} />
                    <input type="text" placeholder='Form faktor' onChange={(e) => {setCaseFormFaktor(e.target.value)}} />
                    <input type="text" placeholder='Qiymət' onChange={(e) => {setCasePrice(e.target.value)}} />
                    <input type="text" placeholder='Şəkil URL' onChange={(e) => {setCaseImg(e.target.value)}} />
                    <button onClick={addCase}>+</button>
                    <a href="#">Məhsullara bax</a>
                </div>
                <div className='item'>
                    <span>Prosessor soyuducu:</span>
                    <input type="text" placeholder='Məhsulun adı' onChange={(e) => {setCoolerName(e.target.value)}} />
                    <input type="text" placeholder='Soyuducu tipi' onChange={(e) => {setCoolerType(e.target.value)}} />
                    <input type="text" placeholder='TDP' onChange={(e) => {setCoolerTdp(e.target.value)}} />
                    <input type="text" placeholder='Qiymət' onChange={(e) => {setCoolerPrice(e.target.value)}} />
                    <input type="text" placeholder='Şəkil URL' onChange={(e) => {setCoolerImg(e.target.value)}} />
                    <button onClick={addCooler}>+</button>
                    <a href="#">Məhsullara bax</a>
                </div>
                <div className='item'>
                    <span>Keys fan:</span>
                    <input type="text" placeholder='Məhsulun adı' onChange={(e) => {setCaseFanName(e.target.value)}} />
                    <input type="text" placeholder='Ölçü' onChange={(e) => {setCaseFanSize(e.target.value)}} />
                    <input type="text" placeholder='Qiymət' onChange={(e) => {setCaseFanPrice(e.target.value)}} />
                    <input type="text" placeholder='Şəkil URL' onChange={(e) => {setCaseFanImg(e.target.value)}} />
                    <button onClick={addCaseFan}>+</button>
                    <a href="#">Məhsullara bax</a>
                </div>
                <div className='item'>
                    <span>Monitor:</span>
                    <input type="text" placeholder='Məhsulun adı' onChange={(e) => {setMonitorName(e.target.value)}} />
                    <input type="text" placeholder='Ölçü' onChange={(e) => {setMonitorSize(e.target.value)}} />
                    <input type="text" placeholder='Ekran imkanı' onChange={(e) => {setMonitorResolution(e.target.value)}} />
                    <input type="text" placeholder='Keyfiyyəti' onChange={(e) => {setMonitorType(e.target.value)}} />
                    <input type="text" placeholder='Tezlik' onChange={(e) => {setMonitorFreq(e.target.value)}} />
                    <input type="text" placeholder='Qiymət' onChange={(e) => {setMonitorPrice(e.target.value)}} />
                    <input type="text" placeholder='Şəkil URL' onChange={(e) => {setMonitorImg(e.target.value)}} />
                    <button onClick={addMonitor}>+</button>
                    <a href="#">Məhsullara bax</a>
                </div>
            </div>
        </div>
    );
};

export default Depo;