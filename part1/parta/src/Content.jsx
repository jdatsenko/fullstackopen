import Part from "./Part"

const Content = (props) => {
    return(
        <>
            <Part name={props.part1} count={props.exercises1} />
            <Part name={props.part2} count={props.exercises2} />
            <Part name={props.part3} count={props.exercises3} />
        </>
    )
}

export default Content