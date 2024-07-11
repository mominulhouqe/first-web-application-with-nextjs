import Counters from "@/components/counter/counter";


const Counter = () => {
 
 
    return (
       <div className="flex items-center justify-center h-screen bg-gray-200">
        
         <div className="w-96 h-56 bg-white rounded-lg border shadow-md  p-6 space-y-6">
            <h3 className="mb-4 text-2xl font-bold">Counter App With NextJs</h3>
       
        <Counters />
        </div>
       </div>
    );
};

export default Counter;