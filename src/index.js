import getContacts from "./get-contacts.js";
import getMessage from "./get-message.js";
import prompt from "./prompt.js";

try {
  const contacts = getContacts('files/contacts.csv')
  const message = getMessage('files/message.txt') || await prompt('Digite a mensagem que deseja enviar: ')

  if (!contacts || !contacts.length) throw new Error('Lista de contatos não encontrada')
  if (!message) throw new Error('Mensagem não encontrada')

  console.log('Conectando ao Whatsapp...')

  console.log('Disparando mensagem em massa:', message)

  for (const contact of contacts) {
    const textMessage = `Oi ${contact.nome}!/n${message}`

    console.log('Enviando mensagem para', contact.telefone)
  }
} catch (err) { 
  console.error('Deu ruim!', err.message)
}