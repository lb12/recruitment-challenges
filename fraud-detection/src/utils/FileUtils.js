'use strict'

const fs = require('fs')
const path = require('path')

const readFile = (filename, filesFolderPath = process.env.FILES_FOLDER) => {
  if (!filesFolderPath) {
    throw new Error('No files folder path provided')
  }

  const pathFile = path.join(filesFolderPath, filename)
  try {
    return fs.readFileSync(pathFile, 'utf8')
  } catch (error) {
    throw error
  }
}

const getFileLines = (file, splitter = '\n') => {
  return file.split(splitter)
}

module.exports = {
  readFile,
  getFileLines
}
