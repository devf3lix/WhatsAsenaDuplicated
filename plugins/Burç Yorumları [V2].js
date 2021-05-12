/*
Phaticusthiccy - @Unique_hunter
This plugin supports only turkish language!
*/

const cheerio = require('cheerio');
const Asena = require('../events');
const axios = require('axios')
const conf = require('../config')
const {MessageType} = require('@adiwajshing/baileys');
const yengec = "Yengeç burcu için günlük yorumlar."
const akrep = "Akrep burcu için günlük yorumlar."
const koc = "Koç burcu için günlük yorumlar."
const kova = "Kova burcu için günlük yorumlar."
const oglak = "Oğlak burcu için günlük yorumlar."
const ikizler = "İkizler burcu için günlük yorumlar."
const yay = "Yay burcu için günlük yorumlar."
const balık = "Balık burcu için günlük yorumlar."
const terazi = "Terazi burcu için günlük yorumlar."
const boga = "Boğa burcu için günlük yorumlar."
const aslan = "Aslan burcu için günlük yorumlar."
if (conf.WORKTYPE == 'private') {
    Asena.addCommand({pattern: 'yengec$', fromMe: true, deleteCommand: false desc: yengec}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/yengec-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'akrep$', fromMe: true, deleteCommand: false, desc: akrep}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/akrep-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'koc$', fromMe: true, deleteCommand: false, desc: koc}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/koc-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'kova$', fromMe: true, deleteCommand: false, desc: kova}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/kova-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'oglak$', fromMe: true, deleteCommand: false, desc: oglak}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/oglak-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'ikizler$', fromMe: true, deleteCommand: false, desc: ikizler}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/ikizler-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'yay$', fromMe: true, deleteCommand: false, desc: yay}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/yay-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'balık$', fromMe: true, deleteCommand: false, desc: balık}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/balik-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'terazi$', fromMe: true, deleteCommand: false, desc: terazi}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/terazi-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'boga$', fromMe: true, deleteCommand: false, desc: boga}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/boga-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'aslan$', fromMe: true, deleteCommand: false, desc: aslan}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/aslan-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
      
      
          }));

    Asena.addCommand({pattern: 'basak$', fromMe: true, deleteCommand: false, desc: boga}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/basak-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
    
  
    }));
} else if (conf.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'yengec$', fromMe: false, desc: yengec}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/yengec-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'akrep$', fromMe: false, desc: akrep}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/akrep-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'koc$', fromMe: false, desc: koc}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/koc-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'kova$', fromMe: false, desc: kova}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/kova-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'oglak$', fromMe: false, desc: oglak}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/oglak-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'ikizler$', fromMe: false, desc: ikizler}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/ikizler-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'yay$', fromMe: false, false: yay}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/yay-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'balık$', fromMe: false, desc: balık}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/balik-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'terazi$', fromMe: false, desc: terazi}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/terazi-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'boga$', fromMe: false, desc: boga}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/boga-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));

    Asena.addCommand({pattern: 'aslan$', fromMe: false, desc: aslan}, (async (message, match) => {

      const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/basak-burcu-gunluk-yorumu.html');
      const $ = cheerio.load(data.data);
      const msg = $('#contextual > div > p:nth-child(1)').text();
  
      await message.client.sendMessage(message.jid,msg,MessageType.text);
  
    }));
    Asena.addCommand({on: 'text', fromMe: true, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
        var HANDLER = '';
        if (/\[(\W*)\]/.test(conf.HANDLERS)) {
            HANDLER = conf.HANDLERS.match(/\[(\W*)\]/)[1][0];
        } else {
            HANDLER = '.';
        }
        if (message.message == HANDLER + 'yengec') {
            const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/yengec-burcu-gunluk-yorumu.html');
            const $ = cheerio.load(data.data);
            const msg = $('#contextual > div > p:nth-child(1)').text();  
            await message.client.sendMessage(message.jid,msg,MessageType.text);
        }
        else if (message.message == HANDLER + 'akrep') {
            const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/akrep-burcu-gunluk-yorumu.html');
            const $ = cheerio.load(data.data);
            const msg = $('#contextual > div > p:nth-child(1)').text(); 
            await message.client.sendMessage(message.jid,msg,MessageType.text);
        }
        else if (message.message == HANDLER + 'koc') {
            const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/koc-burcu-gunluk-yorumu.html');
            const $ = cheerio.load(data.data);
            const msg = $('#contextual > div > p:nth-child(1)').text();
            await message.client.sendMessage(message.jid,msg,MessageType.text);
        }
        else if (message.message == HANDLER + 'kova') {
           const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/kova-burcu-gunluk-yorumu.html');
           const $ = cheerio.load(data.data);
           const msg = $('#contextual > div > p:nth-child(1)').text();  
           await message.client.sendMessage(message.jid,msg,MessageType.text);
        }
        else if (message.message == HANDLER + 'oglak') {
           const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/oglak-burcu-gunluk-yorumu.html');
           const $ = cheerio.load(data.data);
           const msg = $('#contextual > div > p:nth-child(1)').text(); 
           await message.client.sendMessage(message.jid,msg,MessageType.text);
        }
        else if (message.message == HANDLER + 'ikizler') {
           const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/ikizler-burcu-gunluk-yorumu.html');
           const $ = cheerio.load(data.data);
           const msg = $('#contextual > div > p:nth-child(1)').text();
           await message.client.sendMessage(message.jid,msg,MessageType.text);
        }
        else if (message.message == HANDLER + 'yay') {
           const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/yay-burcu-gunluk-yorumu.html');
           const $ = cheerio.load(data.data);
           const msg = $('#contextual > div > p:nth-child(1)').text();  
           await message.client.sendMessage(message.jid,msg,MessageType.text);
        }
        else if (message.message == HANDLER + 'balık') {
           const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/balik-burcu-gunluk-yorumu.html');
           const $ = cheerio.load(data.data);
           const msg = $('#contextual > div > p:nth-child(1)').text();
           await message.client.sendMessage(message.jid,msg,MessageType.text);
        }
        else if (message.message == HANDLER + 'terazi') {
            const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/terazi-burcu-gunluk-yorumu.html');
            const $ = cheerio.load(data.data);
            const msg = $('#contextual > div > p:nth-child(1)').text();      
            await message.client.sendMessage(message.jid,msg,MessageType.text);
        }
        else if (message.message == HANDLER + 'boga') {
            const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/boga-burcu-gunluk-yorumu.html');
            const $ = cheerio.load(data.data);
            const msg = $('#contextual > div > p:nth-child(1)').text();  
            await message.client.sendMessage(message.jid,msg,MessageType.text);
        }
        else if (message.message == HANDLER + 'aslan') {
            const data = await axios.get('https://www.mynet.com/kadin/burclar-astroloji/basak-burcu-gunluk-yorumu.html');
            const $ = cheerio.load(data.data);
            const msg = $('#contextual > div > p:nth-child(1)').text();      
            await message.client.sendMessage(message.jid,msg,MessageType.text);
        }
    }));
}

