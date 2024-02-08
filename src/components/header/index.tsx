"use client"

import { Icons } from '@/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {

  const pathname = usePathname()
  let menu = [
    {
      "image": "roulette",
      "name": "Roulette",
      "link": '/roulette'
    },
    {
      "image": "betting",
      "name": "Match Betting",
      "link": "#"
    },
    {
      "image": "coinflip",
      "name": "Coinflip",
      "link": '/coinflip'
    },
    {
      "image": "cases",
      "name": "Cases",
      "link": '#'
    },
  ]


  return (
    <header className='bg-dark-200 px-[95px] py-2 flex justify-between items-center gap-10 fixed w-full left-0 top-0 z-30'>
      <Link href='/'>
        <Icons type='logo' />
      </Link>

      <div className='flex gap-10 items-center bg-transparent'>
        {
          menu.map((item: any, index: number) => {
            return (
              <Link href={item.link} key={index} className='flex gap-2 items-center bg-transparent group cursor-pointer'>
                <Icons type={item?.image} pathname={pathname} />
                <p className={`font-inter text-xs font-medium tracking-wide capitalize bg-transparent ${pathname === item?.link ? 'text-primary' : "text-light-100"} group-hover:text-primary`}>{item?.name}</p>
              </Link>
            )

          })
        }
      </div>
      <button className='py-2 px-4 rounded font-medium text-sm capitalize bg-primary leading-normal font-inter flex gap-1.5 tracking-wide items-center'>
        <Icons type='walletIcon'/>
        Connect Wallet
      </button>
    </header>
  )
}

export default Header
