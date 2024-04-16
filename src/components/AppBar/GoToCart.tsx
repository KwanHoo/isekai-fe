import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import CartCntForClient from './CartCntForClient'

interface CartCountType {
  cnt: number
}

export async function getCartCount(
  type: 'member' | 'non-member',
  token?: string,
): Promise<CartCountType | undefined> {
  const headers = {
    Authorization: token || '',
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/carts/${type}/count`,
      { next: { tags: ['cartCount'] }, credentials: 'include', headers },
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getCartCount', err)
    return undefined
  }
}

export default async function GoToCart() {
  const session = await getServerSession(options)

  let cartCountPromise
  if (session) {
    cartCountPromise = getCartCount('member', session.user.accessToken)
  } else {
    cartCountPromise = getCartCount('non-member')
  }

  const [cartCount] = await Promise.all([cartCountPromise])

  return (
    <div className="flex items-center justify-center w-8 h-8 mr-1">
      <Link
        href="/cart"
        className="relative"
        aria-label="장바구니"
        scroll={false}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame">
            <path
              id="Vector"
              d="M20.4 8.40002H6V9.60003H20.4V8.40002Z"
              fill="black"
            />
            <path
              id="Vector_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 19.2C6 20.52 7.08 21.6 8.4 21.6C9.72 21.6 10.8 20.52 10.8 19.2C10.8 17.88 9.72 16.8 8.4 16.8C7.08 16.8 6 17.88 6 19.2ZM7.20004 19.2C7.20004 18.48 7.68004 18 8.40004 18C9.12004 18 9.60004 18.48 9.60004 19.2C9.60004 19.92 9.12004 20.4 8.40004 20.4C7.68004 20.4 7.20004 19.92 7.20004 19.2Z"
              fill="black"
            />
            <path
              id="Vector_3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.6 19.2C15.6 20.52 16.68 21.6 18 21.6C19.32 21.6 20.4 20.52 20.4 19.2C20.4 17.88 19.32 16.8 18 16.8C16.68 16.8 15.6 17.88 15.6 19.2ZM16.8001 19.2C16.8001 18.48 17.2801 18 18.0001 18C18.7201 18 19.2001 18.48 19.2001 19.2C19.2001 19.92 18.7201 20.4 18.0001 20.4C17.2801 20.4 16.8001 19.92 16.8001 19.2Z"
              fill="black"
            />
            <path
              id="Vector_4"
              d="M19.08 15.6H7.32001L4.08001 4.79998H1.20001V3.59998H5.04001L8.28001 14.4H18.12L20.4 7.07998L21.6 7.31998L19.08 15.6Z"
              fill="black"
            />
          </g>
        </svg>

        {session ? (
          cartCount &&
          cartCount.cnt > 0 && (
            <div className="absolute left-2/4 -top-1">
              <p className="bg-[color:var(--m-colors-primary)] text-[10px] font-medium min-w-[1rem] h-4 text-center text-[color:var(--m-colors-white)] leading-4 translate-x-[calc(-50%_+_10px] rounded-[100%]">
                <span className="text-[0px]">담은 상품 수</span>
                {cartCount?.cnt}
              </p>
            </div>
          )
        ) : (
          <CartCntForClient />
        )}
      </Link>
    </div>
  )
}
