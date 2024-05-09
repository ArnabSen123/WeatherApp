import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { geoUrl, geoDBOptions} from "../api";

const Search = ({onSearchChange})=>{
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue)=>{
        try {
            const response = await fetch(`${geoUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoDBOptions);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };


    const handleOnChange = (searchData)=>{
        setSearch(searchData);
        onSearchChange(searchData);
    };
    return(
        <AsyncPaginate
            placeholder="Search For City"
            debounceTimeout={500}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search; 