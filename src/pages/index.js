import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} ·
            <a href={`mailto: ${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Me chamo Hebert Matheus Montarroyos Pinho, Natural do Rio de
            Janeiro, Nascido em 14/06/1996. Apaixonado por tudo que envolve
            tecnologia e áreas afins, sempre busco novos conhecimentos e
            aprimorar-me minhas competências a cada dia. Sempre dedicado à vida
            acadêmica, fazendo cursos extracurriculares na área de programação
            para sempre estar atualizado no setor. Sempre Comprometido com meus
            estudos e com um perfil bem analítico na tomada de decisões, além de
            focado em mostrar resultados e sempre evoluir cada vez mais.
          </p>
          <div className="social-icons">
            {config.socialLinks.map((social) => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiências</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Analista de Desenvolvimento</h3>
              <div className="subheading mb-3">Calindra</div>
              <ul>
                <li>Desenvolvedor Front-end.</li>
                <li>
                  Auxiliava com tarefas no Back-end para integrar as interfaces
                  com a lógica de negócio.
                </li>
                <li>
                  Utilizava de frameworks e bibliotecas populares, como React no
                  front e NodeJS no back -end.
                </li>
                <li>
                  Integração de APIs de terceiros para fornecer recursos
                  adicionais aos aplicativos.
                </li>
                <li>
                  Otimização de desempenho de sites e aplicativos para garantir
                  uma experiência do usuário ágil.
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Agosto 2020 - Maio 2023</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Trainee em Tecnologia</h3>
              <div className="subheading mb-3">Volanty</div>
              <ul>
                <li>Programa de Desenvolvimento Full Stack.</li>
                <li>
                  Abordado diversos tipos de tecnologias em diferentes Stacks
                  tendo a vivência pratica e teórica.
                </li>
                <li>
                  Algumas das Stacks abordadas : Front-end, Back-end, Mobile,
                  Análise de dados entre outras.
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2020 - Agosto 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Suporte Técnico</h3>
              <div className="subheading mb-3">Mls Wireless</div>
              <ul>
                <li>Configuração de redes em ambiente windows e linux.</li>
                <li>
                  Suporte técnico telefônico Abertura e retorno de chamados.
                </li>
                <li>Suporte técnico interno.</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                Setembro 2018 - Fevereiro 2020
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Formação Acadêmica</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Faculdade Unyleya</h3>
              <div className="subheading mb-3">
                Pós-graduação Lato Sensu : Engenharia de Software
              </div>
              <p>
                A Pós-graduação em Engenharia de Software, faz promover a
                formação de recursos humanos para atuar nas diferentes áreas do
                conhecimento humano, de modo a atender às demandas da sociedade,
                utilizando as modernas tecnologias. Possibilita a compreensão e
                aplicabilidade das tecnologias na solução dos problemas das
                organizações. Além de Promover atualização profissional e
                pessoal técnico atuante na área, de modo que possam ser
                melhoradas as suas condições de gestão em tecnologia. Entre as
                principais atribuições do engenheiro de software, estão:
              </p>
              <p> . Desenvolver softwares e apps </p>
              <p> . Gerenciar projetos ligados aos softwares </p>
              <p> . Arquitetar o design estrutural dos programas </p>
              <p> . Realizar testes nos sistemas </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2020 - 2021</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Centro Universitário UniDombosco</h3>
              <div className="subheading mb-3">
                Graduação : Sistemas para Internet (ênfase em Internet das
                Coisas)
              </div>
              <p>CR 8,07</p>
              <p>
                O profissional formado em Sistema para Internet é responsável em
                desenvolver, implementar e gerenciar sites para internet,
                aplicativos, e-commerces, além de configurar hardwares e
                softwares e promover a segurança do sistema. Levando em
                consideração que a Internet das Coisas é uma tendência, o
                UniDomBosco traz um curso que une a formação em Sistema para
                Internet com a Internet das Coisas, para que o aluno esteja
                preparado para o mercado. A chamada Internet das Coisas (IoT –
                internet of things em inglês) surgiu no final dos anos 90 e
                refere-se à conectividade que objetos físicos, carros, prédios
                já possuem. Como tecnicamente qualquer objeto pode ser
                controlado por um aplicativo, há uma infinidade de objetos que
                podem no futuro estar incluídos na Internet das Coisas.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2019 - 2021</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Universidade Estácio de Sá</h3>
              <div className="subheading mb-3">
                Graduação : Analise e Desenvolvimento de Sistemas{' '}
              </div>
              <p>CR 8,87</p>
              <p>
                O Curso Superior de Tecnologia em Análise e Desenvolvimento de
                Sistemas visa capacitar o profissional a desenvolver, analisar,
                projetar e implantar sistemas de informação, informatização e
                automação, de forma a suprir as necessidades crescentes das
                empresas de todos os portes quanto a otimização visando o
                aumento da competitividade. Com duração mínima de 2 anos e meio
                (5 semestres), o curso de Análise e Desenvolvimento de Sistemas
                atua na formação de profissionais atendendo às novas demandas de
                mercado e habilitando o egresso para a atuação nas áreas de
                desenvolvimento de sistemas em suas diversas plataformas, em
                análise e modelagem de sistemas, bem como a sua implementação,
                implantação e administração de banco dados, governança em TI,
                planejamento e implantação de serviços relacionados a engenharia
                de software e gerenciamento de projetos em tecnologia da
                informação.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2018 - 2020</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Centro Universitário UniCarioca</h3>
              <div className="subheading mb-3">
                Técnico em Programação de Jogos Digitais
              </div>
              <p>
                O Curso Técnico de Programação de Jogos Digitais engloba as
                seguintes atribuições: Desenvolvimento de recursos, ambientes,
                objetos e modelos a ser utilizados nos jogos digitais utilizando
                a engine de criação de Jogos: Unity 3D. Além de softwares
                específicos para a construção gráfica, edição de imagens,
                modelagem de cenários e animação de personagens. Utilização de
                técnicas e programas de computadores especializados em
                tratamento de imagens e sons. O profissional é capacitado a
                construir uma representação gráfica de personagens e cenários e
                também de realizar as animações e modelagens alem de Storyboard
                específicos.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2014 - 2015</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">HABILIDADES</h2>

          <div className="subheading mb-3">
            LINGUAGENS &amp; FERRAMENTAS DE PROGRAMAÇÃO
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Área de Atuação</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Desenvolvedor Front-End
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">INTERESSES</h2>
          <p>
            Além de amante da Tecnologia e Desenvolvedor Front-End, sou um
            entusiasta das artes e historia além de amar lutar. Apaixonado por
            Artes Marciais sou praticante de Sanda(Boxe Chinês) e Aikido. Sou
            aficionado por novas tecnologias, sempre no tempo livre estou
            estudando ou lendo algum livro afim com o intuito de aperfeiçoar e
            aprender uma nova stack. Sempre colocando cada conhecimento em
            prática seja por projetos próprios no Github ou por certificados de
            Cursos e palestras onlines.
          </p>
          <p className="mb-0">
            Jamais esqueço dos soft skills, para isso sempre assisto palestras e
            leio livros de Desenvolvimento Pessoal sempre anotando e corrigindo
            possíveis pontos fracos no dia a dia. Buscando sempre a aprender e
            me tornar um ser humano melhor podendo contribuir ainda mais com o
            mundo.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">PRÊMIOS &amp; CERTIFICAÇÕES</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Participei em 2015 do Projeto Rio Ideias +450 o qual fiquei entre
              as 30 primeiros colocados com suas ideias de aplicativos para a
              cidade do Rio de Janeiro.
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
