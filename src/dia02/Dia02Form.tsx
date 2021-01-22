import { Button, Cell, Checkbox, FormControl, Grid, HFlow, MaskedTextField, Radio, TextField } from 'bold-ui'
import React, { useState } from 'react'
import { RowType } from './RowType'

export interface FormDemoProps {
    item: RowType
    setEditing: () => void
 }
  
  function FormDemo(props: FormDemoProps) {
  const [formState, setFormState] = useState<RowType>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // alert(JSON.stringify(formState, null, 2))
    props.setEditing()
  }

//   const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
//     const el = e.target

//     setFormState(state => ({
//       ...state,
//       [name]: el.type === 'checkbox' ? el.checked : el.value,
//     }))
//   }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid wrap>
          <Cell xs={6}>
            <TextField
              name='name'
              label='Name'
              placeholder='Enter your full name'
            //   value={formState.name}
            //   onChange={handleChange('name')}
            //   required
            />
          </Cell>
          <Cell xs={6}>
          </Cell>
          <Cell xs={6}>
            <TextField
              name='email'
              label='E-mail'
              type='email'
              placeholder='Enter your e-mail'
            //   value={formState.email}
            //   onChange={handleChange('email')}
            />
          </Cell>
          <Cell xs={6}>
            <FormControl label='Favorite color'>
              <HFlow>
                {/* <Radio name='color' value='red' label='Red' onChange={handleChange('color')} />
                <Radio name='color' value='green' label='Green' onChange={handleChange('color')} />
                <Radio name='color' value='blue' label='Blue' onChange={handleChange('color')} /> */}
              </HFlow>
            </FormControl>
          </Cell>
          <Cell xs={12}>
            {/* <Checkbox name='agreed' label='I agree to the terms of use' onChange={handleChange('agreed')} /> */}
          </Cell>
          <Cell xs={12}>
            <HFlow justifyContent='flex-end'>
              <Button type='reset' skin='outline'>
                Reset
              </Button>
              <Button type='submit' kind='primary'>
                Submit
              </Button>
            </HFlow>
          </Cell>
        </Grid>
      </form>

      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  )
}

export default FormDemo