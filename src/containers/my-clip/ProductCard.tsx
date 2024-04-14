import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import GetCartBtn from '@/components/Buttons/GetCartBtn'
import LikeBtn from '@/components/Buttons/LikeBtn'
import CardPrice from '@/components/ProductCard/CardPrice'
import CardReview from '@/components/ProductCard/CardReview'
import { favoriteDelState } from '@/states/likeAtom'
import { OptionCategoryType } from '@/types/OptionType'
import {
  CardDataType,
  DiscountType,
  ProductDeliveryType,
  ReviewTotalType,
  SellersType,
  ThumbnailType,
} from '@/types/productDataType'
import { getOptions } from '@/utils/optionApi'
import {
  getCardData,
  getDeliveryType,
  getDiscount,
  getReviewTotal,
  getSeller,
  getThumbnail,
} from '@/utils/productDataApi'

export default function ProductCard({
  type,
  itemCode,
  btnDefault,
}: {
  type: 'products' | 'bundles'
  itemCode: number
  btnDefault: boolean
}) {
  // TODO: 받아오기
  const isLiked = false

  const [cardData, setCardData] = useState<CardDataType | undefined>(undefined)
  const [thumbnailData, setThumbnailData] = useState<ThumbnailType | undefined>(
    undefined,
  )
  const [deliveryType, setDeliveryType] = useState<
    ProductDeliveryType | undefined
  >(undefined)
  const [sellerData, setSellerData] = useState<SellersType | undefined>(
    undefined,
  )
  const [discountData, setDiscountData] = useState<DiscountType | undefined>(
    undefined,
  )
  const [reviewTotalData, setReviewTotalData] = useState<
    ReviewTotalType | undefined
  >(undefined)
  const [optionAllData, setOptionAllData] = useState<OptionCategoryType[]>([])

  const [favoriteDelList, setFavoriteDelList] = useRecoilState(favoriteDelState)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFavoriteDelList([
        ...favoriteDelList,
        {
          identifier: itemCode.toString(),
          division: type === 'products' ? 'SINGLE_PRODUCT' : 'BUNDLE_PRODUCT',
        },
      ])
    } else {
      setFavoriteDelList(
        favoriteDelList.filter(
          (item) => item.identifier !== itemCode.toString(),
        ),
      )
    }
  }

  useEffect(() => {
    const getData = async () => {
      setCardData(await getCardData(type, itemCode))
      setThumbnailData(await getThumbnail(type, itemCode))
      setDeliveryType(await getDeliveryType(type, itemCode))
      setSellerData(await getSeller(type, itemCode))
      setDiscountData(await getDiscount(type, itemCode))
      setReviewTotalData(await getReviewTotal(type, itemCode))
      setOptionAllData(await getOptions(type, itemCode))
    }

    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative pt-2.5 pb-5">
      <Link href={`/${type}/${itemCode}`} className="relative">
        <div className="relative w-full aspect-[1] after:bg-[color:var(--m-colors-black)]">
          {cardData && thumbnailData && (
            <Image
              alt={cardData.name}
              src={thumbnailData.imageUrl}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          )}
        </div>
      </Link>

      {btnDefault && (
        <div className="mt-2 absolute w-[18px] h-[18px] left-0 top-0">
          <div className="mr-0.5 block relative w-5 h-5 z-[100]">
            <input
              type="checkbox"
              id="_thmb_1"
              className="absolute w-[18px] h-[18px] bg-[length:250px_250px] bg-[-20px_-15px] appearance-none m-0 p-0 rounded-none border-0 left-0 top-0.5 checked:bg-[0_-15px] bg-[url(https://sui.ssgcdn.com/ui/m_ssg/img/sp_cmem_form_v2.png)]"
              // checked={favoriteDelList.includes(itemCode.toString())}
              onChange={handleInput}
            />
            <label
              htmlFor="_thmb_1"
              className="overflow-hidden absolute w-[1px] h-[1px] leading-[0px] text-[0px]"
            >
              이름
            </label>
          </div>
        </div>
      )}

      <div className="flex items-center py-0.5">
        {deliveryType && deliveryType.engName && (
          <div className="h-5 w-[53px] relative">
            <Image
              src={`https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/rect/${deliveryType.engName}.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4`}
              alt={deliveryType.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              objectFit="cover"
            />
          </div>
        )}
        <div className="flex-1" />
        <div className="flex">
          {/* TODO: 제대로 수정 */}
          <LikeBtn itemId={itemCode} isLiked={isLiked} likeDivision={type} />
          <GetCartBtn code={itemCode} optionAllData={optionAllData} />
        </div>
      </div>

      <Link
        href={`/${type}/${itemCode}`}
        className="block pr-5 mt-2.5 text-[color:var(--m-colors-gray900)]"
      >
        {cardData && (
          <p className="overflow-hidden text-ellipsis text-[13px] leading-[normal] tracking-[-0.3px] break-all line-clamp-2">
            <span className="font-bold">{sellerData?.name}</span>{' '}
            {cardData.name}
          </p>
        )}

        {cardData && discountData && (
          <CardPrice
            discountData={discountData}
            originPrice={cardData.originPrice}
          />
        )}

        {reviewTotalData && <CardReview reviewTotalData={reviewTotalData} />}
      </Link>
    </div>
  )
}
