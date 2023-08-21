const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/crypto', async (req, res) => {
    try {
        const response = await axios.get('https://api.coinranking.com/v2/coins');
        const coins = response.data.data.coins || [];
        res.json(coins);
    } catch (error) {
        console.error('Error while fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
