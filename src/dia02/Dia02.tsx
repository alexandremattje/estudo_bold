import { render } from '@testing-library/react'
import { Button, DataTable, Icon } from 'bold-ui'
import React, { useEffect, useState } from 'react'

interface RowType {
  id: number
  name: string
  age: number
  algo: boolean
}

function Dia02() {
  const [sort, setSort] = useState(['id'])
  const [gambi, setGambi] = useState(false)

  useEffect(()=>{}, [gambi])

  const rows = allRows
    // Naive sorting for example purposes:
    .sort((a, b) => {
      if (sort[0] === 'id') {
        return a.id - b.id
      }
      if (sort[0] === '-id') {
        return b.id - a.id
      }
      return 0
    })

  const onEditItemClicked = (item: RowType) => () => {
    console.log(item)
  }

  const onCachorroItemClicked = (item: RowType) => () => {
    item.algo = !item.algo;
    setGambi(false);
    console.log(item)
  }

  return (
    <>
      <DataTable<RowType>
        rows={rows}
        sort={sort}
        onSortChange={setSort}
        loading={false}
        columns={[
          {
            name: 'id',
            header: 'ID',
            sortable: true,
            render: item => (
              <>
              {item.algo ? <Icon icon="adjust" /> : <Icon icon="angleDown" />} {item.id}
              </>),
          },
          {
            name: 'name',
            header: 'Name',
            sortable: true,
            render: item => item.name,
          },
          {
            name: 'age',
            header: 'Age',
            render: item => item.age,
          },
          {
            name: 'actions',
            align: 'right',
            render: item => (
              <>
                <Button size='small' skin='ghost' onClick={onEditItemClicked(item)}>
                  <Icon icon='penOutline' />
                </Button>
                <Button size='small' skin='ghost' onClick={onCachorroItemClicked(item)}>
                  <Icon icon='dogLeashed' />
                </Button>
              </>
            ),
          },
        ]}
      />
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
