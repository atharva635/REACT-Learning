function Student(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>student: {props.isStudent ? "Yes" : "No"}</p>
        </div>

    );

}
export default Student