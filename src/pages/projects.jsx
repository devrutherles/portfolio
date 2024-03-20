import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { useEffect, useState } from 'react'
import Show from '../components/show'
const projects = [
  {
    name: 'Recife Tec',
    description:
      'Um e-commerce completo, totalmente responsivo, com duas aplicações: Admin e cliente, feitos em nextJS. \n Versão demonstrativa',
    link: { href: 'https://shop-noce.vercel.app/', label: 'Abrir' },
    logo: logoPlanetaria,
  },
  {
    name: 'Fair price',
    description:
      'Uma plataforma de intermediação de serviços entre pintores e clientes, com 3 aplicações: Admin, cliente e profissional, todas feitas em nextJS. \n Versão demonstrativa*',
    link: { href: 'https://fairprice-beta.vercel.app/', label: 'Abrir' },
    logo: logoAnimaginary,
  },
  {
    name: 'Super Pão cliente',
    description:
      'Uma plataforma de marketplace para padarias e delicatessens, com 4 aplicações:\n Admim, feito em php e laravel.\n Cliente, feito em Javascript e ReactJS.\n Lojista, feito com php e laravel.\n Entregador, feito em Javascript e ReactJS. \n Versão demonstrativa ',
    link: { href: 'https://superpao.online/', label: 'Abrir' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Super Pão lojista',
    description:
      'Uma plataforma de marketplace para padarias e delicatessens, com 4 aplicações:\n Admim, feito em php e laravel.\n Cliente, feito em Javascript e ReactJS.\n Lojista, feito com php e laravel.\n Entregador, feito em Javascript e ReactJS. \n Versão demonstrativa ',
    link: { href: 'https://painel.superpao.online/', label: 'Abrir' },
    logo: logoOpenShuttle,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  const [current, setCurrent] = useState('')
  const changeCurrent = (data) => {
    setCurrent(data)
  }
  return (
    <>
      <Head>
        <title>Projetos</title>
        <meta name="description" content="As últimas coisas que desenvolvi.." />
      </Head>
      {current && (
        <div className=" fixed top-0 z-[999] h-[100%] w-[100%] bg-black bg-opacity-50   px-[10%] py-[5%] ">
          <button
            onClick={() => changeCurrent('')}
            className=" fixed  right-4 top-4 "
          >
            <img
              src={
                'https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564399-close_81512.png'
              }
              alt=""
              width={32}
              height={32}
            />
          </button>

          <Show data={current} />
        </div>
      )}
      <SimpleLayout
        title="Meus projetos."
        intro="Trabalhei em diversos projetos, aqui estão alguns que desenvolvi."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <div onClick={() => changeCurrent(project.link.href)}>
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-8 w-8"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={''}>{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </Card>
            </div>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
