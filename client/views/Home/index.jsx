import React from 'react';
import { List, ListItem, Subheader, Divider, FontIcon } from 'material-ui';

const Home = React.createClass({

  // Static data

  styles: {
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
        fontSize: '60px',
        paddingTop: '60px',
        lineHeight: 1,
        color: '#FFF',
        fontWeight: 500,
      },
    },
    middleCard: {
      className: 'mdl-card mdl-shadow--2dp',
      style: {
        width: 'auto',
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
      className: 'mdl-card mdl-shadow--2dp',
      style: {
        width: 'auto',
      },
    },
    secondaryTitle: {
      style: {
        color: '#000',
        fontSize: 'large',
      },
    },
  },

  texts: {
    topCardText: 'sQuinto Advocacia Empresarial',
    block1: {
      title: 'A empresa',
      text: 'Somos uma empresa de advocacia com atendimento personalizado e atuação em ' +
        'todas as áreas do direito direcionado às empresas.',
      contents: [
        {
          title: 'Valores',
          text: 'Confiabilidade, Responsabilidade e Ética.',
        }, {
          title: 'Objetivos',
          text: 'Desenvolver estratégias personalizadas de forma a promover o melhor ' +
            'aproveitamento na aplicação da legislação em favor do cliente.',
        }, {
          title: 'Visão',
          text: 'Consultoria e Assessoria Jurídica com excelência em conhecimento, ' +
            'aplicação e ética.',
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

  render() {
    const { styles, texts } = this;
    return (
      <div>

        <div {...styles.topCard}>
        	<div {...styles.topCardContent}>{texts.topCardText}</div>
        </div>

        <div {...styles.cardWide}>
          <div className='mdl-card__title'>
            <h2 className='mdl-card__title-text'>{texts.block1.title}</h2>
          </div>
          <div className='mdl-card__supporting-text'>
            <p><b>{texts.block1.text}</b></p>
            {_.map(texts.block1.contents, ({ title, text }) => [
              <h4 className='mdl-card__title-text' {...styles.secondaryTitle}>{title}</h4>,
              <p>{text}</p>,
            ])}
          </div>
        </div>

        <div {...styles.middleCard}>
          <div {...styles.middleCardTitle}>
            <h2 className='mdl-card__title-text'>{texts.block2.title}</h2>
          </div>
          <div className='mdl-card__supporting-text'>
            {_.map(texts.block2.list, ({ text, items }) => [
              <Subheader key={text}><h4 {...styles.secondaryTitle}>{text}</h4></Subheader>,
              ..._.map(items, (i, index) =>
                <ListItem key={`${text}-${index}`} secondaryText={i} disabled={true}
                  leftIcon={<FontIcon className='material-icons'>gavel</FontIcon>} />),
              <Divider />,
            ])}
          </div>
        </div>

      </div>
    );
  },
});

export default Home;
