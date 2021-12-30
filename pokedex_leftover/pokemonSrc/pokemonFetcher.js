import React from 'react';
export default class PokemonFetcher extends React.Component {
    constructor(props){
        super(props);   
        this.myInit = { method: 'GET',
            headers: {
            },
            mode: 'cors',
            cache: 'default' 
        };

        this.state = {
            value : (
                <p>
                    First test Pokedex.
                </p>
            )
        };
        this.promiseFetcher();
    }

    render() {
        return this.state.value;
    }

    async promiseFetcher(){
        this.state.state = false;
        var myRequest = new Request('https://pokeapi.co/api/v2/pokemon/'+this.props.pokemonName, this.myInit);

        var pokemonPromise = fetch(myRequest).then((response)=>response.json()).then((data) => data.sprites.front_shiny);
        var pokemonSprite = await pokemonPromise;
        console.log(pokemonSprite);

        const page = await (
            <img src={pokemonSprite} alt="logo" />
        );
        this.setState({value: page});
    }

    componentDidMount() {  }
    componentWillUnmount() {  }
}