import React from "react";

export default class Projects extends React.Component {
	render() {
	  const projectsList = this.props.projects.map( projects => {
		return <ul key={projects.id}>{projects.name}</ul>
	  })
	  return <ul>{projectsList}</ul>
	}
}