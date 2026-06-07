import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'
import { UnderDevelopmentModal } from '../components/UnderDevelopmentModal'

interface DevModalContextValue {
  openDevModal: () => void
}

const DevModalContext = createContext<DevModalContextValue | null>(null)

export function DevModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openDevModal = useCallback(() => setOpen(true), [])
  const closeDevModal = useCallback(() => setOpen(false), [])

  return (
    <DevModalContext.Provider value={{ openDevModal }}>
      {children}
      <UnderDevelopmentModal open={open} onClose={closeDevModal} />
    </DevModalContext.Provider>
  )
}

export function useDevModal() {
  const context = useContext(DevModalContext)
  if (!context) {
    throw new Error('useDevModal must be used within DevModalProvider')
  }
  return context
}
