import { DeleteOutlined } from '@ant-design/icons'
import { Button, Divider, Input } from 'antd'
import moment from 'moment'
import { useDrag } from 'react-dnd'
import { NoteContainer } from './styles'

const { TextArea } = Input

const Note = ({ id, left, top, description = '', createdAt, removeHandle = ()=>{}, updateHandle = ()=>{} }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'box',
      item: { id, left, top, description, createdAt },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, description, createdAt],
  )

  const changeHandle = e => updateHandle({ id, left, top, description:e.target.value, createdAt })

  const createdAtFormated = moment(createdAt).format('YYYY/MM/DD HH:mm:ss')

  if (isDragging) {
    return <div ref={drag} />
  }

  return (
    <NoteContainer
      className="box"
      ref={drag}
      style={{ left, top }}
      data-testid="box"
    >
      <Button type="primary" danger ghost onClick={()=>removeHandle(id)}>
        <DeleteOutlined />
      </Button>

      <Divider />
      
      <TextArea rows={4} value={description} onChange={changeHandle} />

      <Divider />

      { createdAtFormated } 
    </NoteContainer>
  )
}
export default Note