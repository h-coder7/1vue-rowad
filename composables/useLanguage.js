// composables/useLanguage.js
import { useI18n } from 'vue-i18n'

export const useLanguage = () => {
  const currentLang = useState('currentLang', () => 'ar')
  const { locale } = useI18n()

  const toggleLanguage = () => {
    const newLang = currentLang.value === 'ar' ? 'en' : 'ar'
    currentLang.value = newLang
    locale.value = newLang
  }

  return { currentLang, toggleLanguage }
}
