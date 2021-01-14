# DFX Template for Create React App

Three commands to get you creating frontend applications connected to DFINITY canisters

### Requirements

- [DFINITY SDK (dfx)](https://sdk.dfinity.org/docs/download.html)

### 1. Clone this repository

`git clone https://github.com/taylorham/cra-template-dfx.git`

### 2. Create an app

`npm init react-app my-app --template file:./cra-template-dfx`
Or if you prefer yarn:
`yarn create react-app my-app --template file:./cra-template-dfx`

Be sure to replace `my-app` with your app name and ensure the relative path to your newly cloned `cra-template-dfx` directory is correct.

### 3. Start developing

```sh
cd my-app && npm start
```

This spins up your `dfx` canister in the background and runs your React app with webpack-dev-server.


> :tada:  Special thanks to Mio Quispe for their work on [`create-dfinity-app`](https://github.com/MioQuispe/create-dfinity-app) as inspiration and groundwork!
