import React from 'react';
import { Card, CardTitle, CardText, CardMedia, FontIcon, CardActions, FlatButton, Paper } from 'material-ui';

const Contact = React.createClass({

  // Static data

  styles: {
    grid: {
      className: 'mdl-grid',
    },
    cellCard: {
      className: 'mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--12-col-phone',
    },
    middleCard: {
      style: {
        width: 'auto',
        backgroundColor: '#A7FFEB',
      },
    },
    goMap: {
      secondary: true,
      href: 'https://www.google.com.br/maps/place/Condom%C3%ADnio+Icon/@-19.984835,-43.9493358,17z/data=!3m1!4b1!4m5!3m4!1s0xa6bd55b8461595:0x3860dab80e889cb2!8m2!3d-19.9848401!4d-43.9471471?hl=pt-BR',
      icon: <FontIcon className='material-icons'>place</FontIcon>,
      labelPosition: 'before',
      label: 'Ver Mapa',
    },
  },
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.563882241157!2d-43.949335785590094!3d-19.984835045176577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bd55b8461595%3A0x3860dab80e889cb2!2sCondom%C3%ADnio+Icon!5e0!3m2!1spt-BR!2sbr!4v1471946676037',

  render() {
    const { styles, mapUrl } = this;
    return (
      <Paper zDepth={0} rounded={false} {...styles.middleCard}>
        <div className='mdl-grid' >
          <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-cell--middle	mdl-layout--small-screen-only">
            <ul className="mdl-list">
              <li className="mdl-list__item">
                <button style={{ backgroundColor: '#FF9800' }}
                  className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                <h2 className='mdl-card__title-text' style={{ fontSize: '25px' }}>Contato</h2>
                </button>
              </li>
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-icon" style={{ color: '#00796b' }}>phone</i>
                +55 (31) 3286-7041
              </span>
              </li>
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-icon" style={{ color: '#00796b' }}>contact_mail</i>
                <a href='mailto:squinto@squinto.adv.br?Subject=Contato'
                  style={{ marginLeft: '10px' }} >
                squinto@squinto.adv.br</a>
              </span>
              </li>
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-icon" style={{ color: '#00796b' }}>contact_mail</i>
                <a href='mailto:diretoria@squinto.adv.br?Subject=Contato'
                  style={{ marginLeft: '10px' }} >
                diretoria@squinto.adv.br</a>
              </span>
              </li>
              <li className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-icon" style={{ color: '#00796b' }}>place</i>
                Rua Ministro Orozimbo Nonato, 102 - Edifício Icon- Bloco A, Conj. 2208 e 2210
              </span>
              </li>
            </ul>
          </div>
          <div className="mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-cell--middle	">
            <Card>
              {/* <CardText>
                Rua Ministro Orozimbo Nonato, 102 - Edifício Icon- Bloco A, Conj. 2208 e 2210<br/>
                Cidade: Nova Lima / MG<br/>
                Bairro: Vila da Serra<br/>
                CEP: 34000-000<br/>
              </CardText> */}
              <CardMedia >
                <div dangerouslySetInnerHTML={_.zipObject(['__html'], ['<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14998.255057277041!2d-43.947147!3d-19.98484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3860dab80e889cb2!2sCondom%C3%ADnio+Icon!5e0!3m2!1spt-BR!2sbr!4v1472219802068" height="400"  frameborder="0" style="border:0; width:100%" allowfullscreen></iframe>'])} />
                {/* <iframe src={mapUrl} frameBorder='0' style={{ heigth: '500px' }} allowFullScreen/> */}
              </CardMedia>
              <CardActions>
                <FlatButton {...styles.goMap} />
              </CardActions>
            </Card>
          </div>
        </div>
      </Paper>
    );
  },
});

export default Contact;
