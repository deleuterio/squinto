import React from 'react';
import { FontIcon, IconButton,
  GridList,
  GridTile,
  Paper, } from 'material-ui';

const Acting = React.createClass({

  // Static data

  styles: {
    middleCard: {
      className: 'mdl-card',
      style: {
        width: 'auto',
        paddingBottom: '20px',
      },
    },
    middleCardTitle: {
      className: 'mdl-card__title card-wide-image-home',
      style: {
        color: '#000',
      },
    },
  },

  texts: {
    block2: {
      title: 'Atuação',
      list: [
        {
          text: 'Consultoria',
          img: '/assets/area1.jpg',
          items: [
            'Contratos com fornecedores',
            'Contratos com clientes',
            'Acompanhamento fiscal, tributário e trabalhista perante todos os órgãos públicos',
            'Planejamento anual tributário',
            'Avaliação e aplicação das inovacões judiciais em matéria tributária',
            'Adequação dos objetivos sociais à previsão tributária mais benéfica',
          ],
        }, {
          text: 'Tributário',
          img: '/assets/area2.jpeg',
          items: [
            'Exceções de pre executividade',
            'Anulatórias de débitos',
            'Revisionais de débitos',
            'Declaratórias de constituição de créditos',
            'Impugnações administrativas',
            'Recursos administrativos',
            'Consultas órgãos públicos',
            'Regimes especiais (emissão documento único, modificação de regime tributário) Sefaz',
            'Regimes especiais de suspensão tributária (admissão temporária, Reidi, ex tarifário)',
            'Receita Federal do Brasil - RFB',
            'Compensação tributária',
          ],
        }, {
          text: 'Trabalhista',
          img: '/assets/area3.jpg',
          items: [
            'Defesas em reclamatórias',
            'Ações consignatórias',
            'Acompanhamento fiscalização Ministério do Trabalho',
            'Acompanhamento Inquérito Ministério Público do Trabalho',
            'Defesas em ação civil pública',
            'Acompanhamento de dissídios coletivos',
            'Negociação de acordos coletivos',
            'Contratação',
            'Segurança do trabalho',
            'Concessão de benefícios',
            'Advertências',
            'Apuração de falta grave',
            'Aplicação de justa causa',
            'Demissão',
          ],
        }, {
          text: 'Cível',
          img: '/assets/area4.jpg',
          items: [
            'Consignatórias contra fornecedores',
            'Anulatórias de débitos (cobrança irregular)',
            'Cautelares de sustação ou suspensão de protesto',
            'Cautelares em geral',
            'Revisional de contratos bancários',
            'Indenizatórias',
            'Defesas em ações indenizatórias em geral',
          ],
        }, {
          text: 'Societário - Empresarial',
          img: '/assets/area5.jpg',
          items: [
            'Criação de SCP',
            'Criação SPE',
            'Adequação societária',
            'Organização empresarial',
            'Adequação objetivo social',
            'Transformação',
            'Cisão',
            'Fusão',
            'Incorporação',
            'Demissão e retirada de sócio',
            'Recuperação judicial',
          ],
        }, {
          text: 'Criminal',
          img: '/assets/area6.jpeg',
          items: ['Defesa ação penal em crimes de natureza tributária'],
        },
      ],
    },
  },

  render() {
    const { styles, texts, props: { innerWidth } } = this;

    return (
      <Paper zDepth={2} rounded={false} {...styles.middleCard}>
        <div {...styles.middleCardTitle}>
          <button style={{ backgroundColor: '#FF9800' }}
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
            <h2 className='mdl-card__title-text' style={{ fontSize: '25px' }}>
              {texts.block2.title}</h2>
          </button>
        </div>
        <GridList
          cellHeight={200}
          cols={innerWidth == 'small' ? 1 : 2}
          style={{ width: innerWidth == 'small' ? '100%' : '70%',
            overflowY: 'auto',
            margin: '0 auto',
          }}>
          {_.map(texts.block2.list, ({ text, img }) =>
              <GridTile key={text} title={text}>
                <img src={img} />
              </GridTile>
          )}
        </GridList>
      </Paper>
    );
  },
});

export default Acting;
