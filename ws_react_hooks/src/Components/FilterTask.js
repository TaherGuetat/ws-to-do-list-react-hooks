export const FilterTask=({handleFilter})=>{
    return(
        <div>
            <button onClick={()=>handleFilter('Done')}>Done</button>
            <button onClick={()=>handleFilter('Undone')}>Undone</button>
            <button onClick={()=>handleFilter('All')}>All</button>
        </div>
    )
}