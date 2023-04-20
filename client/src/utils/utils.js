


export const getUserLanguage = () => {
  // Cookie language
  // TODO: chaining doesnt work beause ? returns an error
  const cookieValue = document.cookie.split("; ")
  const i18nextCookie = cookieValue.find((row) => row.startsWith("i18next="))
  let langCookie;
  if (i18nextCookie) {
    langCookie = i18nextCookie.split("=")[1];
  }

  // html lang
  const htmlLang = document.querySelector('html').lang

  // local storage language
  const localStorageLang = localStorage.getItem('i18nextLng')

  // session storage language
  const sessionStorageLang = sessionStorage.getItem('i18nextLng')


  if (langCookie) {
    return langCookie
  } else if (htmlLang) {
    return htmlLang
  } else if (localStorageLang) {
    return localStorageLang
  } else if (sessionStorageLang) {
    return sessionStorageLang
  }

};


