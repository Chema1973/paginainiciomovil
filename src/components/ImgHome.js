import React from 'react';
// import { StyleSheet, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import DataContext from './DataContext';
// import Coordenadas from './Coordenadas';
import ImgIcono from './ImgIcono';
var data = require('../data/data');



const imgCentral = require('../assets/images/home/' + data.dataConf.centralimage);
const imgCentral_90 = require('../assets/images/home/' + data.dataConf.centralimage_90);



class ImgHome extends React.Component{
    static contextType = DataContext;


    constructor(props) {
        super(props);
        this.refImgCentral = React.createRef();
        this.state = {
            imgCentral: imgCentral,
            imgCentral_90: imgCentral_90,
            widthScreen: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            heightScreen:window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight,
            widthImg: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - data.dataConf.marginbody, // document.getElementById('imgHome').offsetWidth,
            heightImg: (window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight) - data.dataConf.marginbody //  document.getElementById('imgHome').offsetHeight
        };
    }

 
    componentDidMount(){

        if (!this.refImgCentral) {
            this.refImgCentral = React.createRef();
        }
        const appHeader = document.getElementsByClassName("App-header")[0];

        console.log('componentDidMount');
        // console.log(appHeader.clientHeight);
        window.addEventListener('resize', this.updateDimensions.bind(this));
        const oHeight = document.documentElement.clientHeight|| document.body.clientHeight || window.innerHeight;
        const oWidth = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        let oImgCentral;
        if (oHeight > oWidth) {
            // console.log('Vertical - Es más alto');
            /* this.setState({
                widthScreen: undefined,
                heightScreen: document.documentElement.clientHeight|| document.body.clientHeight || window.innerHeight,
                widthImg: (document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth) - data.dataConf.marginbody, // oImgSize.width,  //  window.innerWidth - data.dataConf.marginbody, // document.getElementById('imgHome').offsetWidth,
                heightImg: (document.documentElement.clientHeight|| document.body.clientHeight || window.innerHeight) - data.dataConf.marginbody //  oImgSize.height // window.innerHeight - data.dataConf.marginbody //  document.getElementById('imgHome').offsetHeight
            }); */
            oImgCentral = imgCentral
            //imgCentral_90: imgCentral_90,
        } else {
            // console.log('Horizontal - Es más ancho');
            /* this.setState({
                widthScreen: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
                heightScreen: document.documentElement.clientHeight|| document.body.clientHeight || window.innerHeight,
                widthImg: (document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth) - data.dataConf.marginbody, // oImgSize.width,  //  window.innerWidth - data.dataConf.marginbody, // document.getElementById('imgHome').offsetWidth,
                heightImg: (document.documentElement.clientHeight|| document.body.clientHeight || window.innerHeight) - data.dataConf.marginbody //  oImgSize.height // window.innerHeight - data.dataConf.marginbody //  document.getElementById('imgHome').offsetHeight
            }); */
            oImgCentral = imgCentral_90
            // imgCentral_90: ,
        }
        this.setState({
            imgCentral: oImgCentral,
            widthScreen: appHeader.clientWidth, // document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            heightScreen: appHeader.clientHeight, // document.documentElement.clientHeight|| document.body.clientHeight || window.innerHeight,
            widthImg: (document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth) - data.dataConf.marginbody, // oImgSize.width,  //  window.innerWidth - data.dataConf.marginbody, // document.getElementById('imgHome').offsetWidth,
            heightImg: (document.documentElement.clientHeight|| document.body.clientHeight || window.innerHeight) - data.dataConf.marginbody //  oImgSize.height // window.innerHeight - data.dataConf.marginbody //  document.getElementById('imgHome').offsetHeight
        });
        this.context.widthImg = this.state.widthImg;
        this.context.heightImg = this.state.heightImg;
        this.context.widthScreen = this.state.widthScreen;
        this.context.heightScreen = this.state.heightScreen;

        console.log('Chema::Punto De Control::');
        console.log(document.getElementById("imgHome").style);

        /* console.log(window.innerWidth + ' || ' + document.documentElement.clientWidth + ' || ' + document.body.clientWidth,);
        console.log('Chema::Punto De Control::DidMouth');
        console.log(this.context.widthImg + ' - ' + this.context.heightImg);
        console.log(this.context.widthScreen + ' - ' + this.context.heightScreen); */
    }


    getWindowWidth = () => {
        return (document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth);
        // return "100%";
    }

