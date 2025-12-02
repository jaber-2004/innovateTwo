const Heading = (props) => {

let partan = /&([^&]+)&/g;
let amin = props.text.replace(partan, "<span style=color:#FF7628> $1 </span>");
  return (
    <>
      <props.as
        className={props.className}
        dangerouslySetInnerHTML={{ __html: amin }}
      ></props.as>
    </>
  );
};
export default Heading;
