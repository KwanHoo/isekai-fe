import CategoryList from '@/components/category/CategoryList'
import ThemeList from '@/components/category/ThemeList'

async function getCategoryLM() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/products/category`,
    )
    const data = await response.json()
    return data
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return []
  }
}

export default async function Page() {
  const data = await getCategoryLM()

  return (
    <>
      <div>
        <CategoryList data={data} />
      </div>
      <div className="relative mb-[20px]">
        <h2 className="pb-[5px] pt-[20px] pl-[15px] text-[14px] font-bold text-[color:var(--m-colors-black)]">
          테마추천
        </h2>
        <ThemeList />
      </div>
    </>
  )
}
