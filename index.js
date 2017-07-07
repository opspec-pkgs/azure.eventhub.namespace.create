const msRestAzure = require('ms-rest-azure');
const AzureArmEventhub = require('azure-arm-eventhub');
const process = require('process');

const login = async () => {
    console.log('logging in');

    const loginType = process.env.loginType;
    const loginId = process.env.loginId;
    const loginSecret = process.env.loginSecret;
    const loginOpts = {domain: process.env.loginTenantId};

    let response;
    if (loginType === 'sp') {
        // https://github.com/Azure/azure-sdk-for-node/blob/master/runtime/ms-rest-azure/index.d.ts#L397
        response = await msRestAzure.loginWithServicePrincipalSecret(loginId, loginSecret, loginOpts);
    } else {
        // https://github.com/Azure/azure-sdk-for-node/blob/master/runtime/ms-rest-azure/index.d.ts#L356
        response = await msRestAzure.loginWithUsernamePassword(loginId, loginSecret, loginOpts);
    }

    console.log('login successful');

    return response;
};

const createOrUpdate = async (credentials) => {
    console.log('creating/updating event hub namespace');

    const armEventHub = new AzureArmEventhub(credentials, process.env.subscriptionId);

    // see https://github.com/Azure/azure-sdk-for-node/blob/7cc2b434f75f68e74b72b8f89b3e43e7cafbe5d4/lib/services/eventHubManagement/lib/operations/namespaces.js#L3194
    const options = {
        location: process.env.location,
        sku:{
            name: process.env.sku,
            tier: process.env.sku,
            capacity: parseInt(process.env.messagingUnits)
        }
    };

    await armEventHub.namespaces.createOrUpdate(
        process.env.resourceGroup,
        process.env.name,
        options,
    );

    console.log('creating/updating event hub successful');
};

login().then(createOrUpdate).catch(error => {
    console.log(error);
    process.exit(1)
});