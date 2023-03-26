export const getCookie = (name: string) => {
  if (typeof window === 'undefined') return null
  else {
    let matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'))
    return matches ? decodeURIComponent(matches[1]!) : undefined
  }
}
