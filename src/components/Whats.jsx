import logo from '@/images/logos/airbnb.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function WhatsApp() {
  return (
    <Link
      href={'https://wa.link/1z1sdk'}
      className="shaddow-md fixed bottom-4 right-4 h-16 w-16 rounded-full bg-white p-2 hover:h-14 hover:w-14"
    >
      <Image src={logo} alt="" />
    </Link>
  )
}
