// The phone that scans is the phone that will be the manager is the phone on which a message is sent
// And if he sends it won't work, in addition the code must be run for it to work
// These are the lines that will run him
// cd C:\Users\arial\DEMO\
    // node demo123TEMP.js

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth(), // Use local authentication to maintain the session
});

client.on('qr', (qr) => {
    // Generate QR code for scanning
    console.log('QR RECEIVED:', qr);
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message) => {


    console.log(`Received message: ${message.body}`);
    try {
        // Command to create or add to a group
        if (message.body.startsWith('!createGroup')) {
            console.log('Create group command received.');
            const args = message.body.split('\n').slice(1);
            const groupName = args[0];
            const numbers = args.slice(1);

            if (groupName && numbers.length > 0) {
                console.log(`Creating group: ${groupName} and adding numbers: ${numbers}`);
                await createOrAddToGroup(groupName, numbers);
                console.log(`end`);
                message.reply(`הצלחנו`);
            } else {
                message.reply("Please provide a valid group name and phone numbers.");
            }
        }
    } catch (error) {
        console.error('Error processing message:', error);
    }
});

// Function to create or add to a group
async function createOrAddToGroup(groupName, numbers) {
    try {
        console.log(`Group "${groupName}" does not exist. Creating group...`);
        await createGroup(groupName, numbers);
        
    } catch (error) {
        console.error('Error while creating or adding to group:', error);
        message.reply('Error while creating or adding to group:', error);
    }
}

async function createGroup(groupName, numbers) {
    try {
        // Format phone numbers (replace leading '0' with '972' and add "@c.us" suffix)
        const formattedNumbers = numbers.map(number => {
            if (number.startsWith('0')) {
                return `972${number.slice(1)}@c.us`;
            }
        });        
        console.log(`Creating group "${groupName}" and adding numbers: ${formattedNumbers.join(', ')}`);
        // Create the group with the participants
        const newGroup = await client.createGroup(groupName, formattedNumbers);
        console.log(`Group "${groupName}" created successfully with participants: ${formattedNumbers.join(', ')}`);
    } catch (error) {
        console.error('Error while creating group:', error);
        message.reply('Error while creating group:', error);
    }
}

// Start the client
client.initialize();
