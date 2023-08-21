import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import Crypto from './Crypto';
import './CryptoInfo.css';

const CryptoInfo = () => {
    const [cryptocurrency, setCryptocurrency] = useState([]);
    const [search, setSearch] = useState('');
    const [ascending, setAscending] = useState(true);

    const fetchCoins = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/crypto');
            const data = response.data;

            setCryptocurrency(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    useEffect(() => {
        fetchCoins();
    }, [fetchCoins]);

    const handleSort = () => {
        setAscending(!ascending);
        sortCryptocurrency();
    };

    const sortCryptocurrency = () => {
        const sortedCoins = [...cryptocurrency].sort((a, b) => {
            if (ascending) {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });

        setCryptocurrency(sortedCoins);
    };

    const changeHandler = (e) => {
        setSearch(e.target.value);
    };

    const currencyFilter = cryptocurrency.filter(curr =>
        curr.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='crypto-app'>
            <div className='crypto-search'>
                <h1 className='crypto-text'>Crypto Tracker</h1>
                <button onClick={handleSort} className='crypto-btn'>
                    Sort {ascending ? 'Descending' : 'Ascending'}
                </button>
                <form>
                    <input
                        type='text'
                        placeholder='Type Currency Name'
                        className='crypto-input'
                        onChange={changeHandler}
                    />
                </form>
            </div>
            {currencyFilter.map(curr => (
                <Crypto
                    key={curr.uuid}
                    name={curr.name}
                    price={curr.price}
                    img={curr.iconUrl}
                    symbol={curr.symbol}
                    volume={curr.marketCap}
                    btc={curr.btcPrice}
                />
            ))}
        </div>
    );
};

export default CryptoInfo;
