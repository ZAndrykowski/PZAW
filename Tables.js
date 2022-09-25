import React, {Component} from 'react'; //importowanie REACT'a
import Table from './Table/Table'

class Tables extends Component
{
    render() 
    {
        return (
        <div>
            <Table />
            <Table />
        </div>
        );
    }
}

export default Tables;

// function Tables()
// {
//     return 
//     (<div>

//     </div>);
// }
