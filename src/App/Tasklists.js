import React from "react";


export default class Tasklists extends React.Component {
    render() {
            const taskLists = this.props.tasklists.map( tasklists => {
            return <ul key={tasklists_id}>{tasklists.name}</ul>
            })
        return <ul>{taskLists}</ul>
    }
}