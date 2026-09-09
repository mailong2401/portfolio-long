// locales/index.ts
import vi from './vi.json'
import en from './en.json'
import zh from './zh.json'
import ja from './ja.json'
import ko from './ko.json'

export const translations = {
  vi,
  en,
  zh,
  ja,
  ko,
} as const

export type LanguageCode = keyof typeof translations

// Helper để lấy nested value
export function getNestedValue(obj: any, path: string): string | undefined {
  const keys = path.split('.')
  let current = obj

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key]
    } else {
      return undefined
    }
  }

  return typeof current === 'string' ? current : undefined
}
