import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }


  function HandlePages({currentPage}) {

    if(currentPage + 6 <  Math.ceil(totalItems / itemsPerPage)) {
        return (
        <nav>
        <ul style={{display:"flex", flexFlow:"row"}}>
            {pageNumbers.slice(currentPage - 1, currentPage + 5).map(number => (
            <li key={number} style={{marginRight: "15px", listStyleType: "none",}}>
                <a onClick={() => paginate(number)} href='!#' style={{textDecoration: "none"}} >
                {number}
                </a>
                
            </li>
            ))}
            ....
            <li key={Math.ceil(totalItems / itemsPerPage)} style={{marginRight: "15px", listStyleType: "none"}}>
                <a onClick={() => paginate(Math.ceil(totalItems / itemsPerPage)) } style={{textDecoration: "none"}} href='!#' >
                {Math.ceil(totalItems / itemsPerPage)}
                </a>
            </li>
            
        </ul>
        </nav>
        );
    }
    else if(currentPage !== Math.ceil(totalItems / itemsPerPage)) {
        return (
        <nav>
        <ul style={{display:"flex", flexFlow:"row"}}>
            {pageNumbers.slice(Math.ceil(totalItems / itemsPerPage) - 6, Math.ceil(totalItems / itemsPerPage) ).map(number => (
            <li key={number} style={{marginRight: "15px", listStyleType: "none",}}>
                <a onClick={() => paginate(number)} href='!#' style={{textDecoration: "none"}} >
                {number}
                </a>
                
            </li>
            ))}
        </ul>
        </nav>
        );
    }
    else {
        return (
        <nav>
        <ul style={{display:"flex", flexFlow:"row"}}>
            {pageNumbers.slice(currentPage - 6, currentPage).map(number => (
            <li key={number} style={{marginRight: "15px", listStyleType: "none",}}>
                <a onClick={() => paginate(number)} href='!#' style={{textDecoration: "none"}} >
                {number}
                </a>
                
            </li>
            ))}
            
            
        </ul>
        </nav>
        );
    }
  
  }

  return <HandlePages currentPage={currentPage}/>
};

export default Pagination;