import React from 'react'
import { css } from '@emotion/core'
import { Button, useTheme } from 'bold-ui'

export interface OurButtonProps {
    count: number
    onClick: () => void
}

export default function (props: OurButtonProps) {
    const {count, onClick} = props;

    const kindType = (c: number) => {
        if (c % 3 === 0) return 'normal' 
        if (c % 3 === 1) return 'danger' 
        if (c % 3 === 2) return 'primary' 
    }

    const theme = useTheme()

    const ccxp = css`
      border: solid 1px ${theme.pallete.gray.c60};
      color: ${theme.pallete.gray.c10};
      border-radius: 2px;
      box-shadow: ${theme.shadows.outer[10]};
      padding-left: 0px;
      font-size: ${count+10}px;
    `

    return (
        <>
    <Button style={ccxp}
   onClick={onClick} kind={kindType(count)}>
        Count click ({count} vezes)
    </Button>
    </>
)
}
