import React,{useEffect,useState} from "react";
import "antd/dist/antd.css";
import CourseBox from "./Components/box.js";
import FriendsInvite from "./Components/Invite.js";
import API from "../../Utils/api.js";
import {Link} from "react-router-dom";
import {
  Modal,
  Button,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Table,
  Tag,
  Space
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { RangePicker } = TimePicker;


function CourseDashboard(props){
  const columns=[
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
      render: (text) => <p>{text}</p>
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (time) => <p>{`${time[0]}-${time[1]}`}</p>
    },
    {
      title: "Participants",
      key: "participants",
      dataIndex: "participants",
      render: (participants) => (
        <>
          {participants.map((name) => {
            return (
              <Tag color={"geekblue"} key={name}>
                {name}
              </Tag>
            );
          })}
        </>
      )
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "courseID",
      render: (text) => (
        <Space size="middle">
          <Link to={`/room/${text}`}> Enter Room</Link>
          <button> Invite </button>
          <button onClick={handleDelete(text)}> Delete </button>
        </Space>
      )
    }
  ];

  const [courselist, setcourselist] = useState([]);
  const [visible, setvisible] = useState(false);
  const [confirmLoading, setconfirmLoading] = useState(false);
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState([]);
  const [participants, setparticipants] = useState([]);

  useEffect(() => {
    API.get(`user/Susie`)
      .then(res => {
        let rows = res.data.courses.map((item,i) => {
           return {key:i,
             courseName:item.courseName,
             date:item.date,
             time:item.time,
             participants:item.participants,
             courseID:item._id};
        });
        console.log(rows);
        setcourselist(rows);
      })
  },[]);

  const handleCancel=()=>{
    console.log("Clicked cancel button");
    setvisible(false);
    setdate("");
    settime([]);
    setparticipants([]);
    settitle("");
  }

  const onTitleChange=(event)=>{
    settitle(event.currentTarget.value);
  }

  const onDateChange=(value, dateString)=>{
    console.log(dateString);
    setdate(dateString);
  }

  const onTimeChange=(value, timeString)=>{
    console.log(timeString[0] + "-" + timeString[1]);
    settime(timeString);
  }


    const enterRoom=(id)=> {
      console.log(id);
    };

    const handleDelete=(id)=> {
      /*API.delete(`user/${id}`).then((res) => {
        //this.courselist.splice()
        console.log(res);
        console.log(res.data);
      });*/
    };

    const callbackFunction = (childData) => {
      setparticipants([...participants,childData]);
    }

    const handleOk=()=>{
      let dataToSubmit = {
        courseName: title,
        date: date,
        time: time,
        participants: participants,
        host: "Susie"
      };
      console.log(dataToSubmit);


      API.post(`course/add`, dataToSubmit).then((res) => {
        if (res.status !== 200) {
          alert("submit error");
          return;
        } else {
          setcourselist([...courselist,res.data])
        }
      });
      setvisible(false);
      setdate("");
      settime([]);
      setparticipants([]);
      settitle("");
    }



    return(
      <div>
        <CourseBox box1={courselist.length}/>
        <br />
        <Button
          type="dashed"
          onClick={() => setvisible(true)}
          style={{ width: "60%" }}
        >
          <PlusOutlined /> Add Course
        </Button>
        <Modal
          title="Schedule new course"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Form
            labelCol={{
              span: 6
            }}
            wrapperCol={{
              span: 14
            }}
            layout="horizontal"
          >
            <Form.Item label="CourseName">
              <Input onChange={onTitleChange} value={title} />
            </Form.Item>
            <Form.Item label="Select Date">
              <DatePicker
                onChange={onDateChange}
                //value={this.state.date}
              />
            </Form.Item>
            <Form.Item label="Select Time">
              <RangePicker
                onChange={onTimeChange}
                //value={this.state.time}
              />
            </Form.Item>
            <Form.Item label="Invite Friends">
              <FriendsInvite parentCallback = {callbackFunction}/>
            </Form.Item>
          </Form>
        </Modal>
        <div style={{ width: "80%", margin: "3rem auto" }}>
          <div style={{ textAlign: "center" }}>
            <h1> Lecture Schedule</h1>
          </div>
          <br />
          <Table columns={columns} dataSource={courselist} />
        </div>
      </div>
    );
}

export default CourseDashboard;
