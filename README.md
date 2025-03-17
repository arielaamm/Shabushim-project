# WhatsApp Group Management Bot

This project is a simple WhatsApp bot that allows users to create and manage WhatsApp groups using predefined commands. The bot operates through the [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) library and requires scanning a QR code for authentication.

## Features
- Automatically logs into WhatsApp using local authentication.
- Allows users to create new WhatsApp groups by sending a message.
- Formats phone numbers automatically to match WhatsApp's international format.
- Runs entirely within a single JavaScript file.

## Installation
### Prerequisites
- Node.js installed on your system.
- A WhatsApp account.

### Setup Instructions
1. Clone this repository or download `WhatsAppBot.js`.
2. Install the required dependencies:
   ```sh
   npm install whatsapp-web.js qrcode-terminal
   ```
3. Run the script using:
   ```sh
   cd C:\Users\arial\DEMO\
   node WhatsAppBot.js
   ```
4. Scan the QR code displayed in the terminal with your WhatsApp mobile app.
5. The bot is now active and listening for commands.

## Usage
### Creating a Group
To create a new WhatsApp group, send a message in the following format:
```
!createGroup
Group Name
PhoneNumber1
PhoneNumber2
...
```
Example:
```
!createGroup
Work Team
0501234567
0529876543
```
This command will create a new group named "Work Team" and add the provided phone numbers to it.

## Notes
- The phone number that scans the QR code will be the bot manager.
- Phone numbers should be in local format (e.g., 0501234567). The bot automatically converts them to international format.
- If the group already exists, the bot will attempt to add the specified numbers.

## License
This project is open-source and available under the MIT License.

## Repository
For more details, visit the GitHub repository: [Shabushim Project](https://github.com/arielaamm/Shabushim-project/blob/main/WhatsAppBot.js)

