import React from 'react'
import Topgame from '../components/home/Topgame'
import PopularApps from '../components/home/PopularApps'
import PopularGames from '../components/home/PopularGames'
import TopFreeApps from '../components/home/TopFreeApps'
import TopFreeGames from '../components/home/TopFreeGames'
import '../Home.css';

const Home = () => {
  return (
    <>
      <Topgame />
      <PopularApps />
      <PopularGames />
      <TopFreeApps />
      <TopFreeGames />
    </>
  )
}

export default Home
