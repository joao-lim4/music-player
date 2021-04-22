import React from 'react';
import ListaComponent from '../components/list-music/List.component';


export default props => {
  
    return (
        <React.Fragment>
            <ListaComponent {...props}/>
        </React.Fragment>
    )
}