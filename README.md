# React Native Blockchain Skeleton 💀

__Warning: Tested ✅ on react-native version 0.55.0 only__

__Warning: Storing `MNEMONIC` in 🔐 unecrypted format__

## Usage

1. `git clone https://github.com/kunsachdeva/React-Native-Blockchain-Skeleton.git`
2. `npm install` or `yarn`
3. Replace constants in `constants.js`
4. `react-native run-android` or 3. `react-native ios`

## Explanation

We are using `web3` version `0.20.5`. Don't use version `1.x`. The way web3 version 1.0 manages dependencies differs greatly from 0.20.x. Read more here https://web3js.readthedocs.io/en/1.0/ .

Blockchain apps need some libraries that are part of node.js but react-native does not have them, so we add `node-libs-react-native` as extra modules in `rn-cli.config.js`.

We are using `truffle` & infura network to connect to the blockchain and have a wallet. You have to input your `MNEMONIC` and may not be safe for production.
