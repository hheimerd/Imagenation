import React from 'react';

type SearchProps = {
    searchString: string;
    setSearchString(newValue: string): void;
}


const Search = ({searchString, setSearchString}: SearchProps) => {
    return (
        <div>
            Search
        </div>
    );
};

export default Search;
