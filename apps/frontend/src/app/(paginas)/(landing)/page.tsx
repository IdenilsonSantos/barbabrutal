'use client'

import NossosClientes from '@/components/cliente/NossosClientes'
import TituloSlogan from '@/components/landing/TituloSlogan'
import NossosProfissionais from '@/components/profissional/NossosProfissionais'
import NossosServicos from '@/components/servico/NossosServicos'
import ContainerComBackground from '@/components/shared/ContainerComBackground'
import Head from 'next/head'

export default function Landing() {
    return (
        <div>
            <Head>
                <title>Barba Brutal - Agendamento de Serviços</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <TituloSlogan />
            <ContainerComBackground imagem="/banners/servicos.webp">
                <NossosServicos />
            </ContainerComBackground>
            <ContainerComBackground imagem="/banners/profissionais.webp">
                <NossosProfissionais />
            </ContainerComBackground>
            <ContainerComBackground imagem="/banners/clientes.webp">
                <NossosClientes />
            </ContainerComBackground>
        </div>
    )
}
