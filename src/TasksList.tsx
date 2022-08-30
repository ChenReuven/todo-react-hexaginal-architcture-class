import { ReactElement } from 'react'

interface Props {
  children: any
}

function TasksList({ children }: Props): ReactElement {
  return <ul className="tasksList">{children}</ul>
}

export default TasksList
