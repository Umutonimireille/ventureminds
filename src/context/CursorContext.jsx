import { createContext, useContext, useState } from 'react'

const CursorContext = createContext({
  cursorColor: '#1E7FBF',
  setCursorColor: () => {},
  isHovering: false,
  setIsHovering: () => {},
})

export function CursorProvider({ children }) {
  const [cursorColor, setCursorColor] = useState('#1E7FBF')
  const [isHovering, setIsHovering] = useState(false)

  return (
    <CursorContext.Provider value={{ cursorColor, setCursorColor, isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  )
}

export function useCursor() {
  return useContext(CursorContext)
}
