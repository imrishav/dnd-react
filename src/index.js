import React from 'react'
import ReactDOM from 'react-dom'
import initialData from './inital-data'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from './column'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Courses = styled.div`
background-color: green;
height: 400px;
width:400px;
`;

const Semester = styled.div`
background-color: red;
width: 500px;

`;

class App extends React.Component {
  state = initialData

  onDragEnd = result => {
    //Todo
    const { destination, source, draggableId } = result
    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    if (start == finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }

      this.setState(newState)
      return
    }

    const startTasksIds = Array.from(start.taskIds)
    startTasksIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTasksIds
    }
    const finishTasksIds = Array.from(finish.taskIds)
    finishTasksIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTasksIds
    }
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }

    this.setState(newState)
  }

  render () {
    console.log('state ****', this.state)
    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId]
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
            console.log('columnINdex', column.id)
            if (column.title === 'Courses') {
              return(
                    <div class="container">
                    
                    <div class="row">
                        <div class="col-8"><Column key={'column-3'} column={column} tasks={tasks} /></div>
                        <div class="col-4"><Column key={'column-2'} column={column} tasks={tasks} /></div>
                    </div>
                    </div>


                //   <Courses>
                //   <Column key={'column-3'} column={column} tasks={tasks} />
                //   </Courses>
              ) }
            // }else if(column.title === 'Semester 2'){
            //     return (
            //         <Semester>
            //       <Column key={'column-2'} column={column} tasks={tasks} />
            //       </Semester>
            //     )
                
            // } 
            
            // else {
            //   return <Column key={column.id} column={column} tasks={tasks} />
            // }

            
          })}
        </DragDropContext>
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
