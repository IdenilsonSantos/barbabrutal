'use client'
import { Suspense } from 'react'
import FormUsuario from '@/components/usuario/FormUsuario'
import Head from 'next/head'

export default function Page() {
    return (
        <>
        <Head>
            <title>Entrar - Barba Brutal - Agendamento de Serviços</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Suspense fallback={<div>Carregando...</div>}>
            <FormUsuario />
        </Suspense>
        </>
    )
}
