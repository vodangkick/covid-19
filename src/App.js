import React from 'react';
import styles from './App.module.css';

// import Cards from './components/Cards/Cards';
// import Charts from './components/Charts/Charts';
// import ContryPicker from './components/ContryPicker/ContryPicker';

import { Cards, Charts, CountryPicker } from './components';
import { fetchData } from './api';
import coronaImage from './images/coronaImage.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData, country: country
    })

    //console.log(fetchedData);
  }
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData
    })
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }

}

export default App;
