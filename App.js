/* @unsachdeva */
import React, { Component } from 'react';

import {
  Text
} from 'react-native';

import HDWalletProvider from 'truffle-hdwallet-provider';
import Web3 from 'web3';
import truffleConfig from './truffle'

//Add this file with `MY_ADDRESS` and `MY_ADDRESS` as Strings
import { MY_ADDRESS, MNEMONIC } from './constants'

const wethArtifact = require('canonical-weth');
const contract = require('truffle-contract');

type Props = {};
export default class App extends Component<Props> {

  async doStuff() {
    const network = truffleConfig.networks.rinkeby;
    const TESTRPC_ADDRESS = `${network.protocol}://${network.host}/`;
    const web3Provider = new HDWalletProvider(MNEMONIC, TESTRPC_ADDRESS);

    web3 = new Web3(web3Provider);

    let wethContract = contract(wethArtifact);
    wethContract.setProvider(web3Provider)

    let wethDeployed = wethContract.at('0xc778417e063141139fce010982780140aa0cd5ab')

    var txn = await wethDeployed.deposit({ from: MY_ADDRESS, value: 0.001 * 1e18, gas: 2000000 })

    console.warn(txn)
  }

  async componentDidMount() {
    await this.doStuff();
  }
  render() {
    return (
      <Text>
        Welcome to React Native with Blockchain!
      </Text>
    );
  }
}