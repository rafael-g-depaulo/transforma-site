import React from 'react'
import { storiesOf } from '@storybook/react'

import Member from './Member'
import styled from 'styled-components'

const Box = styled.div`
`

const description = ""
  + "Ativista Cultural desde a década de 1980, coordenou o Setorial de Cultura do PT/DF e atuou como Conselheiro efetivo no Conselho de Administração do FAC -  Fundo de Apoio à Cultura, no Conselho de Cultura do Distrito Federal, no Conselho de Desenvolvimento do Turismo e no Conselho de Desenvolvimento Social e Econômico do DF. Tem grande experiência em atividades de Assessoramento, Coordenação e Direção em órgãos dos Poderes Executivo e Legislativo. Trabalhou no Ministério da Cultura, Secretaria do Patrimônio da União, além da Secretaria de Cultura e da Fundação Cultural do DF. Atuou como Assessor na Câmara Legislativa, na Câmara dos Deputados e no Senado Federal. Recentemente, participou como Coordenador de Sustentabilidade em importantes projetos socioculturais, como o Sarau EnconTraços, Festival COMA, 8º Fórum Mundial da Água, Porão do Rock e MID - Movimento Internacional de Dança."

storiesOf("Member", module)
  .add("default", () => <Box><Member /></Box>)
  .add("with stuff", () => <Box><Member description={description} name="André" cargo="Diretor de Oi Sdds"/></Box>)
