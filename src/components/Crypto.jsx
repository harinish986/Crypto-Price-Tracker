import React from 'react';
import './CryptoInfo.css';

const Crypto = ({ name, img, symbol, price, volume, btc }) => {

    const roundPrice = Number(price).toFixed(3);
    const roundVol = Number(volume).toFixed(3);
    const roundBtc = Number(btc).toFixed(3);

    return (
        <div className='crypto-container'>
            <div className='crypto-row'>
                <div className='crypto'>
                    <img src={img} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='crypto-symbol'>{symbol}</p>
                </div>
                <div className='crypto-data'>
                    <p className='crypto-price'>${roundPrice}</p>
                    <p className='crypto-volume'>${roundVol.toLocaleString()}</p>
                    <p className='crypto-btc'>${roundBtc}</p>
                </div>
            </div>
        </div>
    );
};

export default Crypto;
