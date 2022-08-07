import React from 'react'

const useSearch = (
  search, //nama
  search2A, //status
  dataTable, //data
  target1,//key 1 = name
  target2,//key 2 = name
) => {
  const [filteredData, setFilteredData] = React.useState([])
  const [onSearch, setOnSearch] = React.useState(false)

  React.useEffect(() => {
    const filteredSearch = () => {
      let updatedData = []
      // searching nama saja
      if (!!search && search2A === '') {
        updatedData =
          dataTable.length !== 0
            ? dataTable.filter((item) => {
                const startsWith = item[target1].toLowerCase().startsWith(search.toLowerCase())
                const includes = item[target1].toLowerCase().startsWith(search.toLowerCase())
                if (startsWith) {
                  return startsWith
                } else if (!startsWith && includes) {
                  return includes
                } else return null
              })
            : []
        setOnSearch(true)
      }
      // searching status saja

      if(search2A !== '' && !search){
        const isSearching = search2A === 'true'
        updatedData = dataTable.length !== 0 
        ? dataTable.filter((item) => item[target2] === isSearching)
        : []

        setOnSearch(true)
      }
      // searching keduanya
      
      if (search2A !== null && !!search) {
        const isSearching = search2A === 'true'
        let searching =
          dataTable.length !== 0
            ? dataTable.filter((item) => {
                const startsWith = item[target1].toLowerCase().startsWith(search.toLowerCase())
                const includes = item[target1].toLowerCase().startsWith(search.toLowerCase())
                if (startsWith) {
                  return startsWith
                } else if (!startsWith && includes) {
                  return includes
                } else return null
              })
            : []

        searching.map((item) => {
          if(item[target2] === isSearching){
            updatedData.push(item)
          }
        })
          setOnSearch(true)
      }
      // disable onsearch

      if (!search && search2A.length === 0) {
        setOnSearch(false)
      }

      setFilteredData(updatedData)
    }

    filteredSearch()
  }, [search2A, dataTable, onSearch, search, target1, target2])

  return {filteredData, onSearch}
}

export default useSearch
