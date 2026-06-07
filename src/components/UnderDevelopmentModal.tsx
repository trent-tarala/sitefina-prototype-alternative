interface UnderDevelopmentModalProps {
  open: boolean
  onClose: () => void
}

export function UnderDevelopmentModal({
  open,
  onClose,
}: UnderDevelopmentModalProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="liquid-glass-strong relative w-full max-w-md rounded-2xl px-8 py-10 text-center"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dev-modal-title"
      >
        <p
          id="dev-modal-title"
          className="font-body text-lg font-medium text-foreground md:text-xl"
        >
          Website under development
        </p>
        <button
          type="button"
          onClick={onClose}
          className="liquid-glass mt-6 cursor-pointer rounded-full px-8 py-2.5 font-body text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
        >
          OK
        </button>
      </div>
    </div>
  )
}