    getWindowHeight= () => {
        return (document.documentElement.clientHeight|| document.body.clientHeight || window.innerHeight);
        // return "100%";
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this));
    }

    updateDimensions = () => {
        console.log('updateDimensions::')
        
        const appHeader = document.getElementsByClassName("App-header")[0];
        console.log(appHeader);
        console.log(this.getWindowWidth() + " - " + this.getWindowHeight());
        // clientHeight
        // clientWidth
        const oHeight = document.documentElement.clientHeight|| document.body.clientHeight || window.innerHeight;
        const oWidth = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;

        let oImgCentral;
        if (oHeight > oWidth) {
            // console.log('Vertical - Es más alto');
            /* this.setState({
                widthScreen: undefined,
                heightScreen: this.getWindowHeight(),
                widthImg: this.getWindowWidth() - data.dataConf.marginbody,
                heightImg: this.getWindowHeight() - data.dataConf.marginbody
            }); */
            oImgCentral = imgCentral
        } else {
            // console.log('Horizontal - Es más ancho');
            /* this.setState({
                widthScreen: this.getWindowWidth(),
                heightScreen: this.getWindowHeight(),
                widthImg: this.getWindowWidth() - data.dataConf.marginbody,
                heightImg: this.getWindowHeight() - data.dataConf.marginbody
            }); */
            oImgCentral = imgCentral_90
        } 
        this.setState({
            imgCentral: oImgCentral,
            widthScreen: appHeader.clientWidth, // this.getWindowWidth(), // 
            heightScreen: appHeader.clientHeight, // this.getWindowHeight(), // 
            widthImg: this.getWindowWidth() - data.dataConf.marginbody,
            heightImg: this.getWindowHeight() - data.dataConf.marginbody
        });
        this.context.widthScreen = this.state.widthScreen;
        this.context.heightScreen = this.state.heightScreen;
        this.context.widthImg = this.state.widthImg;
        this.context.heightImg = this.state.heightImg;
        this.forceUpdate();
        // El problema que se estaba dando es que al Maximizar o Minimizar la ventana
        // entraba aquí, lanzaba el render y luego actulizaba las dimensiones.
        // Esto provocaba un error en el tamaño de la imagen, que mantenía las previas

/*      console.log(window.innerWidth + ' || ' + document.documentElement.clientWidth + ' || ' + document.body.clientWidth,);
        console.log('Chema::Punto De Control::updateDimension');
        console.log(this.context.widthImg + ' - ' + this.context.heightImg);
        console.log(this.context.widthScreen + ' - ' + this.context.heightScreen); */
      };
      
      oPrueba = (evt) => {
        // console.log('oPrueba');
      };
    render(){
        /* var sContent = this.context.widthImg + ' - ' +
                this.context.heightImg + ' - ' +
                this.context.widthScreen + ' - ' +
                this.context.heightScreen + ' - ' + 
                window.screen.height + ' - ' + 
                window.screen.width; */

                
        if (this.context.widthImg === 0 || this.context.heightImg === 0) {
            return (
                <img
                style={{display:"flex"}} 
                width={this.state.widthScreen} 
                height={this.state.heightScreen} 
                border="0" 
                id="imgHome" 
                src={imgCentral} 
                alt="Imagen Central. Cargando..." 
            />
            )
        } else {
        return (
            
            <div style={{backGroundColor:'black',width: this.state.widthScreen, height: this.state.heightScreen}}>
               
            <img
            style= {{flex:1 , width: "100%", height: "100%"}}  
                ref={this.refImgCentral}
               className="fillImage"
                width="100%" 
                height="100%" 
                border="0" 
                id="imgHome" 
                src={this.state.imgCentral} 
                alt="Imagen Central" 
                useMap="#MapHomePage"
            />
            <map name="MapHomePage" id="mpHomePage"></map>
            {data.dataIco.map(icono=>
                            <ImgIcono key={icono.id} Referencia={this.refImgCentral} IconoObjecto={icono} AnchoImagen={this.state.widthImg} AltoImagen={this.state.heightImg}  AnchoPantalla={this.state.widthScreen}  AltoPantalla={this.state.heightScreen} />
                        )}
            </div>
        );
        }
    }
}

export default ImgHome;

// style= {{flex:1 , width: this.state.widthScreen, height: this.state.heightScreen}}  
// width={this.state.widthScreen} 
// height={this.state.heightScreen} 


// style={{display:"flex"}} 
// --> Para la imagen
/* var sContent = this.context.widthScreen + ' - ' +
                this.context.heightScreen + ' - ' + 
                window.screen.height + ' - ' + 
                window.screen.width;
<textarea rows = "5" cols = "50" 
className="textAreaPrueba"
onChange={this.oPrueba}
value={sContent}>

</textarea> */