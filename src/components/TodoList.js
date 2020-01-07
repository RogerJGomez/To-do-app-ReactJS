import React from 'react';
import TodoItem from './TodoItem'
import Items from './Tasks'
class TodoList extends React.Component {
    constructor(){
        super()
        this.state={
            todos:[]
        }
        this.add = this.add.bind(this)
        this.done = this.done.bind(this)
        this.delete = this.delete.bind(this)
    }
    componentDidMount(){
        this.setState({
            todos:Items
        })
    }
    add(e){
        e.preventDefault() 
        var name = e.target[0].value
        if(name===""){
            alert("Type at least 1 character")
        }else{
            this.setState(prevState => {
                var newtodos = prevState.todos
                var id = '_' + Math.random().toString(36).substr(2, 9);
                var newtodo ={
                    nombre: name,
                    done:false,
                    id:id
                }
                
                newtodos.push(newtodo)
                return{
                    todos: newtodos
                }
            })
            e.target[0].value=''
        }

    }

    delete(id){
        this.setState(prevState => {
            var newtodos = prevState.todos
            var removeIndex = newtodos.map(function(todo) { return todo.id; }).indexOf(id);
            newtodos.splice(removeIndex, 1);
            return{
                todos: newtodos
            } 
        })
    }

    done(id){ 
        this.setState(prevState => {
            const newTodos = prevState.todos.map( todo => {
                if(todo.id === id){
                    todo.done = !todo.done
                }
                return todo
            })
            return {
                todos: newTodos
            }
        })
    }
    render(){
        const styles={
            textAlign: "center",
            fontSize:"18px",
            padding: '4% 8% 4% 8%',
            minHeight: '100%',
            margin: '0 auto -50px'
        }

        return(
            <div style={styles}>
                <form onSubmit={this.add} className="formulario" >
                    <h3>Add a Task</h3>
                    <input id="nombre" type="text" placeholder="Name of the task" />
                    <button type="submit">Submit</button>
                </form>
                <div style={{marginTop:'40px'}}>
                    {this.state.todos.map(item =>
                        <TodoItem key={item.id} itemss={item} done={this.done}  delete={this.delete} />
                    )}
                </div>
                <div className="push"></div>
            </div>
        )
    }
}

export default TodoList;