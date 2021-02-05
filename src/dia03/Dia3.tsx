import { render } from '@testing-library/react'
import { Button, Cell, Grid, Input, TextField } from 'bold-ui'
import { ControlledDateRangeCalendar } from 'bold-ui/lib/components/Calendar/RangeCalendar/DateRangeCalendar/ControlledDateRangeCalendar'
import React, { useEffect, useState } from 'react'
import { Dia02Listagem } from '../dia02/Dia02Listagem'
import { Login } from './Usuario'

interface Dia03Props {
    doLogin: (login: Login) => void
}

function Dia03(props: Dia03Props) {
    let [state, setState] = useState<Login>({email: ''})

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        props.doLogin(state)
    }

    const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
        setState({email: ''})
    }

    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const el = e.target

        setState(state => ({
            ...state,
            [name]: el.type === 'checkbox' ? el.checked : el.value,
        }))
    }

    return (
        <>
            <form onSubmit={handleSubmit} onReset={handleReset}>

                <Grid >
                    <Cell xs={6}>
                        <TextField placeholder='Usuário' required value={state.email} onChange={handleChange('email')} />
                    </Cell>
                    <Cell xs={6}>
                        <TextField placeholder='Senha' type='password' value={state.senha} onChange={handleChange('senha')} />
                    </Cell>
                    <Cell xs={6}>
                        <Button type='reset' kind='danger'>
                            Clear
                        </Button>
                        <Button type='submit' kind='primary'>
                            Login
                        </Button>
                        <Button kind='normal' onClick={() => {
                            localStorage.setItem('dohomemaranha@email.com', 
                            JSON.stringify(
                                {
                                    nome: 'Homem-aranha', 
                                    email: 'dohomemaranha@email.com', 
                                    senha: '1234'
                                }, null, 2))
                        }}>
                            Cadastrar usuário homem-aranha com senha 1234
                        </Button>
                    </Cell>
                    <Cell xs={12}>
                        <pre>{JSON.stringify(state, null, 2)}</pre>
                    </Cell>
                </Grid>
            </form>
        </>
    )

}

export default Dia03