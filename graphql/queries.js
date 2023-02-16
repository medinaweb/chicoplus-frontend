import { gql } from "@apollo/client";


const GET_MENU_PRINCIPAL = gql`

query{
  menuPrincipal{
    data{
      attributes{
        logo{
          data{
            attributes{
              url
            }
          }
        }
        locale
        menuPrincipal{
          id
          name
          url
        }
        orcamento{
          id
          label
          url
        }
        demostracao{
          id
          label
          url
        }
        localizations{
          data{
            attributes{
              locale
              menuPrincipal{
                id
                name
                url
              }
              orcamento{
                id
                label
                url
              }
              demostracao{
                id
                label
                url
              }
            }
    			}
        }
      }
    }
  }
}
`

const GET_BANNER = gql`

query{
  banner{
    data{
      attributes{
        locale
        title
        description
        btnLink
        localizations{
          data{
            attributes{
              locale
              title
              description
              btnLink
            }
          }
        }
         bgcover{
          data{
            attributes{
              url
            }
          }
        }
        carousel{
        	slides{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
}

`
const GET_DIGITAL_PLATAFORMS = gql`


query {
  plataformaDigital {
    data{
      attributes{
        plataformaDigital{
          title
          description
        }
        singleFeature{
          data{
            attributes{
              url
            }
          }
        }
        funcionalidades {
          title
          description
          content
          icon {
            data {
              attributes{
                url
              }
            }
          }
        }
        locale
        localizations{
          data{
            attributes{
              locale
               plataformaDigital{
          title
          description
        }
        singleFeature{
          data{
            attributes{
              url
            }
          }
        }
        funcionalidades {
          title
          description
          content
          icon {
            data {
              attributes{
                url
              }
            }
          }
        }
            }
          }
        }
      }
    }
  }
}
`

const GET_FUNCIONALITIES = gql`

query {
  principaisFuncionalidade {
    data{
      id
      attributes {
        locale
        title{
          title
          description
        }
        funcionalidades {
          id
          title
          description
          content
          imagem {
            data{
              attributes{
                url
              }
            }
          }
        }
        localizations{
           data{
            id
            attributes {
              locale
              title{
                title
                description
              }
              funcionalidades {
                id
                title
                description
                content
                imagem {
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`

const GET_REPORTS_DOCUMENTS = gql`

query {
  producaoDeRelatoriosEDocumento {
    data{
      attributes{
        locale
        producaoRelatorios{
          id
          title
          description
        }
        listItems{
          id
          title
          available
        }
        featureImage{
          data{
            attributes{
              url
            }
          }
        } 
        localizations{
          data{
      attributes{
        locale
        producaoRelatorios{
          id
          title
          description
        }
        listItems{
          id
          title
          available
        }
        featureImage{
          data{
            attributes{
              url
            }
          }
        } 
        }
      }
        }
        }
      }
    }
  }

`

const MAIN_ADVANTAGES = gql`

query{
  principaisVantage {
    data{
      attributes{
        locale
        title{
          title
          description
        }
        listItems{
          id
          title
          available
        }
        featureImage {
          data{
            attributes{
              url
            }
          }
        }
        localizations{
           data{
            attributes{
              locale
              title{
                title
          description
        }
        listItems{
          id
          title
          available
        }
        featureImage {
          data{
            attributes{
              url
            }
          }
        }
      }
    }
        }
      }
    }
  }
}

`

const OPERATING_SYSTEMS = gql`

query {
  sistemasOperativo {
    data{
      attributes{
        locale
        operatingSystems{
          id
          title
          description
        }
        listItems{
          id
          title
          description
          available
        }
        featureImage{
          data {
            attributes{
              url
            }
          }
        }
        localizations{
          data{
      attributes{
        locale
        operatingSystems{
          id
          title
          description
        }
        listItems{
          id
          title
          description
          available
        }
        featureImage{
          data {
            attributes{
              url
            }
          }
        }
      }
    }
        }
      }
    }
  }
}

`

const TESTEMONIES = gql`

query {
  testemunho {
    data{
      attributes{
        locale
        title{
          id
          title
          description
        }
        testemonies{
          id
          foto {
            data{
              attributes{
                url
              }
            }
          }
          profissao
          name
          message
        }
        localizations{
          data{
            attributes{
              locale
              title{
                id
                title
                description
              }
        testemonies{
          id
          foto {
            data{
              attributes{
                url
              }
            }
          }
          profissao
          name
          message
        }
      }
    }
        }
      }
    }
  }
}
`
const PARTNERS = gql`

query {
  parceiro {
    data{
      id
      attributes{
        locale
        title {
          id
          title
          description
        }
        partners {
          id
          name
          logo {
            data{
              attributes{
                url
              }
            }
          }
          link
        }
        localizations{
            data{
      id
      attributes{
        locale
        title {
          id
          title
          description
        }
        partners {
          id
          name
          logo {
            data{
              attributes{
                url
              }
            }
          }
          link
        }
      }
    }
        }
      }
    }
  }
}

`

