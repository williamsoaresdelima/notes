import { FileAddTwoTone } from "@ant-design/icons"
import { Button, Card, Divider, message, Spin } from "antd"
import { Typography } from 'antd'
import { useEffect, useRef } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import Notes from "../../components/notes"
import { getAllNote } from "../../core/store/note/note.thunk"
import { HomeContainer } from "./styles"
import { useDispatch, useSelector } from 'react-redux'
import LoadingStatus from "../../core/store/loadingStatus"
import { isEmpty } from "lodash"
import { useBeforeunload } from 'react-beforeunload';

const { Title } = Typography

const Home = () => {
    const dispatch = useDispatch()
    const notesRef = useRef()
    const { data, loading, error} = useSelector(state => state.note)
    
    useEffect(()=>{
        dispatch(getAllNote())
    }, [])
    
    useEffect(()=>{
        if(loading === LoadingStatus.idle) {
            showSuccess()
        }        
    }, [loading])

    useBeforeunload((event) => {
        if (loading !== LoadingStatus.idle) {
            event.preventDefault();
        }
    });
    
    useEffect(()=>{
        if(!isEmpty(error)) {
            showError()
        }        
    }, [error])

    const addNoteHandle = () => notesRef.current?.addNote()
    
    const showSuccess = () => message.success('Success updated!')

    const showError = () => message.error('Occurred Error!')

    return (
        <HomeContainer>
            <Title type="success">Notes Dashboard</Title>

            <Card style={{ width: '100%' }}>
                <Button icon={<FileAddTwoTone />} onClick={addNoteHandle}>
                    Add Note
                </Button>
            </Card>
            
            <Divider />

            <DndProvider backend={HTML5Backend}>
                <Spin spinning={loading === LoadingStatus.pending} tip="Loading...">
                    <Notes data={data} ref={notesRef} />
                </Spin>
            </DndProvider>
        </HomeContainer>
    )
}
export default Home
