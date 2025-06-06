import React, { useEffect, useRef } from "react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

interface EmojiPickerProps {
  onSelect: (emoji: string) => void
  onClose: () => void
}

export const EmojiPicker: React.FC<EmojiPickerProps> = ({ onSelect, onClose}) => {
  const pickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  return (
    <div ref={pickerRef} className="absolute, flex-1, z-100">
      <Picker
        data={data}
        onEmojiSelect = {(e: any) => {
          onSelect((e as any).native)
          onClose()
        }}
      />
    </div>
  )
}