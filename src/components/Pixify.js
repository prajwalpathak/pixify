//Secret Key- 3e5388e20dfd9aea92f81635b73e91d648bc91fa98b8b6a86ede8e96b2b790f3
//Access Key- 1910789059b99721c1a822de028fb3c52d1ff19ae4beb7cb047c1d278aac9285
import React from 'react';

class Pixify extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch(`https://api.unsplash.com/search/photos/?client_id=1910789059b99721c1a822de028fb3c52d1ff19ae4beb7cb047c1d278aac9285&query=sad `)
        .then(res => res.json())
        .then(res => console.log(res));
    }

    render() {
        return (
            <div>
                <h1>Pixify</h1>
                {/* <Navbar />
                <Header />
                <SeacrhBar />
                <Images /> */}
            </div>
        );
    }
}

export default Pixify;