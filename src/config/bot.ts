import { Telegraf } from 'telegraf';
import numeral from 'numeral';
import axios from 'axios';
import { Product } from '../models';

const bot = new Telegraf('2134807328:AAHtZ2UclERHpAEcT6Z6XEveLggIqAzIAvI');

export async function startTelegramBot() {
  bot.start((ctx) => {
    ctx.reply(`Welcome ${ctx.from.first_name}! how can we help you?`);
    ctx.replyWithHTML(`<b>I'm a bot, please talk to me!</b>`);
  });
  bot.help((ctx) => ctx.reply('Help!'));
  bot.settings((ctx) => ctx.reply('Settings!'));

  bot.hears(['get-products', 'Get products', 'Get Products', 'get products'], async (ctx) => {
    const producs = await axios.get<Product[]>('http://localhost:10000/api/product');

    producs.data.forEach((product) => {
      ctx.replyWithPhoto(
        { url: product.image },
        { caption: `${product.title} - $${numeral(product.price).format('0,0.00')}` },
      );
    });
  });

  bot.hears('hi', (ctx) => ctx.reply('Hey there'));

  await bot.launch();

  console.log('🤖 - Telegram Bot started');
}
