import React, {useState,useContext} from "react";
// This r all fancy stuff from bootstrap to look your application decent,instead we can use css also here.
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup
} from "reactstrap";

import {v4} from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
    const [todoString, setTodostring] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === ""){
            return alert("Please enter a todo");
        }

        const todo = {
            todoString,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodostring("")

    }


    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                  <Input
                   type="text"
                   name="todo"
                   id="todo"
                   placeholder="Your next todo"
                   value = {todoString}
                   onChange={e => setTodostring(e.target.value)}
                />
        
                    <Button 
                      className="input-group-prepend"
                      color="warning"
                      // Todo:onClick we haven't added yet 
                    >
                      Add
                    </Button>
                </InputGroup>
            </FormGroup>
        </Form>
    );
};
export default TodoForm;