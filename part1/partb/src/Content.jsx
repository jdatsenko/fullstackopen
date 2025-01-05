import Part from "./Part"

const Content = (props) => {
    return (
      <>
        <Part name={props.part1.name} count={props.part1.exercises} />
        <Part name={props.part2.name} count={props.part2.exercises} />
        <Part name={props.part3.name} count={props.part3.exercises} />
      </>
    );
}

export default Content