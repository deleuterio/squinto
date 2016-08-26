import React from 'react';
import { List, ListItem, Divider, CardTitle, FontIcon, IconButton, Card,
  CardMedia,
  CardText,
  GridList,
  Subheader,
  GridTile,
  Paper,
  Avatar, } from 'material-ui';
import NavigationHome from 'material-ui/svg-icons/action/home';
import Contact from '../Contact/index.jsx';

const Home = React.createClass({

  // Static data

  styles: {
    title: { cursor: 'pointer' },
    bar: { position: 'fixed' },
    topCard: {
      className: 'mdl-typography--text-center',
      style: {
        position: 'relative',
        height: '400px',
        width: 'auto',
        backgroundColor: '#f3f3f3',
        background: 'url(\'./assets/stf1.jpg\') center 30% no-repeat',
        backgroundSize: 'cover',
      },
    },
    topCardContent: {
      style: {
        marginTop: '170px',
        fontSize: '20px',
        lineHeight: 1,
        color: '#FFF',
        fontWeight: 500,
      },
    },
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
        height: '176px',
        background: 'url(\'./assets/stf3.jpg\') center / cover',
      },
    },
    cardWide: {
      className: 'mdl-card',
      style: {
        width: 'auto',
      },
    },
    cardWide1: {
      style: {
        width: 'auto',
        background: '#00796B',
      },
    },
    secondaryTitle: {
      style: {
        color: '#000',
        fontSize: 'large',
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
    topCardText: 'sQuinto Advocacia Empresarial',
    block1: {
      title: 'A empresa',
      text: 'Atendimento personalizado em todas as áreas do direito direcionado às empresas',
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
    block2: {
      title: 'Atuação',
      list: [
        {
          text: 'Consultoria',
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
          items: ['Defesa ação penal em crimes de natureza tributária'],
        },
      ],
    },
  },

  getInitialState() {
    return { positions: {}, innerWidth: innerWidth < 840 ? '100%' : '70%' };
  },

  // lifecycle

  componentWillUnmount() {
    // window.removeEventListener('resize', this.handleResize);
    // window.removeEventListener('resize', this.handleScroll);
  },

  componentDidMount() {
    // window.addEventListener('resize', this.handleResize);
    // window.addEventListener('scroll', this.handleScroll, true);
    this.handleScroll();
    this.handleResize();
  },

  // Handlers

  handleScroll(e) {
    this.setState({ innerWidth: innerWidth < 840 ? '100%' : '70%' });
  },

  handleResize(e) {
    const { refs } = this;
    _.zipObject(_.keys(refs), _.map(refs, r => r.offsetTop));
    this.setState(_.zipObject(_.keys(refs), _.map(refs, r => r.offsetTop)));
  },

  render() {
    const { styles, texts, props: { innerWidth } } = this;

    return (
      <div ref='master' onScroll={this.handleScroll}>

        <Paper zDepth={2} rounded={false} {...styles.topCard}>
          <img src='logo-full-white.png' style={{ height: '135px' }}/>
        	<div {...styles.topCardContent}>{texts.block1.text}</div>
        </Paper>

        <Paper zDepth={0} rounded={false} {...styles.cardWide1} ref='first'>
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
          {/* <div className='mdl-card__supporting-text'>
            <p><b>{texts.block1.text}</b></p>
            {_.map(texts.block1.contents, ({ title, text }) => [
              <h4 className='mdl-card__title-text' {...styles.secondaryTitle}>{title}</h4>,
              <p>{text}</p>,
            ])}
          </div> */}
        </Paper>

        <Paper zDepth={2} rounded={false} {...styles.middleCard} ref='second'>
          <div {...styles.middleCardTitle}>
            <button style={{ backgroundColor: '#FF9800' }}
              className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
            <h2 className='mdl-card__title-text' style={{ fontSize: '25px' }}>{texts.block2.title}</h2>
            </button>
          </div>
          <GridList
            cellHeight={120}
            cols={3}
            style={{ width: innerWidth < 840 ? '100%' : '70%',
              overflowY: 'auto',
              margin: '0 auto',
            }}>
            {_.map(texts.block2.list, ({ text, items }) => [
              <Subheader><h4 {...styles.secondaryTitle}><ListItem
                disabled={true}
                leftAvatar={
                  <Avatar icon={<FontIcon className='material-icons'>gavel</FontIcon>} />
                }>
                {text}</ListItem></h4></Subheader>,
              ..._.map(items, (i, index) =>
                <GridTile key={i} >
                <div className="mdl-card mdl-shadow--2dp" style={{ padding: '14px', width: '100%', background: '#00796B', minHeight: '118px' }}>
                    <h2 className='mdl-card__title-text' style={{ color: 'white', fontSize: '18px', marginTop: '0px' }}>{i}</h2>
                </div>
                </GridTile>),
            ])}
          </GridList>
        </Paper>
        <Contact />

      </div>
    );
  },
});

export default Home;
