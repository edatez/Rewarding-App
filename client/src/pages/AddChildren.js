import React, { useState } from "react";
import { Columns, Container, Form, Button, Heading, Table } from 'react-bulma-components';
import "./style.sass";
import api from "../utils/api";
import { useStoreContext } from "../store";

function AddChildren () {
    
    const [formObject, setFormObject] = useState({})
    const [state, dispatch]= useStoreContext()

   
    var handleInputChange = event => {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    var handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        console.log("addchild");
        api.addChildren({
            childName: formObject.childName,            
          })
        .then(() => {
            window.location.reload()
        })
        .catch(err => console.log(err));
      };
    
    var handleDelete = (childId) => {
        api.deleteChildren(childId)
        .then(() => {
            window.location.reload()
        })
        .catch(err => console.log(err));
    } 
    const { Field, Control } = Form;
       
    return (
            
        <Container className="is-mobile">
            <Container className="is-centered">
                <Columns.Column className="is-narrow has-text-centered ml-0">  
                    <Heading className="heading1">Children</Heading>

                    <Container style={{ marginBottom: 40 }}>               
                        <Table className="is-narrow is-hoverable is-striped">
                            <thead>
                                <tr>                        
                                    <th>Name</th>                      
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.user && state.user.children.map(child => (
                                <tr key={child._id}>
                                    <td>{child.childName}</td>                        
                                    <td><Button className="is-rounded is-danger is-light" onClick={()=>handleDelete(child._id)}>Delete</Button></td>                                    
                                </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td></td>                                    
                                </tr>
                            </tfoot>

                        </Table>
                            
                    </Container>
                    
                    <Container>
                        <Heading subtitle size={5} className="heading2">
                            Add New Child
                        </Heading>                

                        <form>
                            <Field>                
                                <Control>                    
                                    <input className="input" type="text" name="childName" onChange={handleInputChange} placeholder="Enter Child Name"/>                                                
                                </Control>                                               
                            </Field>
                        </form> 
                    
                    </Container>

                    <Container style={{ marginTop: 40 }}>
                        <Field>
                            
                                <Button className="is-primary is-rounded" onClick={handleFormSubmit}>Add</Button>
                            
                        </Field> 
                        {/* <Field>
                            
                                <Button className="is-primary is-rounded"><a className="has-text-white" href="/add-points">Back to Add Points</a></Button>
                            
                        </Field>                */}
                    </Container>

                </Columns.Column>
            </Container>
        </Container>
            
    )

}

export default AddChildren;

