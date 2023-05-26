const ContractAddress = "0xE5Cbc3d48821ECb32f997441bF46DB8032AdbA85";
const ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "note",
				"type": "string"
			}
		],
		"name": "ReportAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_banned",
				"type": "bool"
			}
		],
		"name": "SetAddressBanned",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "value",
				"type": "bool"
			}
		],
		"name": "SetPaused",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "value",
				"type": "bool"
			}
		],
		"name": "SetReportResigned",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_Version",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "GetAllReports",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "GetNotResignedReports",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "GetReportByID",
		"outputs": [
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "note",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "blockNum",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "resigned",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "GetReportFromTo",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "GetResignedReports",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetVersion",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "IsBanned",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

let resolveClientReady;
const Web3Client = { OnReady : new Promise((resolve, reject) => {resolveClientReady = resolve;})};

import("https://cdnjs.cloudflare.com/ajax/libs/web3/1.6.1/web3.min.js").then(async () => {
	const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

	const Contract = new web3.eth.Contract(ABI, ContractAddress)

	class Event{
		_subs=[];
		constructor(...subs){
			this._subs = subs;
		}
		AddCallback(callback){
			if (typeof callback !== 'function') throw new Error("Invalid parameter type for 'callback': "+typeof callback+". Expected 'function'.")
			this._subs.push(callback);
		}
		RemoveCallback(callback){
			this._subs.splice(this._subs.findIndex(x=> x == callback));
		}
		Invoke(data){
			for (let i=0; i< this._subs.length; i++){
				if (this._subs[i] != undefined){
					this._subs[i](data);
				}
			}
		}
	}

	const NullAddress = "0x0000000000000000000000000000000000000000";


	async function GetAccounts(){
		if (!Web3Client.IsWeb3BrowserCompatible) return [];

		let accounts = await ethereum.request({ method: 'eth_accounts' }).catch(err=> {return []});
		if (accounts.length === 0 || accounts[0] === undefined ) return [];
		//await RequestNetworkChange();
		Web3Client.ConnectedAddress = accounts[0];
		return accounts;
	}

	function ConnectWallet(){
		return new Promise(async (resolve, reject) => {
			if (ethereum) {
				const ConnectedAccounts = await ethereum.request({ method: 'eth_requestAccounts' }).catch(err => {
					Web3Client.ConnectedAddress = NullAddress
					resolve(null);
				});
				//await RequestNetworkChange();        
				Web3Client.ConnectedAddress = ConnectedAccounts[0];
				Web3Client.web3 = new Web3(ethereum);
				resolve(Web3Client.ConnectedAddress);
			} else {
				Web3Client.ConnectedAddress = NullAddress
				resolve(null);
			}
		});
	}

	async function RequestNetworkChange(){
		if (!ethereum) return false;
		try {
			await ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [{ chainId: '0x61' }],
			});
			return true;
		} catch (switchError) {
			if (switchError.code === 4902) {
				try {
					await ethereum.request({
						method: 'wallet_addEthereumChain',
						params: [
							{
							chainId: "0x61",
							chainName: "BSCTESTNET",
							rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
							nativeCurrency: {
								name: "BINANCE COIN",
								symbol: "tBNB",
								decimals: 18,
							},
							blockExplorerUrls: ["https://testnet.bscscan.com/"],
							},
						]
					});
					return true;
				} catch (addError) {
					return false;
				}
			} else {
				return false;
			}
		}
	}

	async function RequestSignedTX(from, to, encodedContractMethod, gasPrice = undefined) {
		return new Promise(async (resolve, reject) => {
			const transactionParameters = {
				from: from,
				to: to,
				data: encodedContractMethod,
				//gasPrice : web3.utils.numberToHex(gasPrice)
			};
			let res = await ethereum.request({
				method: 'eth_sendTransaction',
				params: [transactionParameters],
			}).catch(err=> {reject(err); return;});
			resolve(res);
		})
		
	}

	async function WaitForTXConfirm(signedTX){
		return new Promise((resolve, reject)=>{
			let timeout = 60000;
			let currentTime = 0;
			let searchInterval = setInterval(()=>{
				currentTime += 1000;
				if (currentTime >= timeout){
					resolve(false);
					return;
				}
				web3.eth.getTransactionReceipt(signedTX, (err, rec) => {
					if (rec){
						if (rec.status == true){
							resolve(true);
						} else {
							resolve(false);
						}
						clearInterval(searchInterval);
						return;
					}
				})
			}, 1000);
		})
	}

	class ContractInterface {
		constructor(address, abi){
			this.address = address;
			this.abi = abi;
			this.web3Contract = new web3.eth.Contract(abi, address);
		}

		async ReportAddress(_address, _note){
			try {
				if (!ethereum) return false;
				let acc = Web3Client.ConnectedAddress;
				let signedTX =  await Web3Client.RequestSignedTX(acc, ContractAddress, Contract.methods.ReportAddress(_address, _note).encodeABI()).catch(err=>{console.log(err); return false;})
				if (!signedTX) return false;
				return await Web3Client.WaitForTXConfirm(signedTX);
			} catch (err){
				console.log(err);
				return false;
			}
		}

		async SetReportResigned(_id, _value){
			try {
				if (!ethereum) return false;
				let acc = Web3Client.ConnectedAddress;
				let signedTX =  await Web3Client.RequestSignedTX(acc, ContractAddress, Contract.methods.SetReportResigned(_id, _value).encodeABI()).catch(err=>{console.log(err); return false;})
				if (!signedTX) return false;
				return await Web3Client.WaitForTXConfirm(signedTX);
			} catch {
				return false;
			}
		}
		
		async GetReports(_address, _resigned = null){
			if (_resigned == null){
				return await this.web3Contract.methods.GetAllReports(_address).call();
			} else if (_resigned == true){
				return await this.web3Contract.methods.GetResignedReports(_address).call();
			} else if (_resigned == false){
				return await this.web3Contract.methods.GetNotResignedReports(_address).call();
			}
		}

		async GetReportByID(_id){
			return await this.web3Contract.methods.GetReportByID(_id).call();
		}

		async GetReportFromTo(_from, _to){
			return await this.web3Contract.methods.GetReportFromTo(_from, _to).call();
		}

		async IsBanned(_address){
			return await this.web3Contract.methods.IsBanned(_address).call();
		}

		async IsPaused(){
			return await this.web3Contract.methods.paused().call();
		}
	}

	Web3Client.ConnectWallet = ConnectWallet;
	Web3Client.NullAddress = NullAddress;
	Web3Client.ConnectedAddress = NullAddress;
	Web3Client.web3 = null;
	Web3Client.GetAccounts = GetAccounts;
	Web3Client.RequestNetworkChange = RequestNetworkChange;
	Web3Client.OnWalletChange = new Event();
	Web3Client.OnWalletDisconnect = new Event();
	Web3Client.IsWeb3BrowserCompatible = false;
	Web3Client.ContractInterface = ContractInterface;
	Web3Client.WaitForTXConfirm = WaitForTXConfirm;
	Web3Client.RequestSignedTX = RequestSignedTX;
	Web3Client.ReporterContractAddress = ContractAddress;
	Web3Client.ReporterContractABI = ABI;

	if (typeof ethereum != "undefined"){
		Web3Client.web3 = new Web3(ethereum);
		let accounts = await GetAccounts();
		ethereum.on('accountsChanged', function (accounts) {
			try {
				Web3Client.ConnectedAddress = accounts[0];
				Web3Client.OnWalletChange.Invoke(accounts[0]);
			} catch {
				Web3Client.ConnectedAddress = NullAddress;
				Web3Client.OnWalletChange.Invoke(NullAddress);
			}
		})
		ethereum.on('disconnect', () => {
			Web3Client.ConnectedAddress = NullAddress;
			Web3Client.OnWalletChange.Invoke(NullAddress);
		});

		Web3Client.IsWeb3BrowserCompatible = true;
	} 

	resolveClientReady(Web3Client);
});
export default Web3Client;
