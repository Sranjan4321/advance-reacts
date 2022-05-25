import "../App.css"
import { Accordian } from "./Accordian";
// import { Element } from "./Accordian";
 import { OtpInput } from "./OtpInput"
export const handleChang=(Otp:string)=>{
    console.log("recieved",Otp);
  
}
 function Apps(){
    const data = [
        {
          dec:
            "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
            title: "This is panel header 1",
        },
        {
          dec:
            "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
          title: "This is panel header 2",
        },
        {
          dec:
            "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
          title: "This is panel header 3",
        },
        {
          dec:
            "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
          title: "This is panel header 4",
        },
        {
          dec:
            "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
          title: "This is panel header 5",
        },
      ];
     return(
         <div className="app">
           <OtpInput totalInputs={4}  onChange={handleChang}/>
           <Accordian data={data}/>
         </div>
     )
 }

 export default Apps