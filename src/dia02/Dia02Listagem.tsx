import { render } from '@testing-library/react'
import { Button, DataTable, Icon } from 'bold-ui'
import React, { useEffect, useState } from 'react'
import { isTemplateSpan } from 'typescript'
import FormDemo from './Dia02Form'
import { RowType } from './RowType'

export interface Dia02Listagem {
  rows: RowType[]
}

function Dia02Listagem(props: Dia02Listagem) {
  const [sort, setSort] = useState(['id'])

  const [rows, setRows] = useState(props.rows
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

  const onEditItemClicked = (item: RowType) => () => {
    console.log(item)
  }

  const onCachorroItemClicked = (item: RowType) => () => {
    item.algo = !item.algo;

    setRows([...rows])
  }

  const onEstradinhaItemClicked = (item: RowType) => () => {
    var filtered = rows.filter(function (el) { return el.id != item.id; });

    setRows(filtered)
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
                    <Button size='small' skin='ghost' onClick={onEstradinhaItemClicked(item)}>
                      <Icon icon='roadFilled' />
                    </Button>
                  </>
                ),
              },
            ]}
          />
    </>
  )
}

export default Dia02Listagem

