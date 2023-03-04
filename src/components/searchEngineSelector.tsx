import { h } from 'preact'
import Dropdown from './dropdown'

const searchEngineOptions = [
  { value: 'google', label: 'Google' },
  { value: 'duckduckgo', label: 'DuckDuckGo' },
]

function SearchEngineSelector({ value, onChange }) {
  return (
    <Dropdown
      value={value}
      onChange={onChange}
      options={searchEngineOptions}
    />
  )
}

export default SearchEngineSelector
