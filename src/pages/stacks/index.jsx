import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-10 ">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Stacks</title>
        <meta
          name="description"
          content="Minhas habilidades e ferramentas que eu uso."
        />
      </Head>
      <SimpleLayout
        title="Minhas habilidades e algumas ferramentas que uso."
        intro="Explore um pouco do meu potencial, das ferramentas que utilizo e de como posso contribuir com sua ideia."
      >
        <div className="space-y-20">
          <ToolsSection title="Front-End">
            <Tool title="JavaScript">
              Com mais de 5 anos de experiência em JavaScript e frameworks
              front-end, possuo expertise em criar interfaces interativas e
              responsivas para web, utilizando tecnologias modernas como:
              <p
                style={{
                  paddingTop: '15px',
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                ReactJS
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                React Native
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                NextJS
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                VueJS
              </p>
            </Tool>
            <Tool title="Estilizadores">
              Tenho ampla experiência em estilizadores de código mais utilizados
              do mercado como:
              <p
                style={{
                  paddingTop: '15px',
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Bootstrap
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                SaaS
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                LESS
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Tailwind CSS
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Styled Components
              </p>
            </Tool>
            <Tool title="UI/UX Design">
              Tenho habilidades de design para promover uma experiência de
              usuário mais agradável e interativa, com ferramentas como:
              <p
                style={{
                  paddingTop: '15px',
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Figma
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Sketch
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Adobe Photoshop
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                CorelDRAW
              </p>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Back-End">
            <Tool title="NodeJS">
              Com mais de 5 anos de experiência em Node.js e desenvolvimento
              back-end, possuo expertise em construir sistemas escaláveis,
              eficientes e robustos, utilizando tecnologias modernas como:
              <p
                style={{
                  paddingTop: '15px',
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Express.js para desenvolvimento de APIs robustas;
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                MongoDB e Mongoose para gerenciamento de dados;
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                JWT e OAuth para autenticação e autorização seguras;
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Jest e Mocha para testes automatizados.
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Servidor Nginx para hospedagem e gerenciamento de aplicações
                Node.js.
              </p>
            </Tool>
            <Tool title="PHP">
              Domino também o PHP, como alternativa ou suporte para a solidez da
              aplicação, com ferramentas como:
              <p
                style={{
                  paddingTop: '15px',
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Laravel para desenvolvimento de aplicações web dinâmicas;{' '}
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                MySQL e PostgreSQL para gerenciamento eficiente de bancos de
                dados;
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Autenticação e autorização utilizando JWT e OAuth;
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                PHPUnit e Codeception para testes automatizados e garantia de
                qualidade.
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Servidor Apache para hospedagem e gerenciamento de aplicações
                PHP.
              </p>
            </Tool>
            <Tool title="Ferramentas adicionais">
              Além de tudo, possuo outros conhecimentos que podem suprir ainda
              mais as necessidades do projeto, tais como:
              <p
                style={{
                  paddingTop: '15px',
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Cloud Computing: Amazon Web Services (AWS) para hospedagem
                escalável e serviços de computação em nuvem. Microsoft Azure
                para implementação e gerenciamento de aplicativos na nuvem.
                Google Cloud Platform (GCP) para serviços de armazenamento,
                análise de dados e computação em nuvem.
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Containers e Orquestração: Docker para criar, implantar e
                executar aplicativos em contêineres isolados. Kubernetes para
                orquestração de contêineres e gerenciamento de implantações em
                escala.
              </p>
            </Tool>
          </ToolsSection>

          <ToolsSection title="Ferramentas">
            <Tool title="Desenvolvimento colaborativo">
              Tenho facilidade em me integrar em equipes e trabalhar com
              versionamento de código e ferramentas de planejamento como:
              <p
                style={{
                  paddingTop: '15px',
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Git, GitHub e GitLab para controle de versão e colaboração em
                equipe.{' '}
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Trello e Jira para gestão de projetos
              </p>
            </Tool>
            <Tool title="Desenvolvimento">
              Costumo utilizar no meu dia a dia:
              <p
                style={{
                  paddingTop: '15px',
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Visual Studio Code, com também GitHub WorkSpaces ou IDEs
                self-Hosted
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Android Studio para depuração de aplicações android
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                XCode para depuração de aplicações IOS
              </p>
              <p
                style={{
                  display: 'list-item',
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  paddingLeft: '15px',
                }}
              >
                Postman e Insomnia para testes de API e integração de serviços.
              </p>
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
