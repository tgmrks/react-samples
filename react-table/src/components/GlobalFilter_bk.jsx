import { useAsyncDebounce } from "react-table";
import { useState } from 'react';

// export function GlobalFilter({globalFilter, setGlobalFilter, preGlobalFilteredRows}) {
    
//     const [value, setValue] = useState(globalFilter);
//     const onChange = useAsyncDebounce(value => {
//         setGlobalFilter(value || undefined)
//     }, 200)//ms

//     return (
//         <span>
//             Search:{' '} 
//             <input value={globalFilter || ''} onChange={(e) => {
//                 setValue(e.target.value);
//                 onChange(e.target.value);
//                 }} 
//             />
//         </span>
//     )
// }
export function GlobalFilter({globalFilter, setGlobalFilter, preGlobalFilteredRows}) {
    return (
        <span>
            Search: {' '}
            <input 
                type="text" value={globalFilter || ''} onChange={(e) => setGlobalFilter(e.target.value)}
            />
        </span>
    )
}