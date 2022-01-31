import CompA  from "./CompA";
let Comp=()=>{
  let emp_name="Rakesh";
  let id=56;
  let sal="45000";

  return <>
          <CompA name={emp_name} emp_id={id} salary={sal}/>
           
         </>
}
export default Comp;