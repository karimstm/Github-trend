//https://api.github.com/search/repositories?q=created:%3E2020-07-19&sort=stars&order=desc&page=1&per_page=100

const fetch = require('node-fetch');
var moment = require('moment');

const { URLSearchParams } = require('url');
const params = new URLSearchParams();
const url = 'https://api.github.com/search/repositories?';

//Get the start of the last month
lastMonth = moment().subtract(1, 'months');
created_at = moment(lastMonth).format('YYYY-MM-DD');


params.append('q', `created:>${created_at}`);
params.append('sort', 'stars');
params.append('order', 'desc');
// By default we can only get 30 repos;
// Therefore, we need to provide these two params.
params.append('page', 1);
params.append('per_page', 100);

// Note: I did include the repos with null set to their language key
// We can neglect the null by checking against it.
const getLanguages = async (req, res) => {
    const languages = {};
    try {
        const result = await fetch(url + params)
        const body = await result.json();
        body.items.map(item => {
            const langDetails = { count: 1, list_of_repos: [] };
            if (languages[item.language] !== undefined)
            {
                languages[item.language].count++;
            }else {
                languages[item.language] = langDetails;
            }
            languages[item.language].list_of_repos.push(item);
        })
        return res.status(200).send(languages);
    } catch (error) {
        return res.status(404).send({});
    }
    
}

module.exports = {getLanguages};