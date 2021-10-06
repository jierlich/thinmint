import { useRouter } from 'next/router'

const TokenId = () => {
  const router = useRouter()
  const { tokenid } = router.query

  return <p>TokenID: {tokenid}</p>
}

export default TokenId