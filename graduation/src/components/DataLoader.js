
import {default as isoFetch} from 'isomorphic-fetch';

export default function DataLoader () {
    isoFetch('/data.json')
        .then(function(response) {
            return response.json()
        }).then(function(json) {
        console.log('parsed json', json)
    }).catch(function(ex) {
        console.log('parsing failed', ex)
    })
}
