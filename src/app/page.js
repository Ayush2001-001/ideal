import Image from "next/image";

export default function Home() {
  return (

        <div className="flex-container">
          <div className="First">
            <div>Box One</div>
            <div style={{backgroundColor:"#2D72BA",width:"65vh",}}>Box Two</div>
            <div>Box Three</div>
          </div>
          <div className="second">
              <div>Box One</div>
              <div style={{backgroundColor:"#2D72BA",width:"45vh"}}>Box Two</div>
              <div>Box Three</div>
          </div>
          <div className="three">
            <div>Box One</div>
            <div style={{backgroundColor:"#2D72BA",width:"20vh"}}>Box Two</div>
            <div>Box Three</div>
          </div>
      </div>
 );
  
}
