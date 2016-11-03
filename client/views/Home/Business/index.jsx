import React from 'react';
import { CardTitle, Card, CardMedia, CardText, Paper } from 'material-ui';

const Business = React.createClass({

  // Static data

  styles: {
    cardWide1: {
      style: {
        width: 'auto',
        background: '#00796B',
      },
    },
    grid: {
      className: 'mdl-grid',
      ref: 'noReply',
    },
    cell: {
      className: 'mdl-cell mdl-cell--4-col mdl-cell--12-col-phone',
    },
  },

  texts: {
    block1: {
      contents: [
        {
          title: 'Valores',
          text: 'Confiabilidade, Responsabilidade e Ética.',
          img: '/assets/puzzle1.png',
        }, {
          title: 'Objetivos',
          text: 'Desenvolver estratégias personalizadas de forma a promover o melhor ' +
            'aproveitamento na aplicação da legislação em favor do cliente.',
          img: '/assets/puzzle2.png',
        }, {
          title: 'Visão',
          text: 'Consultoria e Assessoria Jurídica com excelência em conhecimento, ' +
            'aplicação e ética.',
          img: '/assets/puzzle3.png',
        },
      ],
    },
  },

  render() {
    const { styles, texts } = this;

    return (
      <Paper zDepth={0} rounded={false} {...styles.cardWide1}>
        <div {...styles.grid} >
          {_.map(texts.block1.contents, ({ title, text, img }) =>
            <div {...styles.cell} key={title}>
              <Card style={{ height: '100%' }} >
                <CardMedia
                  overlay={<CardTitle title={title} />} >
                  <img src={img} />
                </CardMedia>
                <CardText>
                  <p style={{ fontSize: '18px' }}>{text}</p>
                </CardText>
              </Card>
            </div>
          )}
        </div>
      </Paper>
    );
  },
});

export default Business;
