export default function taskReducer(tasks, action) {

  switch (action.type) {
    case 'task_add': {
      return [
        {
          id: tasks.length - 1 + 1,
          text: action.text
        },
        ...tasks,
      ]
    }
    case 'task_edit': {
      return tasks.map(item => {
        if (item.id === action.text.id) {
          return action.text
        } else {
          return item
        }
      })
    }
    case 'task_delete': {
      return tasks.filter(item => item.id !== action.id)
    }

    default:
      throw Error('this action form error')
  }

} 