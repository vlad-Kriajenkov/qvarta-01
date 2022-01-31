import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ru from '../lang/ru.json'
import ukr from '../lang/ukr.json'

Vue.use(VueI18n)

 const i18n = new VueI18n({
    locale: 'ukr',
    fallbackLocale: 'en',
    messages:{
        ru,
        ukr
    }
})

export default i18n;