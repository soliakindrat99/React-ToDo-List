import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons';

const ToDo = (props) => {
    return (
        <>
        {props.toDo && props.toDo
            .sort((a, b) => a.id > b.id ? 1 : -1)
            .map((task, index) => {
            return (
              <>
                <div className="taskBg">
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskTask">{task.title} {task.description}</span>
                  <div className="iconsWrap">
                    <span title="Edit" 
                          onClick={ () => props.setUpdateData({ 
                            id: task.id, 
                            title: task.title, 
                            description: task.description
                        })}>
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span title="Delete" onClick={() => props.deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </>
            )
          })}
        </>
    )
}

export default ToDo;