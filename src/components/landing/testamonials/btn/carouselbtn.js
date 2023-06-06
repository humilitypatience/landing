export default ( {active} ) => {
    if( !active ){
        return (
            // frame1000003968
            <div className="w-[10px] h-[10px] border border-indigo-500 rounded-full">
                
            </div>
        )
    }else{
        return (
            // frame1000003968
            <div className="w-[26px] h-[10px] border bg-indigo-500 border-indigo-500 rounded-[5px]">
                
            </div>
        )
        
    }
}