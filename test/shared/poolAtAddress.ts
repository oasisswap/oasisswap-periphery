import { abi as POOL_ABI } from '@OasisSwap/v3-core/artifacts/contracts/OasisSwapV3Pool.sol/OasisSwapV3Pool.json'
import { Contract, Wallet } from 'ethers'
import { IOasisSwapV3Pool } from '../../typechain'

export default function poolAtAddress(address: string, wallet: Wallet): IOasisSwapV3Pool {
  return new Contract(address, POOL_ABI, wallet) as IOasisSwapV3Pool
}
