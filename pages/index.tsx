import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import MetaHeader from '../src/components/common/MetaHeader'
import Gain from '../src/components/Gain'
import NoLossBuy from '../src/components/NoLossBuy'
import PossibleGain from '../src/components/PossibleGain'
import Target from '../src/components/Target'
import { menuItems, MenuItemType } from '../src/constants/constants'
import { reverseStr } from '../src/utils/utils'

const Home: NextPage = () => {
  const router = useRouter()
  const item = menuItems.find((i) => i.href === router.pathname) as MenuItemType

  return (
    <div>
      <MetaHeader title={reverseStr(item.name)} />
      <h1 className='text-center' data-testid='heading'>
        Stockr
      </h1>
      <div className='px-2 text-center'>
        <Target name='Target / Stop Loss' />
        <Gain name='Gain / Loss' />
        <NoLossBuy name="Day's Range" />
        <PossibleGain name='Possible Gain' />
      </div>
    </div>
  )
}

export default Home
