import React, { useState } from 'react'
import '../styles/Toggle.css'

export default function Toggle({
    value = null,
    onToggle = null,
    defaultValue = false
}) {
    const isControlled = value !== null
    const [internalValue, setInternalValue] = useState(defaultValue)

    const isOn = isControlled ? value : internalValue

    const handleToggle = () => {
        if (isControlled) {
            onToggle && onToggle(!value)
        } else {
            setInternalValue(!internalValue)
            onToggle && onToggle(!internalValue)
        }
    }

    return (
        <span
            className={`toggle-switch ${isOn ? 'on' : 'off'}`}
            onClick={handleToggle}
            role="switch"
            aria-checked={isOn}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleToggle()
                }
            }}
        >
            <span className="bob"></span>
        </span>
    )
}
