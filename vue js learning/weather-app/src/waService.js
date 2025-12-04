// waService.js
const { makeWaSocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const { state, saveState } = useSingleFileAuthState('./auth_info.json');

const sock = makeWaSocket({
  auth: state,
  printQRInTerminal: true
});

sock.ev.on('creds.update', saveState);
sock.ev.on('connection.update', up => {
  if(up.qr) { /* show QR in terminal or expose to admin */ }
  if(up.connection === 'close') { /* handle reconnect */ }
});

async function sendInvoiceImage(numberE164, buffer, filename) {
  // convert +123... to required JID format: number + '@s.whatsapp.net' or use helper
  const jid = numberE164.replace('+','') + '@s.whatsapp.net';
  // check registration (library name varies)
  const isRegistered = await sock.onWhatsApp(numberE164.replace('+','')) // example method
  if(!isRegistered || isRegistered.length === 0) return {ok:false, reason:'not_registered'};

  // send image
  await sock.sendMessage(jid, { image: buffer, caption: 'Your invoice', filename });
  return {ok:true};
}

module.exports = { sendInvoiceImage };
