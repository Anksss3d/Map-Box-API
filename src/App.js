import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {MDBBtn, MDBCardHeader, MDBCol, MDBFooter, MDBInput, MDBRow} from "mdbreact";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            longitude: -96,
            latitude: 33,
            zoom: 15,
            width: 300,
            height: 200,
            image_url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/-71.0525,42.357,15.83,0/500x500?access_token=pk.eyJ1IjoiYW5rc3NzM2QiLCJhIjoiY2s5MGZheTRnMDE3dzNrbzVjZmt1cG1wcyJ9.LIc7v2yNj2hJ1ay53Kr3Ig'
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const url = 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/'+this.state.longitude+','+this.state.latitude+','+this.state.zoom+',0/'+this.state.width+'x'+this.state.height+'?access_token=pk.eyJ1IjoiYW5rc3NzM2QiLCJhIjoiY2s5MGZheTRnMDE3dzNrbzVjZmt1cG1wcyJ9.LIc7v2yNj2hJ1ay53Kr3Ig';
        this.setState({
            image_url: url
        })
    }

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event){
        event.preventDefault();
        const url = 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/'+this.state.longitude+','+this.state.latitude+','+this.state.zoom+',0/'+this.state.width+'x'+this.state.height+'?access_token=pk.eyJ1IjoiYW5rc3NzM2QiLCJhIjoiY2s5MGZheTRnMDE3dzNrbzVjZmt1cG1wcyJ9.LIc7v2yNj2hJ1ay53Kr3Ig';
        this.setState({
            image_url: url
        })
    }

    render() {
      return (
        <div className="App container-fluid" >
          <h2>Map Box API PlayGround</h2>
            <hr />
            <form onSubmit={this.onSubmit}>
                <MDBRow>
                    <MDBCol size={2}>
                        <MDBInput valueDefault={this.state.longitude} type={"number"} label={"Longitude"} name={"longitude"} onChange={this.onChange} step={0.0001}  max={180} min={-180}/>
                    </MDBCol>
                    <MDBCol size={2}>
                        <MDBInput valueDefault={this.state.latitude} type={"number"} label={"Latitude"} name={"latitude"} onChange={this.onChange} step={0.0001} max={90} min={-90}/>
                    </MDBCol>
                    <MDBCol size={2}>
                        <div className="">
                            <label htmlFor="customRange1">Zoom (1-20)</label>
                            <input type="range" className="custom-range" id="customRange1" min={1} max={20} defaultValue={this.state.zoom} name={"zoom"} onChange={this.onChange}/>
                        </div>
                    </MDBCol>
                    <MDBCol size={2}>
                        <MDBInput valueDefault={this.state.width} type={"number"} label={"Width"} name={"width"} onChange={this.onChange} max={1280} min={1}/>
                    </MDBCol>
                    <MDBCol size={2}>
                        <MDBInput valueDefault={this.state.height} type={"number"} label={"Height"} name={"height"} onChange={this.onChange} max={1280} min={1}/>
                    </MDBCol>
                    <MDBCol size={2}>
                        <MDBBtn type={"submit"} className={"btn-primary"} >Render</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </form>
            <hr />
            <img className={"img img-responsive"} src={this.state.image_url}/>

            <MDBFooter className={"fixed"}>
                This is only development purpose application. The data is fetched from Map Box API.
            </MDBFooter>
        </div>
      );
    }
}

export default App;
