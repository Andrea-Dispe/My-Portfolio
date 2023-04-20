const router = require('express').Router();
const translationsController = require('../controllers/translationsController');
const authMiddlewares = require('../middlewares/authMiddlewares')

router.get('/getAll', translationsController.getAllTranslations);

router.get('/get/:lang', translationsController.getTranslationByLang);

router.get('/count-translations-all-langs', translationsController.getCountTranslations);

router.post('/save/:lang', translationsController.saveTranslation);

router.post('/edit-one/:lang', translationsController.editTranslation);

router.post('/delete/:lang', authMiddlewares , translationsController.deleteTranslationByLang)

router.post('/delete-one/:lang', authMiddlewares, translationsController.deleteOne)

router.post('/delete-all', authMiddlewares, translationsController.deleteAllTranslations);

module.exports = router;
