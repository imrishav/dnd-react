import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import "./style.css";
import Task from "./task";

const Container = styled.div`
  width: 600px;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    console.log(this.props.isDraggingOver);

    return (
      <Container className={this.props.ifcourses ? "abc" : null}>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <div>
              <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            </div>
          )}
        </Droppable>
      </Container>
    );
  }
}
