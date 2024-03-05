/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer/>
        </>
    )
}

export default Layout


// <Layout>
//{children}
// </ Layout>