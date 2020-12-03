import React from "react";

export default class Tasks extends React.Component {
    render() {
        const tasksListi =  this.props.tasks.map( tasks => {
        return <ul key={tasks.id}>{tasks.name}</ul>
        })
        return <ul>{tasksListi}</ul>
    }
}