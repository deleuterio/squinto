import React from 'react';
import { Card, CardTitle, CardText, CardMedia, FontIcon, CardActions, FlatButton } from 'material-ui';

const Contact = React.createClass({

  // Static data

  styles: {
    grid: {
      className: 'mdl-grid',
    },
    cell: {
      className: 'mdl-cell mdl-cell--12-col',
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
      <div {...styles.grid} >
        <Card {...styles.cell} >
          <CardTitle title='sQuinto Sociedade de Advogados' />
          <CardText>
            <p>Rua Ministro Orozimbo Nonato,	 102 -	 Edifício Icon- Bloco A, Conj. 2208 e 2210</p>
            <p>Cidade: Nova Lima / MG</p>
            <p>Bairro: Vila da Serra</p>
            <p>CEP: 34000-000</p>
            <p><FontIcon className='material-icons'>phone</FontIcon> +55 (31) 3286 7041</p>
            <p><FontIcon className='material-icons'>contact_mail</FontIcon>
              <a href='mailto:squinto@squinto.adv.br?Subject=Contato'
                style={{ marginLeft: '10px' }} >
              squinto@squinto.adv.br</a></p>
            <p><FontIcon className='material-icons'>contact_mail</FontIcon>
              <a href='mailto:diretoria@squinto.adv.br?Subject=Contato'
                style={{ marginLeft: '10px' }} >
              diretoria@squinto.adv.br</a></p>
          </CardText>
          <CardMedia >
            <iframe src={mapUrl} frameBorder='0' style={{ heigth: '500px' }} allowFullScreen/>
          </CardMedia>
          <CardActions>
            <FlatButton {...styles.goMap} />
          </CardActions>
        </Card>
      </div>
    );
  },
});

export default Contact;
