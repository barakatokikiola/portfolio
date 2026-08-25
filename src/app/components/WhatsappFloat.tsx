'use client'

import { motion } from 'motion/react'
import { SiWhatsapp } from "react-icons/si";



import { useRef } from 'react'

export default function WhatsAppFloat() {
  const phoneNumber = '+2349033760570'
  const message = encodeURIComponent('Hello! I would like to know more about your services.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  const constraintsRef = useRef<HTMLDivElement>(null)
  const hasDraggedRef = useRef(false)

  return (
    <div ref={constraintsRef} className="fixed inset-0 z-50 pointer-events-none">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.12}
        dragMomentum={false}
        onDragStart={() => { hasDraggedRef.current = false }}
        onDrag={() => { hasDraggedRef.current = true }}
        onClick={(e) => {
          if (hasDraggedRef.current) {
            e.preventDefault()
            hasDraggedRef.current = false
          }
        }}
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        whileDrag={{ scale: 1.1 }}
        style={{ position: 'absolute', bottom: 24, right: 24, touchAction: 'none' }}
        className="flex items-center justify-center w-14 h-14 bg-green-700 text-white rounded-full shadow-lg pointer-events-auto cursor-grab active:cursor-grabbing focus:outline-none"
      >
        <SiWhatsapp className='w-7 h-7'/>
      </motion.a>
    </div>
  )
}