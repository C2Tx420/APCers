import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import MemberCard from '../../components/MemberCard/MemberCard'

export default function DefaultLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <MemberCard/>
    <Footer/>
    </>
  )
}
