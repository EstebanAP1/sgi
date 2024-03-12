'use client'

import {
  EyeSlashIcon,
  EyeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { Input } from '@/app/ui/input'
import { Button } from '@/app/ui/button'
import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from '@/app/lib/actions'

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
      className='flex w-full flex-col items-center justify-center gap-5'>
      <div className='flex w-full flex-col items-start justify-center'>
        <label htmlFor='username' className='select-none text-sm text-primary'>
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
      <div className='flex w-full flex-col items-start justify-center gap-2'>
        <label htmlFor='password' className='select-none text-sm text-primary'>
          Ingresa tu contraseña
        </label>
        <div className='flex w-full flex-row'>
          <Input
            type={visible ? 'text' : 'password'}
            name='password'
            id='password'
            className='peer/password rounded-r-none border-r-0 outline-none'
            spellCheck={false}
            aria-required
            aria-describedby='password-error'
          />
          <span
            className='flex cursor-pointer items-center justify-center rounded-r-xl border-2 border-l-0 border-gray-400 bg-background px-2 peer-focus/password:border-hoverPrimary'
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
            <p className='select-none text-sm text-green-500'>
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
      className={`group/login-button mt-2 flex w-full flex-row items-center justify-start gap-1 ${
        pending ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
      }`}
      aria-disabled={pending}
      disabled={pending}>
      Iniciar sesión
      <div className='transition group-hover/login-button:flex-1'></div>
      <ArrowRightIcon className='size-5 text-white' />
    </Button>
  )
}
