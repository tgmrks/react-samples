import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

// export const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
//   const [value, setValue] = useState(globalFilter)
//   const onChange = useAsyncDebounce(value => {
//     setGlobalFilter(value || undefined)
//   }, 1000)
//   return (
//     <span>
//       Search:{' '}
//       <input
//         value={value || ''}
//         onChange={e => {
//           setValue(e.target.value);
//           onChange(e.target.value);
//         }}
//       />
//     </span>
//   )
// }
export function GlobalFilter({globalFilter, setGlobalFilter}) {
  return (
      <span>
          Search: {' '}
          <input 
              type="text" value={globalFilter || ''} onChange={(e) => setGlobalFilter(e.target.value)}
          />
      </span>
  )
}