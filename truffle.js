module.exports = {
	networks: {
		ropsten: {
			protocol: 'https',
			host: 'ropsten.infura.io',
			port: 8545,
			network_id: 3,
		},
		kovan: {
			protocol: 'https',
			host: 'kovan.infura.io',
			port: 8545,
			network_id: 42,
		},
		rinkeby: {
			protocol: 'https',
			host: 'rinkeby.infura.io',
			port: 8545,
			network_id: 4,
		},
		local: {
			protocol: 'https',
			host: '192.168.1.8',
			port: 8545,
			network_id: 0,
		},
	},
};
