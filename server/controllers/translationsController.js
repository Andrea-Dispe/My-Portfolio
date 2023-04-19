
// MongoDB Models
const Translation = require('../models/TranslationModel');

exports.getTranslationByLang = async (req, res) => {
  const { lang } = req.params;
  if (!lang) {
    return res.send({ result: 'you are missing the lang param', translations: [] })
  }

  let translations;
  try {
    translations = await Translation.find({ lang })
  } catch (error) {
    console.error(error)
  }

  if (!translations || translations.length === 0) {
    return res.send({ result: 'No translation found for this language', translations: [] })
  }

  return res.send({ result: '', translations })
}

exports.getAllTranslations = async (req, res) => {
  let translations;
  try {
    translations = await Translation.find()
  } catch (error) {
    console.error(error)
  }

  if (translations.length > 0) {
    res.send(translations)
  } else {
    res.send([])
  }
}

exports.saveTranslation = async (req, res) => {
  const { translation } = req.body;
  const { lang } = req.params

  if (!translation) {
    return res.send('No translation provided')
  }

  let existingTranslation;
  try {
    existingTranslation = await Translation.findOne({ title: translation.title, lang })
  } catch (error) {
    console.error(error)
  }
  console.log('existingTranslation: ', existingTranslation);

  if (existingTranslation && existingTranslation.lang === lang) {
    return res.send(`sorry there already exist a translation with the title ${translation.title}`)
  }

  if (lang) {
    translation.lang = lang;
  } else {
    return res.send('You are missing the land param')
  }

  let saveTranslation;
  try {
    saveTranslation = new Translation(translation)
    await saveTranslation.save()
  } catch (error) {
    console.error(error)
  }

  return res.send(saveTranslation)
}

//TODO: to finish
exports.editTranslation = async (req, res) => {
  const { title, edit } = req.body;
  const { lang } = req.params

  let translation;
  try {
    translation = await Translation.findOne({ title, lang })
  } catch (error) {
    console.error(error)
  }

  console.log('translation: ', translation);
  // edit
  if (translation) {
    const editKeys = Object.entries(edit)
    const translationKeys = Object.entries(translation);

    for (const [key, value] of Object.entries(translation)) {
      console.log(`${key}: ${value}`);
    }
  }

  res.send(translation)
}

exports.deleteAllTranslations = async (req, res) => {
  let documents;
  try {
    documents = await Translation.deleteMany()
  } catch (error) {
    console.error(error)
  }
  return res.send(`${documents.deletedCount} documents have been deleted`)

}

exports.deleteTranslationByLang = async (req, res) => {
  const { lang } = req.params
  let deletedCount;
  try {
    documents = await Translation.deleteMany({ lang })
  } catch (error) {
    console.error(error)
  }
  return res.send(`${documents.deletedCount} documents have been deleted`)

}

exports.deleteOne = async (req, res) => {
  const { title } = req.body
  const { lang } = req.params

  let deletedCount;
  try {
    documents = await Translation.deleteOne({ title, lang })
  } catch (error) {
    console.error(error)
  }
  return res.send(`${documents.deletedCount} documents have been deleted`)
}

exports.getCountTranslations = async (req, res) => {
  let allTranslations;
  let result = [];
  try {
    allTranslations = await Translation.find()
  } catch (error) {
    console.error(error)
  }

  allTranslations.forEach(trans => {
    // check if trans.lang exists in result array
    const found = result.findIndex(res => {
      return Object.keys(res)[0] === trans.lang
    })
    // if trans.lang does nto exist in result array then add it and set it to 1
    if (found < 0) {
      result.push({
        [trans.lang]: 1
      })
    }
    // if it already exists
    else {
      result.forEach(res => {
        // check if the dynamic key of result is the same as trans.lang and if it is it means there is another iteration of lang so add 1
        if (Object.keys(res)[0] === trans.lang) {
          return res[trans.lang] += 1
        }
      })
    }
  })

  return res.send(result)
}