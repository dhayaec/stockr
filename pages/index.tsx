import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import MetaHeader from '../src/components/common/MetaHeader'
import Gain from '../src/components/Gain'
import NoLossBuy from '../src/components/NoLossBuy'
import Target from '../src/components/Target'
import { menuItems, MenuItemType } from '../src/constants/constants'

const Home: NextPage = () => {
  const router = useRouter()
  const item = menuItems.find((i) => i.href === router.pathname) as MenuItemType

  return (
    <div>
      <Head>
        <title>Stock App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MetaHeader title={item.name} />
      <div className='text-center'>
        <Target name='Target / Stop Loss' />
        <Gain name='Gain / Loss' />
        <NoLossBuy name="Day's Range" />
      </div>
    </div>
  )
}

export default Home
