import { createApp } from 'vue'
import App from './App.vue'
import WalletConnectProvider from "@walletconnect/web3-provider";

const provider = new WalletConnectProvider({})
console.log(provider)

createApp(App).mount('#app')
