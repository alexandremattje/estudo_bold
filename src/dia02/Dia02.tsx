import { render } from '@testing-library/react'
import { Button, DataTable, Icon } from 'bold-ui'
import React, { useEffect, useState } from 'react'
import { isTemplateSpan } from 'typescript'
import FormDemo from './Dia02Form'
import Dia02Listagem from './Dia02Listagem'
import { RowType } from './RowType'

function Dia02() {
  const [sort, setSort] = useState(['id'])
  const [editing, setEditing] = useState(false)
  const [editingItem, setEditingItem] = useState<any>();

  const [rows, setRows] = useState(allRows
    // Naive sorting for example purposes:
    .sort((a, b) => {
      if (sort[0] === 'id') {
        return a.id - b.id
      }
      if (sort[0] === '-id') {
        return b.id - a.id
      }
      return 0
    }))

  return (
    <>
      {editing ?
        <FormDemo item={editingItem} setEditing={() => {setEditing(false)}}/>
        :
        <>
        <Dia02Listagem rows = {rows}/>
          <Button size='small' skin='ghost' onClick={() => {setEditing(true)}}>
            <Icon icon='rocket' />
          </Button>
          
        </>}
    </>
  )
}

export default Dia02

// Fake data to populate table
let id = 1
const allRows: RowType[] = Array(3)
  .fill(true)
  .reduce(
    curr => [
      ...curr,
      { id: id++, name: 'MARIA MACHADO DE JESUS', age: 42 },
      { id: id++, name: 'JOSÉ DA SILVA MOREIRA', age: 34 },
      { id: id++, name: 'ALICE BARBOSA', age: 27 },
    ],
    [] as RowType[]
  )
