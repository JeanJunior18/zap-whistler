import fs from 'node:fs'

export default function getMessage(filePath = '') {
  if (!filePath) throw new Error('file path is required!')
  if (!fs.existsSync(filePath)) throw new Error('file found!')

  return fs.readFileSync(filePath, 'utf8')
}