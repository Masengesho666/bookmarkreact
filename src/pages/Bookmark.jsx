
import Button from "../components/Button"
import Error from "../components/Error"
import Input from "../components/Input"

const Bookmark= () => {
  return (
    <div className="w-full">
        <h1 className="text-6xl font-bold text-center text-[#504e4e] my-4">Bookmarks system</h1>
        <form className="bg-red-500 w-[800px] mx-auto p-4 rounded-[16px] text-center">
         
            <Input type={"text"} placeholder={"Website Name"} />
            <Input type={"URL"} placeholder={"url Link"} />
            
            <Button buttonText="Add" />
        
            
            </form>
            <Error errorcontent="Notvalid url"/>

    </div>
    
  )
}
export default Bookmark