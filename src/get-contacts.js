import fs from 'node:fs'

export default function getContacts(filePath = '') {
  if (!filePath) throw new Error('file path is required!')
  if (!fs.existsSync(filePath)) throw new Error('file found!')

  // Lendo o arquivo inteiro
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Dividindo o conteúdo em linhas e colunas
  const rows = fileContent.split('\n').map(row => row.trim());
  const headers = rows.shift().split(','); // A primeira linha contém os cabeçalhos

  const data = rows.map(row => {
    const values = row.split(',');
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {});
  });

  return data
}