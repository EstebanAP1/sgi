'use client'

import {
  EyeSlashIcon,
  EyeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { Input } from '@app/ui/input'
import { Button } from '@app/ui/button'
import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from '@app/lib/actions'

export default function LoginForm() {
  const [visible, setVisible] = useState(false)
  const [val, setVal] = useState('')
  const changeVisibility = () => setVisible(!visible)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setVal(event.target.value.replace(/\s/g, ''))
  }

  const initialState = { message: null, errors: {} }
  const [state, dispatch] = useFormState(authenticate, initialState)
  return (
    <form
      action={dispatch}
      className='w-full flex flex-col justify-center items-center gap-5'>
      <div className='flex w-full flex-col justify-center items-start'>
        <label htmlFor='username' className='text-sm text-primary select-none'>
          Ingresa tu usuario
        </label>
        <Input
          type='text'
          name='username'
          id='username'
          value={val}
          onChange={onChange}
          autoFocus
          spellCheck={false}
          aria-required
          aria-describedby='username-error'
        />
        <div id='username-error' aria-live='polite' aria-atomic='true'>
          {state.errors?.username &&
            state.errors.username.map((error: string) => (
              <p className='mt-2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <div className='flex w-full flex-col justify-center items-start gap-2'>
        <label htmlFor='password' className='text-sm text-primary select-none'>
          Ingresa tu contraseña
        </label>
        <div className='flex flex-row w-full'>
          <Input
            type={visible ? 'text' : 'password'}
            name='password'
            id='password'
            className='peer/password rounded-r-none outline-none border-r-0'
            spellCheck={false}
            aria-required
            aria-describedby='password-error'
          />
          <span
            className='flex items-center justify-center bg-background rounded-r-xl border-2 border-l-0 border-gray-400 peer-focus/password:border-hoverPrimary px-2 cursor-pointer'
            onClick={changeVisibility}>
            {visible ? (
              <EyeIcon className='size-5 text-primary' />
            ) : (
              <EyeSlashIcon className='size-5 text-primary' />
            )}
          </span>
        </div>
        <div id='password-error' aria-live='polite' aria-atomic='true'>
          {state.errors?.password &&
            state.errors.password.map((error: string) => (
              <p className='mt-2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <LoginButton />
      <div>
        {state.message && (
          <>
            <p className='text-sm text-green-500 select-none'>
              {state.message}
            </p>
          </>
        )}
      </div>
    </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type='submit'
      className={`group/login-button w-full mt-2 flex flex-row items-center justify-start gap-1 ${
        pending ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
      }`}
      aria-disabled={pending}
      disabled={pending}>
      Iniciar sesión
      <div className='group-hover/login-button:flex-1 transition-all'></div>
      <ArrowRightIcon className='size-5 text-white' />
    </Button>
  )
}
