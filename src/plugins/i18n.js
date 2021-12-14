import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ru from '../lang/ru.json'

Vue.use(VueI18n)

 const i18n = new VueI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages:{
        ru
    }
})

export default i18n;