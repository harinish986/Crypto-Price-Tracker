import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Crypto from './Crypto';
import './CryptoInfo.css';

const CryptoInfo = () => {
    const [cryptocurrency, setCryptocurrency] = useState([]);
    const [search, setSearch] = useState('');

    const [ascending, setAscending] = useState(true);

    useEffect(() => {
        axios.get('https://api.coinranking.com/v2/coins')
            .then(res => {
                setCryptocurrency(res.data.data.coins || []);
            })
            .catch(error => alert('!!!ERROR!!!'));
    }, []);

      const fetchCoins = useCallback(async () => {
        try {
          const response = await axios.get('https://api.coinranking.com/v2/coins');
          const data = response.data.data.coins;
      
          const sortedCoins = ascending
            ? data.sort((a, b) => a.price - b.price)
            : data.sort((a, b) => b.price - a.price);
      
            setCryptocurrency(sortedCoins);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }, [ascending]);
    
      const handleSort = () => {
        setAscending(!ascending);
        fetchCoins();
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
                <button onClick={handleSort} className='crypto-btn'>Sort {ascending ? 'Descending' : 'Ascending'}</button>
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
