import type { NextPage } from 'next'
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
      <MetaHeader title={item.name} />
      <div className='px-2 text-center'>
        <Target name='Target / Stop Loss' />
        <Gain name='Gain / Loss' />
        <NoLossBuy name="Day's Range" />
      </div>
    </div>
  )
}

export default Home