const PACKAGES_PRICING = gql`

query {
  planosEPreco {
    data {
      id
      attributes{
        locale
        packagesPrices{
          planType
          filial
          users
          clients
          button {
            id
            label
            url
          }
          listItems{
            id
            title
            available
          }
        }
        localizations{
          data {
      id
      attributes{
        locale
        packagesPrices{
          planType
          filial
          users
          clients
          button {
            id
            label
            url
          }
          listItems{
            id
            title
            available
          }
        }
        
      }
    }
        }
      }
    }
  }
}

`

const GET_FAQ = gql`

query {
  faq {
    data{
      id
      attributes{
        locale
        mainFaq{
          id
          questions
          answer
        }
        faq{
          id
          question
          answer
        }
        localizations{
            data{
      id
      attributes{
        locale
        mainFaq{
          id
          questions
          answer
        }
        faq{
          id
          question
          answer
        }
      }
    }
        }
      }
    }
  }
}

`

const GET_CONTACT_INFO = gql`

query {
  contacteNo {
    data{
      attributes{
        locale
        location{
          id
          title
          endereco1
          endereco2
        }
        phone{
          id
          title
          phone01
          phone02
        }
        emails{
          id
          title
          email01
          email02
        }
        localizations{
          data{
      attributes{
        locale
        location{
          id
          title
          endereco1
          endereco2
        }
        phone{
          id
          title
          phone01
          phone02
        }
        emails{
          id
          title
          email01
          email02
        }
      }
    }
        }
      }
    }
  }
}
 
`

const GET_ABOUTUS = gql`

query {
  sobreNo {
    data{
      id
      attributes{
        locale
        image{
          data{
            attributes{
              url
            }
          }
        }
        title
        content
        titleContentAbout{
          id
          title
          content
        }
        contentAbout
        localizations{
           data{
      id
      attributes{
        locale
        image{
          data{
            attributes{
              url
            }
          }
        }
        title
        content
        titleContentAbout{
          id
          title
          content
        }
        contentAbout
      }
    }
        }
      }
    }
  }
}
`

const GET_RODAPE = gql`

query{
  rodaPe{
    data{
      attributes{
        locale
        logo{
          data{
            attributes{
              url
            }
          }
        }
        socialMedia{
          name
          url
          icon{
            data{
              attributes{
                url
              }
            }
          }
        }
        linksUteis{
          name
          url
        }
        menu{
          name
          url
        }
        contact{
          endereco
          telefone
          email
        }
        localizations{
          data{
      attributes{
        locale
        logo{
          data{
            attributes{
              url
            }
          }
        }
        socialMedia{
          name
          url
          icon{
            data{
              attributes{
                url
              }
            }
          }
        }
        linksUteis{
          name
          url
        }
        menu{
          name
          url
        }
        contact{
          endereco
          telefone
          email
        }
        
      }
    }
        }
      }
    }
  }
}
`


const GET_PRIVACY_POLICY = gql`

query{
  politicaDePrivacidade {
    data{
      attributes{
        locale
        privacyPolicy{
          title
          content
        }
        localizations{
          data{
            attributes{
              locale
              privacyPolicy{
                title
                content
              }
            }
          }
        }
      }
    }
  }
}

`

const GET_CHICO_MARCA_REGISTADA = gql`

query{
  chicoPlusMarcaRegistada{
    data{
      attributes{
        locale
        title
        content
        localizations{
          data{
            attributes{
              locale
              title
              content
            }
          }
        }
      }
    }
  }
}
`

const GET_LEI_MICROFINANCAS = gql`

query{
  leiDeMicrofinanca{
    data{
      attributes{
        locale
        title
        content
        localizations{
          data{
            attributes{
              locale
              title
              content
           }
          }
        }
      }
    }
  }
}
`

const GET_LEI_PROTECAO_DADOS = gql`

query{
  leiProtecaoDeDado{
    data{
      attributes{
        locale
        title
        content
        localizations{
          data{
            attributes{
              locale
              title
              content  
    			 }
   				}
        }
      }
    }
  }
}
`
const GET_POLITICA_LICENCA_UTILIZACAO = gql`

query{
  politicaDeLicencaDeUtilizacao{
    data{
      attributes{
        locale
        title
        content
        localizations{
         data{
          attributes{
           locale
            title
           content  
    			 }
   				}
        }
      }
    }
  }
}
`

const GET_REGULAMENTO_CENTRAL_CV = gql`

query{
  regulamentoBancoCentralCv{
    data{
      attributes{
        locale
        title
        content
          localizations{
            data{
              attributes{
                locale
                title
                content  
            }
   				}
        }
      }
    }
  }
}
`



export {

  GET_MENU_PRINCIPAL,
  GET_BANNER,
  GET_DIGITAL_PLATAFORMS,
  GET_FUNCIONALITIES,
  GET_REPORTS_DOCUMENTS,
  MAIN_ADVANTAGES,
  OPERATING_SYSTEMS,
  TESTEMONIES,
  PARTNERS,
  PACKAGES_PRICING,
  GET_FAQ,
  GET_CONTACT_INFO,
  GET_ABOUTUS,
  GET_RODAPE,
  GET_PRIVACY_POLICY,
  GET_CHICO_MARCA_REGISTADA,
  GET_LEI_MICROFINANCAS,
  GET_LEI_PROTECAO_DADOS,
  GET_POLITICA_LICENCA_UTILIZACAO,
  GET_REGULAMENTO_CENTRAL_CV

}