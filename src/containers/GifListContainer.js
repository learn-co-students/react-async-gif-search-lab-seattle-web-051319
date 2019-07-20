import React, { Component, Fragment } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


const URL = 'http://api.giphy.com/v1/gifs/search?q='
const API_KEY = '&api_key=dc6zaTOxFJmzC&rating=g'

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }
    
    fetchGifs = term => {
        fetch(URL + term + API_KEY)
        .then(res => res.json())
        .then(json => {
            this.setState({ gifs: json.data.slice(0, 3) })
        })
    }

    render() {
        return (
            <Fragment>
                <GifSearch search={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </Fragment>
        )
    }
}