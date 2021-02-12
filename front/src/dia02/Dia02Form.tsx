import { Button, Cell, Checkbox, FormControl, Grid, HFlow, Radio, TextField } from 'bold-ui'
import React, { useState } from 'react'
import { RowType } from './RowType'

export interface FormDemoProps {
    item: RowType
    editedItem: (item: RowType) => void
    setEditing: () => void
 }
  
  function FormDemo(props: FormDemoProps) {
  const [formState, setFormState] = useState<RowType>(props.item)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.editedItem(formState)
    // alert(JSON.stringify(formState, null, 2))
    props.setEditing()
  }

  const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target

    setFormState(state => ({
      ...state,
      [name]: el.type === 'checkbox' ? el.checked : el.value,
    }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid wrap>
          <Cell xs={6}>
            <TextField
              name='name'
              label='Name'
              placeholder='Enter your full name'
              value={formState.name}
              onChange={handleChange('name')}
              required
            />
          </Cell>
          <Cell xs={6}>
          </Cell>
          <Cell xs={6}>
            <TextField
              name='idade'
              label='Idade'
              type='number'
              placeholder='Enter your age'
              value={formState.age}
              onChange={handleChange('age')}
            />
          </Cell>
          <Cell xs={6}>
            <FormControl label='Favorite color'>
              <HFlow>
                <Radio name='color' value='red' label='Red' onChange={handleChange('color')} />
                <Radio name='color' value='green' label='Green' onChange={handleChange('color')} />
                <Radio name='color' value='blue' label='Blue' onChange={handleChange('color')} />
              </HFlow>
            </FormControl>
          </Cell>
          <Cell xs={12}>
            { <Checkbox name='algo' checked={formState.algo} label='Isso é algo?' onChange={handleChange('algo')} /> }
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