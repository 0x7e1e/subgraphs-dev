import { PairCreated } from "../generated/BaseV1Factory/BaseV1Factory"
import { Pair } from "../generated/schema"
import { Pair as PairTemplate } from '../generated/templates'
import { Pair as PairContract } from '../generated/templates/Pair/Pair'
import { getToken } from './utils/tokens'

/*
type pair @entity {
  id: ID!
  token0: Token!
  token1: Token!
  isStable: Boolean!
  totalSupply: BigDecimal!
  reserve0: BigDecimal!
  reserve1: BigDecimal!
}

type Token @entity {
  id: ID!
  address: Bytes
  symbol: String
  name: String
  decimals: BigInt
  chainId: Int 
  logoURI: String
  isWhitelisted: Boolean
}
*/

export function handlePairCreated(event: PairCreated): void {
  const pairAddress = event.transaction.from

  let pair = Pair.load(pairAddress.toHex())
  if (!pair) {
     pair = new Pair(pairAddress.toHex())
  }

  const token0 = getToken(event.params.token0)
  if (token0) {
    token0.save()
  }

  const token1 = getToken(event.params.token1)
  if (token1) {
    token1.save()
  }

  pair.token0 = event.params.token0.toHex()
  pair.token1 = event.params.token1.toHex()
  pair.isStable = event.params.stable

  pair.save()

  PairTemplate.create(pairAddress)
}