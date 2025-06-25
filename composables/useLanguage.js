export const useLanguage = () => {
    const currentLang = useState('currentLang', () => 'ar')
  
    const toggleLanguage = () => {
      currentLang.value = currentLang.value === 'ar' ? 'en' : 'ar'
    }
  
    return { currentLang, toggleLanguage }
}
  