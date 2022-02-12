![Oasisswapperiphery](https://github.com/OasisSwap/OasisSwap-Periphery/blob/master/OasisswapPeriphery.jpg) 
This repository contains the periphery smart contracts for the OasisSwap Protocol.
For the lower level core contracts, see the [OasisSwap-core](https://github.com/OasisSwap/OasisSwap-core)
repository.

## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@OasisSwap/v3-periphery`
and import bytecode imported from artifacts located at
`@OasisSwap/v3-periphery/artifacts/contracts/*/*.json`.
For example:

```typescript
import {
  abi as SWAP_ROUTER_ABI,
  bytecode as SWAP_ROUTER_BYTECODE,
} from '@OasisSwap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json'

// deploy the bytecode
```

This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all OasisSwap code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The OasisSwap v3 periphery interfaces are available for import into solidity smart contracts
via the npm artifact `@OasisSwap/v3-periphery`, e.g.:

```solidity
import '@OasisSwap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

contract MyContract {
  ISwapRouter router;

  function doSomethingWithSwapRouter() {
    // router.exactInput(...);
  }
}

```
