import React from "react";

const students = [
    {
        id: 1,
        name: '川崎'
    },
    {
        id: 2,
        name: '三橋'
    },
    {
        id: 3,
        name: '彼方'
    },
    {
        id: 4,
        name: '翔太'
    }
]

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    )
}

export default AttendanceBook;