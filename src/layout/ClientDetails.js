import React, { Component } from 'react';
import '../assets/css/ClientDetails.css';

class ClientDetails extends Component{
    state = {
        loading: true,
        cities: null,
    }

    async componentDidMount(){
        //City API calling
        const where = encodeURIComponent(JSON.stringify({
                "name": {
                "$exists": true
            }
        }));
        const url = `https://parseapi.back4app.com/classes/Arzerbaijan_City?limit=10&order=-population&keys=name&where=${where}`;
        const response = await fetch(url, {
            headers: {
                'X-Parse-Application-Id': 'U8IxMR8jB8r3Qcpt3KatCfswzybeY9kPC2BHHBHf',
                'X-Parse-REST-API-Key': 'UhWgiW5HYZhgQbcaCO6VvZ5GZD9PFPdiMw3Fv1gE',
            }
        })
        const data = await response.json();
        this.setState({
            cities: data.results[0], 
            loading: false
        });
        console.log(this.state.cities.name);
    }

    render(){
        return(
            <form>
                <label>Müştəri kodu</label><br/>
                <input type="text" placeholder="0062226" /><br/>
                <label>Adı</label><br/>
                <input type="text" placeholder="Captain America Ltd" /><br/>
                <label>VÖEN</label><br/>
                <input type="text" placeholder="1234567891" /><br/>
                <label>Filial</label><br/>
                <select>
                    <option>Siyahıdan seçin</option>
                    <option>
                        {this.state.cities ? this.state.cities.name : 'Filiallar yüklənir'}
                    </option>
                </select>
            </form>
        )
    }
}

export default ClientDetails;