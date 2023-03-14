import React from 'react'

interface ToggleSwitchButtonProps {
  id: string
  checked?: boolean
  disabled?: boolean
  onChange?: (arg: any) => void
  icon?: {
    sun: string
    dark: string
  }
}

export const ToggleSwitchButton: React.FC<ToggleSwitchButtonProps> = props => {
  const {
    id,
    checked,
    disabled,
    onChange,
    icon = { sun: '☀', dark: '☾' },
  } = props
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={id}
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={e => onChange?.(e.target.checked)}
      />
      {id ? (
        <label
          className="toggle-switch-label"
          htmlFor={props.id}
          tabIndex={disabled ? -1 : 1}
        >
          <span
            className={
              disabled
                ? 'toggle-switch-inner toggle-switch-disabled'
                : 'toggle-switch-inner'
            }
            data-dark-icon={icon?.dark}
            data-sun-icon={icon?.sun}
          ></span>
          <span
            className={
              disabled
                ? 'toggle-switch-switch toggle-switch-disabled'
                : 'toggle-switch-switch'
            }
          ></span>
        </label>
      ) : null}
    </div>
  )
}
