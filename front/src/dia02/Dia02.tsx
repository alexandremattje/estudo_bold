import { render } from '@testing-library/react'
import { Button, DataTable, Icon } from 'bold-ui'
import React, { useEffect, useState } from 'react'
import { isTemplateSpan } from 'typescript'
import FormDemo from './Dia02Form'
import Dia02Listagem from './Dia02Listagem'
import { RowType } from './RowType'

function Dia02() {
  const [editing, setEditing] = useState(false)
  const [editingItem, setEditingItem] = useState<RowType>({id: -1, algo: false});

  const [rows, setRows] = useState(allRows)

  const editedItem = (item: RowType) => {
    if (item.id === -1) {
      item.id = rows.length + 1
      setRows([...rows, item])
    } else {
      const found = rows.findIndex(it => {
        return it.id === item.id
      })
      rows[found] = {...item}

      // for (let i = 0; i < rows.length; i++) {
      //   if (rows [i].id === item.id) {
      //     rows[i] = {...item}
      //   }
      // }

      setRows([...rows])
    }
    console.log(item)
  }

  return (
    <>
      {editing ?
        <FormDemo item={editingItem} editedItem={editedItem} setEditing={() => {setEditing(false)}}/>
        :
        <>
        <Dia02Listagem rows = {rows} setItemParaEdicao={(item: RowType) => setEditingItem(item)} setEditing={() => {setEditing(true)}}/>
          <Button size='small' skin='ghost' onClick={() => {
            setEditingItem({id: -1, algo: false})
            setEditing(true)
            }}>
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
