import React from 'react'
import { RadioGroup } from '../src'

export const Group = () => {
  const [data] = React.useState([
    {
      id: 0,
      content: '手机类',
    },
    {
      id: 1,
      content: '电脑类',
    },
    {
      id: 2,
      content: '生活类',
    },
    {
      id: 3,
      content: '其它',
    },
    {
      id: 4,
      content: '禁用未选',
      disabled: true,
    },
  ])

  return (
    <>
      <h1>Group</h1>
      <div className="radio-group__wrap">
        <h2>default</h2>
        <div>
          <RadioGroup
            defaultValue={0}
            data={data}
            onChange={(value) => {
              console.log('onChange', value)
            }}
          />
        </div>
        <h2>vertical</h2>
        <div>
          <RadioGroup
            defaultValue={0}
            data={data}
            placement={'vertical'}
            onChange={(value) => {
              console.log('onChange', value)
            }}
          />
        </div>
      </div>
    </>
  )
}
